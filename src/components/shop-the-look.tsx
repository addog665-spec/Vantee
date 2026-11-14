import Image from "next/image";
import Link from "next/link";
import { formatPrice, getProduct, type Look, type Product } from "@/lib/catalog";

export function ShopTheLook({ look, current }: { look: Look; current: string }) {
  const pieces = look.pieces.map(getProduct).filter((p): p is Product => Boolean(p));

  return (
    <section className="border-t border-white/12 bg-obsidian py-20">
      <div className="page-frame grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-graphite" data-reveal>
          <Image src={look.image} alt={look.imageAlt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </div>
        <div data-reveal>
          <p className="eyebrow">Shop the look</p>
          <h2 className="display mt-4 text-5xl">{look.title}</h2>
          <ul className="mt-10 border-t border-white/12">
            {pieces.map((p) => (
              <li key={p.slug} className="border-b border-white/12">
                <Link href={`/products/${p.slug}`} aria-current={p.slug === current ? "page" : undefined} className="group flex items-center gap-5 py-4">
                  <div className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden bg-graphite">
                    <Image src={p.images[0].src} alt="" fill sizes="5rem" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-bone group-hover:text-champagne">{p.name}</p>
                    <p className="mt-1 text-xs text-bone/50">{p.slug === current ? "You are viewing this piece" : p.color}</p>
                  </div>
                  <p className="shrink-0 text-sm text-bone/85">{formatPrice(p.price)}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-bone/60">
            Total for the look: {formatPrice(pieces.reduce((sum, p) => sum + p.price, 0))}
          </p>
        </div>
      </div>
    </section>
  );
}
