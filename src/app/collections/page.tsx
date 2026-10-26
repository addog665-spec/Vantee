import type { Metadata } from "next";
import { CollectionTabs } from "@/components/collection-tabs";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-card";
import { products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Collections",
  description: "The VANTE wardrobe: coats, knitwear, trousers, and shirts edited as a whole and designed to be claimed individually.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The wardrobe"
        title="Objects with purpose."
        intro="The pieces are edited as a whole, but designed to be claimed individually."
        image="/images/official/campaign/campaign-harbor-02.jpg"
        imageAlt="VANTE campaign at the harbor"
      />
      <section className="bg-obsidian pb-24 pt-10">
        <div className="page-frame">
          <CollectionTabs active="all" />
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
