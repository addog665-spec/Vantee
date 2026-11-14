import Image from "next/image";
import Link from "next/link";
import { WishlistButton } from "@/components/wishlist-button";
import { collectionName, formatPrice, type Product } from "@/lib/catalog";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const [image, alternate] = product.images;
  return (
    <article className="group relative min-w-0">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-graphite shadow-[0_14px_38px_rgb(0_0_0/0.45)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
            className={`object-cover transition-[transform,opacity] duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] ${alternate ? "group-hover:opacity-0" : ""}`}
          />
          {alternate && (
            <Image
              src={alternate.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
              className="object-cover opacity-0 transition-[transform,opacity] duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-100"
            />
          )}
          {product.edition && (
            <span className="glass-deep absolute left-3 top-3 rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em]">
              {product.edition}
            </span>
          )}
          <div className="glass-deep absolute inset-x-2 bottom-2 flex items-start justify-between gap-3 rounded-[18px] px-3.5 py-3">
            <div className="min-w-0">
              <h3 className="flex items-center gap-2 text-sm text-bone">
                <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full border border-white/30" style={{ background: product.colorHex }} />
                <span className="truncate">{product.name}</span>
              </h3>
              <p className="mt-0.5 truncate pl-[1.125rem] text-xs text-bone/60">
                {collectionName(product.collection)} / {product.color}
              </p>
            </div>
            <p className="shrink-0 text-sm text-bone/90">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
      <WishlistButton slug={product.slug} name={product.name} className="absolute right-2 top-2" />
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} priority={i < 2} />
      ))}
    </div>
  );
}
