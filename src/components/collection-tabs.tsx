import Link from "next/link";
import { collections, productsIn } from "@/lib/catalog";

export function CollectionTabs({ active }: { active: string }) {
  const tabs = [{ href: "/collections", slug: "all", label: "All pieces" }, ...collections.map((c) => ({ href: `/collections/${c.slug}`, slug: c.slug, label: c.name, count: productsIn(c.slug).length }))];
  return (
    <nav aria-label="Collections" className="no-scrollbar -mx-[clamp(1rem,4vw,4.5rem)] mb-10 flex gap-2 overflow-x-auto px-[clamp(1rem,4vw,4.5rem)]">
      {tabs.map((t) => (
        <Link
          key={t.slug}
          href={t.href}
          aria-current={active === t.slug ? "page" : undefined}
          className={`shrink-0 border px-4 py-2.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] transition-colors ${active === t.slug ? "border-champagne bg-champagne text-ink" : "border-white/20 text-bone/80 hover:border-white/60"}`}
        >
          {t.label}
          {"count" in t && t.count === 0 && <span className="ml-2 font-normal normal-case tracking-normal opacity-70">soon</span>}
        </Link>
      ))}
    </nav>
  );
}
