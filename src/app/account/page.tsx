import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PlainHeader } from "@/components/page-hero";
import { getSession } from "@/lib/session";
import { logOut } from "./actions";

export const metadata: Metadata = { title: "Your account", robots: { index: false } };

export default async function AccountPage() {
  const session = await getSession();
  if (!session) redirect("/account/login");
  const firstName = session.name.split(" ")[0];

  return (
    <section className="min-h-[80svh] bg-obsidian pb-24 pt-32">
      <div className="page-frame">
        <PlainHeader eyebrow="Your account" title={`Welcome, ${firstName}.`} />
        <div className="mt-14 grid max-w-4xl gap-px border border-white/12 bg-white/12 sm:grid-cols-3">
          <div className="bg-obsidian p-6">
            <p className="eyebrow">Signed in as</p>
            <p className="mt-3 text-sm text-bone">{session.name}</p>
            <p className="mt-1 break-all text-sm text-bone/60">{session.email}</p>
          </div>
          <Link href="/bag" className="bg-obsidian p-6 hover:bg-white/[0.03]">
            <p className="eyebrow">Your bag</p>
            <p className="mt-3 text-sm text-bone/70">Review your pieces and check out.</p>
          </Link>
          <Link href="/wishlist" className="bg-obsidian p-6 hover:bg-white/[0.03]">
            <p className="eyebrow">Wishlist</p>
            <p className="mt-3 text-sm text-bone/70">The pieces you saved for later.</p>
          </Link>
        </div>
        <form action={logOut} className="mt-10">
          <button type="submit" className="btn">Log out</button>
        </form>
      </div>
    </section>
  );
}
