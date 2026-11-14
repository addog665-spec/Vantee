import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import { ClearBag } from "@/components/clear-bag";
import { PlainHeader } from "@/components/page-hero";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

async function isPaid(sessionId: string | undefined) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !sessionId) return false;
  try {
    const session = await new Stripe(key).checkout.sessions.retrieve(sessionId);
    return session.payment_status === "paid";
  } catch {
    return false;
  }
}

export default async function CheckoutSuccessPage({ searchParams }: PageProps<"/checkout/success">) {
  const { session_id } = await searchParams;
  const paid = await isPaid(typeof session_id === "string" ? session_id : undefined);

  return (
    <section className="min-h-[70svh] bg-obsidian pb-24 pt-28">
      <div className="page-frame">
        {paid ? (
          <>
            <ClearBag />
            <PlainHeader eyebrow="Order received" title="Thank you." />
            <p className="mt-8 max-w-lg text-base leading-7 text-bone/70">
              Your order is confirmed and a receipt is on its way to your inbox. Orders leave our studio within one business day, and tracking follows by email.
            </p>
          </>
        ) : (
          <>
            <PlainHeader eyebrow="Checkout" title="Almost there." />
            <p className="mt-8 max-w-lg text-base leading-7 text-bone/70">
              We could not confirm a payment for this visit. If you completed checkout, your receipt email is your confirmation. Otherwise your bag is still saved.
            </p>
          </>
        )}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={paid ? "/collections" : "/bag"} className="btn">{paid ? "Continue exploring" : "Return to bag"}</Link>
          <Link href="/support" className="btn">Order help</Link>
        </div>
      </div>
    </section>
  );
}
