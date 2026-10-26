import Link from "next/link";

const links = [
  { href: "/collections", label: "Collections" },
  { href: "/journal", label: "Journal" },
  { href: "/story", label: "The House" },
  { href: "/materials", label: "Materials" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/members", label: "Members" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/12 bg-[#11110f]">
      <div className="page-frame grid gap-12 py-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-[0.22em]">VANTE</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-bone/60">
            A modern wardrobe shaped by restraint, purpose, and the passage of time.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1 text-xs tracking-[0.06em] text-bone/80 hover:text-champagne">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="page-frame flex flex-col gap-4 border-t border-white/10 py-6 text-[0.62rem] uppercase tracking-[0.14em] text-bone/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} VANTE</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-bone">Privacy</Link>
          <Link href="/terms" className="hover:text-bone">Terms</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-bone">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
