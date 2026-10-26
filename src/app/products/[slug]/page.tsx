import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-card";
import { ProductDetail } from "@/components/product-detail";
import { collectionName, getProduct, products } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} | VANTE`, description: product.description, images: [product.images[0].src] },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const label = collectionName(product.collection);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => `${siteUrl}${i.src}`),
    sku: product.id,
    color: product.color,
    brand: { "@type": "Brand", name: "VANTE" },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.slug}`,
      price: product.price,
      priceCurrency: "USD",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-obsidian pb-20 pt-24 sm:pt-28">
        <div className="page-frame">
          <nav aria-label="Breadcrumb" className="mb-6 text-[0.62rem] uppercase tracking-[0.13em] text-bone/50">
            <Link href="/collections" className="hover:text-bone">Collections</Link>
            <span className="mx-2">/</span>
            <Link href={`/collections/${product.collection}`} className="hover:text-bone">{label}</Link>
          </nav>
          <ProductDetail product={product} collectionLabel={label} />
        </div>
      </div>
      <section className="border-t border-white/12 bg-[#11110f] py-20">
        <div className="page-frame">
          <p className="eyebrow">Continue the chapter</p>
          <h2 className="display mb-10 mt-4 text-5xl">You may also like</h2>
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
