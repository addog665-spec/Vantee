import type { Metadata } from "next";
import { BagView } from "@/components/bag-view";
import { PlainHeader } from "@/components/page-hero";

export const metadata: Metadata = { title: "Your bag", robots: { index: false } };

export default function BagPage() {
  return (
    <section className="min-h-[70svh] bg-obsidian pb-24 pt-28">
      <div className="page-frame">
        <PlainHeader eyebrow="Selected pieces" title="Your bag." />
        <BagView />
      </div>
    </section>
  );
}
