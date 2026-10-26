import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionTabs } from "@/components/collection-tabs";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-card";
import { collections, getCollection, productsIn } from "@/lib/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const collection = getCollection((await params).slug);
  if (!collection) return {};
  return { title: collection.name, description: collection.tagline, alternates: { canonical: `/collections/${collection.slug}` } };
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();
  const items = productsIn(collection.slug);

  return (
    <>
      <PageHero eyebrow="Collection" title={collection.name} intro={collection.tagline} image={collection.image} imageAlt={collection.imageAlt} />
      <section className="bg-obsidian pb-24 pt-10">
        <div className="page-frame">
          <CollectionTabs active={collection.slug} />
          {items.length ? (
            <ProductGrid products={items} />
          ) : (
            <div className="border-y border-white/15 py-16 text-center">
              <p className="font-serif text-3xl">This chapter opens soon.</p>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-bone/60">
                Join the private notes on the homepage to hear first, or explore the pieces available now.
              </p>
              <Link href="/collections" className="btn mt-8">Explore all pieces</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
