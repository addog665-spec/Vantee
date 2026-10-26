"use client";

import Link from "next/link";
import { ProductGrid } from "@/components/product-card";
import { getProduct, type Product } from "@/lib/catalog";
import { useStore } from "@/lib/store";

export function WishlistView() {
  const saved = useStore().wishlist.map(getProduct).filter((p): p is Product => Boolean(p));

  if (!saved.length) {
    return (
      <div className="mt-12 border-y border-white/15 py-16 text-center">
        <p className="font-serif text-3xl">Nothing saved yet.</p>
        <p className="mt-3 text-sm text-bone/60">Tap the heart on any piece to keep it here.</p>
        <Link href="/collections" className="btn mt-8">Explore collection</Link>
      </div>
    );
  }
  return (
    <div className="mt-12">
      <ProductGrid products={saved} />
    </div>
  );
}
