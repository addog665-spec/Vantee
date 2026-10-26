import Stripe from "stripe";
import { FREE_DELIVERY_THRESHOLD, getProduct } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

type Line = { slug: string; size: string; qty: number };

const deliveryFee = Number(process.env.STANDARD_DELIVERY_USD ?? 25);
const countries = (process.env.SHIP_TO_COUNTRIES || "US,CA,GB,IE,FR,DE,IT,ES,PT,NL,BE,GH,NG,ZA,AE,AU")
  .split(",")
  .map((c) => c.trim().toUpperCase())
  .filter(Boolean) as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[];

export function GET() {
  return Response.json({ enabled: Boolean(process.env.STRIPE_SECRET_KEY) });
}

export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return Response.json({ error: "Checkout is not connected yet." }, { status: 503 });

  let lines: Line[];
  try {
    const body = (await request.json()) as { lines?: Line[] };
    lines = Array.isArray(body.lines) ? body.lines : [];
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Prices always come from the catalog on the server, never from the browser.
  const items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotal = 0;
  for (const line of lines.slice(0, 20)) {
    const product = getProduct(String(line.slug));
    const qty = Math.floor(Number(line.qty));
    if (!product || !product.inStock || !product.sizes.includes(String(line.size)) || !(qty >= 1 && qty <= 10)) {
      return Response.json({ error: "Your bag has changed. Please review it and try again." }, { status: 400 });
    }
    subtotal += product.price * qty;
    items.push({
      quantity: qty,
      price_data: {
        currency: "usd",
        unit_amount: product.price * 100,
        product_data: {
          name: product.name,
          description: `Size ${line.size} / ${product.color}`,
          images: [`${siteUrl}${product.images[0].src}`],
          metadata: { slug: product.slug, size: String(line.size) },
        },
      },
    });
  }
  if (!items.length) return Response.json({ error: "Your bag is empty." }, { status: 400 });

  const freeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const origin = request.headers.get("origin") || siteUrl;

  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items,
      shipping_address_collection: { allowed_countries: countries },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: freeDelivery ? "Complimentary delivery" : "Standard delivery",
            fixed_amount: { amount: freeDelivery ? 0 : Math.round(deliveryFee * 100), currency: "usd" },
            delivery_estimate: { minimum: { unit: "business_day", value: 2 }, maximum: { unit: "business_day", value: 7 } },
          },
        },
      ],
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/bag`,
    });
    return Response.json({ url: session.url });
  } catch (error) {
    console.error("checkout: stripe session failed", error);
    return Response.json({ error: "Payment could not be started. Please try again shortly." }, { status: 502 });
  }
}
