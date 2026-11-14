import type { Metadata } from "next";
import { PlainHeader } from "@/components/page-hero";
import { WishlistView } from "@/components/wishlist-view";

export const metadata: Metadata = { title: "Wishlist", robots: { index: false } };

export default function WishlistPage() {
  return (
    <section className="min-h-[70svh] bg-obsidian pb-24 pt-28">
      <div className="page-frame">
        <PlainHeader eyebrow="Saved pieces" title="Wishlist." />
        <WishlistView />
      </div>
    </section>
  );
}
