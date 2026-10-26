"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { WishlistButton } from "@/components/wishlist-button";
import { deliveryAndReturns, formatPrice, sizeAndFit, type Product } from "@/lib/catalog";
import { bag } from "@/lib/store";

export function ProductDetail({ product, collectionLabel }: { product: Product; collectionLabel: string }) {
  const [size, setSize] = useState<string | null>(product.sizes.length === 1 ? product.sizes[0] : null);
  const [needsSize, setNeedsSize] = useState(false);
  const [added, setAdded] = useState(false);
  const [slide, setSlide] = useState(0);
  const rail = useRef<HTMLDivElement>(null);

  function add() {
    if (!size) {
      setNeedsSize(true);
      return;
    }
    bag.add(product.slug, size);
    setAdded(true);
  }

  function onRailScroll() {
    const el = rail.current;
    if (el) setSlide(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,1fr)] lg:gap-14">
      {/* Gallery: swipeable on phones, stacked on desktop */}
      <div className="-mx-[clamp(1rem,4vw,4.5rem)] lg:mx-0">
        <div
          ref={rail}
          onScroll={onRailScroll}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto lg:grid lg:grid-cols-2 lg:gap-3 lg:overflow-visible"
          aria-label={`${product.name} images`}
        >
          {product.images.map((img, i) => (
            <div key={img.src} className={`relative aspect-[4/5] w-full shrink-0 snap-center bg-graphite ${i === 0 ? "lg:col-span-2" : ""}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 27vw, 100vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center gap-2 lg:hidden" aria-hidden>
          {product.images.map((img, i) => (
            <span key={img.src} className={`h-1 rounded-full transition-all ${i === slide ? "w-6 bg-bone" : "w-1.5 bg-bone/30"}`} />
          ))}
        </div>
      </div>

      <aside className="mt-8 lg:sticky lg:top-24 lg:mt-0 lg:self-start">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{collectionLabel}{product.edition ? ` / ${product.edition}` : ""}</p>
            <h1 className="display mt-3 text-[clamp(2.8rem,6vw,4.25rem)]">{product.name}</h1>
          </div>
          <WishlistButton slug={product.slug} name={product.name} className="border border-white/20" />
        </div>
        <p className="mt-5 text-lg text-bone/90">{formatPrice(product.price)}</p>
        <p className="mt-6 max-w-md text-sm leading-6 text-bone/65">{product.description}</p>
        <p className="mt-4 flex items-center gap-2 text-xs text-bone/60">
          <span aria-hidden className="h-3 w-3 rounded-full border border-white/30" style={{ background: product.colorHex }} />
          Colour: {product.color}
        </p>

        <fieldset className="mt-8 border-y border-white/15 py-6">
          <legend className="sr-only">Select size</legend>
          <div className="flex items-center justify-between">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.15em]" aria-hidden>Select size</p>
            <a href="#size-fit" className="text-xs text-bone/60 underline-offset-4 hover:text-bone hover:underline">Size &amp; fit</a>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setNeedsSize(false);
                  setAdded(false);
                }}
                aria-pressed={size === s}
                className={`h-11 border text-xs transition-colors ${size === s ? "border-champagne bg-champagne text-ink" : "border-white/20 text-bone hover:border-white/60"}`}
              >
                {s}
              </button>
            ))}
          </div>
          {needsSize && <p className="mt-3 text-sm text-champagne" role="alert">Please choose a size first.</p>}
        </fieldset>

        {added ? (
          <div className="mt-5 grid grid-cols-2 gap-3" role="status">
            <Link href="/bag" className="btn btn-solid h-14">View bag</Link>
            <button type="button" onClick={() => setAdded(false)} className="btn h-14">Keep shopping</button>
            <p className="col-span-2 text-center text-xs text-bone/60">Added {product.name}, size {size}.</p>
          </div>
        ) : (
          <button type="button" onClick={add} disabled={!product.inStock} className="btn btn-solid mt-5 h-14 w-full">
            {product.inStock ? "Add to bag" : "Sold out"}
          </button>
        )}
        <p className="mt-4 text-center text-xs text-bone/50">In stock. Usually dispatches within 1 business day.</p>

        <div className="mt-8 divide-y divide-white/12 border-y border-white/12">
          <details open className="group py-1">
            <summary className="flex cursor-pointer items-center justify-between py-4 text-[0.7rem] font-bold uppercase tracking-[0.15em]">
              Details <span className="summary-icon text-lg transition-transform">+</span>
            </summary>
            <ul className="space-y-2 pb-5 text-sm leading-6 text-bone/65">
              {product.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </details>
          <details id="size-fit" className="py-1">
            <summary className="flex cursor-pointer items-center justify-between py-4 text-[0.7rem] font-bold uppercase tracking-[0.15em]">
              Size &amp; fit <span className="summary-icon text-lg transition-transform">+</span>
            </summary>
            <p className="pb-5 text-sm leading-6 text-bone/65">{sizeAndFit}</p>
          </details>
          <details className="py-1">
            <summary className="flex cursor-pointer items-center justify-between py-4 text-[0.7rem] font-bold uppercase tracking-[0.15em]">
              Delivery &amp; returns <span className="summary-icon text-lg transition-transform">+</span>
            </summary>
            <p className="pb-5 text-sm leading-6 text-bone/65">{deliveryAndReturns}</p>
          </details>
        </div>
      </aside>
    </div>
  );
}
