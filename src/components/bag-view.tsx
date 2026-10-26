"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { FREE_DELIVERY_THRESHOLD, formatPrice, getProduct } from "@/lib/catalog";
import { bag, useStore } from "@/lib/store";

export function BagView() {
  const { bag: raw } = useStore();
  const lines = raw.flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ ...l, product }] : [];
  });
  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const remaining = FREE_DELIVERY_THRESHOLD - subtotal;

  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [state, setState] = useState<{ busy: boolean; error?: string }>({ busy: false });

  useEffect(() => {
    fetch("/api/checkout")
      .then((r) => r.json())
      .then((d: { enabled: boolean }) => setEnabled(d.enabled))
      .catch(() => setEnabled(false));
  }, []);

  async function checkout() {
    setState({ busy: true });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines: raw }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setState({ busy: false, error: data.error || "Payment could not be started." });
    } catch {
      setState({ busy: false, error: "Payment could not be started. Check your connection and try again." });
    }
  }

  if (!lines.length) {
    return (
      <div className="mt-12 border-y border-white/15 py-16 text-center">
        <p className="font-serif text-3xl">Your bag is quiet.</p>
        <p className="mt-3 text-sm text-bone/60">When something earns its place, it will be here.</p>
        <Link href="/collections" className="btn mt-8">Explore collection</Link>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_24rem]">
      <ul className="divide-y divide-white/12 border-y border-white/12">
        {lines.map(({ product, size, qty }) => (
          <li key={`${product.slug}-${size}`} className="grid grid-cols-[6rem_1fr] gap-5 py-6 sm:grid-cols-[8rem_1fr]">
            <Link href={`/products/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-graphite">
              <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="8rem" className="object-cover" />
            </Link>
            <div className="flex min-w-0 flex-col">
              <div className="flex justify-between gap-4">
                <div>
                  <Link href={`/products/${product.slug}`} className="font-serif text-2xl hover:text-champagne">{product.name}</Link>
                  <p className="mt-1 text-xs text-bone/55">{product.color} / Size {size}</p>
                </div>
                <p className="text-sm">{formatPrice(product.price * qty)}</p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center border border-white/20">
                  <button type="button" aria-label={`Decrease quantity of ${product.name}`} onClick={() => bag.setQty(product.slug, size, qty - 1)} className="flex h-10 w-10 items-center justify-center hover:text-champagne">
                    <MinusIcon />
                  </button>
                  <span className="w-8 text-center text-sm" aria-live="polite">{qty}</span>
                  <button type="button" aria-label={`Increase quantity of ${product.name}`} onClick={() => bag.setQty(product.slug, size, qty + 1)} className="flex h-10 w-10 items-center justify-center hover:text-champagne">
                    <PlusIcon />
                  </button>
                </div>
                <button type="button" onClick={() => bag.setQty(product.slug, size, 0)} className="text-xs text-bone/55 underline-offset-4 hover:text-bone hover:underline">
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit border border-white/15 p-7 lg:sticky lg:top-24">
        <h2 className="font-serif text-3xl">Summary</h2>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between"><dt className="text-bone/65">Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
          <div className="flex justify-between"><dt className="text-bone/65">Delivery</dt><dd>{remaining <= 0 ? "Complimentary" : "Calculated at checkout"}</dd></div>
        </dl>
        {remaining > 0 && (
          <p className="mt-4 text-xs leading-5 text-champagne">Add {formatPrice(remaining)} more for complimentary delivery.</p>
        )}
        <div className="mt-6 flex justify-between border-t border-white/15 pt-5 text-base">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        {enabled === false ? (
          <p className="mt-6 border border-champagne/40 p-4 text-xs leading-5 text-bone/70">
            Online payment is being set up. Your bag is saved; please contact the house to place an order in the meantime.
          </p>
        ) : (
          <button type="button" onClick={checkout} disabled={state.busy || enabled === null} className="btn btn-solid mt-6 h-14 w-full">
            {state.busy ? "Opening secure checkout" : "Checkout"}
          </button>
        )}
        {state.error && <p className="mt-3 text-sm text-red-300" role="alert">{state.error}</p>}
        <p className="mt-4 text-center text-[0.68rem] text-bone/45">Secure payment by Stripe. Easy 14-day returns.</p>
      </aside>
    </div>
  );
}
