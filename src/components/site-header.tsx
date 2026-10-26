"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { useStore } from "@/lib/store";

const primary = [
  { href: "/collections", label: "Collections" },
  { href: "/journal", label: "Journal" },
  { href: "/story", label: "About" },
];

const drawer = [
  { href: "/collections", label: "Collections" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/journal", label: "Journal" },
  { href: "/story", label: "The House" },
  { href: "/materials", label: "Materials" },
  { href: "/members", label: "Members" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const pathname = usePathname();
  const { bag, wishlist } = useStore();
  const count = bag.reduce((n, l) => n + l.qty, 0);

  // Close the drawer whenever the route changes (adjusting state during render, not in an effect).
  if (open && openedAt !== pathname) setOpen(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a href="#main" className="sr-only z-[60] bg-bone px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto grid h-14 max-w-[1100px] grid-cols-[1fr_auto_1fr] items-center border border-white/12 bg-[#0d0d0c]/80 px-2 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4">
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Open navigation"
              aria-expanded={open}
              onClick={() => {
                setOpenedAt(pathname);
                setOpen(true);
              }}
              className="flex h-11 w-11 items-center justify-center md:hidden"
            >
              <MenuIcon />
            </button>
            <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
              {primary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`px-3 py-2 text-[0.64rem] font-bold uppercase tracking-[0.14em] transition-colors hover:text-champagne ${isActive(item.href) ? "text-champagne" : "text-bone/85"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/" aria-label="VANTE home" className="font-serif text-xl tracking-[0.22em] text-bone">
            VANTE
          </Link>
          <div className="flex items-center justify-end">
            <Link href="/search" aria-label="Search" className="flex h-11 w-11 items-center justify-center text-bone/85 hover:text-champagne">
              <SearchIcon />
            </Link>
            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${wishlist.length} saved`}
              className="hidden h-11 w-11 items-center justify-center text-bone/85 hover:text-champagne sm:flex"
            >
              <HeartIcon />
            </Link>
            <Link href="/bag" aria-label={`Bag, ${count} ${count === 1 ? "item" : "items"}`} className="relative flex h-11 w-11 items-center justify-center text-bone/85 hover:text-champagne">
              <BagIcon />
              {count > 0 && (
                <span className="absolute right-1 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 text-[0.6rem] font-bold text-ink">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <button type="button" aria-label="Close navigation" tabIndex={-1} onClick={() => setOpen(false)} className="absolute inset-0 bg-black/60" />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute inset-y-0 left-0 flex w-[min(88vw,420px)] flex-col bg-obsidian px-6 pb-8 pt-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl tracking-[0.22em]">VANTE</span>
            <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center">
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="mt-10 flex flex-col">
            {drawer.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-white/10 py-4 font-serif text-3xl text-bone hover:text-champagne">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex gap-6 pt-8 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-bone/70">
            <Link href="/wishlist">Wishlist ({wishlist.length})</Link>
            <Link href="/account">Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}
