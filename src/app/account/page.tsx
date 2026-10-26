import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Account",
  robots: { index: false },
};

const areas = [
  { title: "Orders", text: "Order confirmations and receipts arrive by email from our payment provider.", href: "/support", cta: "Order help" },
  { title: "Wishlist", text: "Return to the things you have saved.", href: "/wishlist", cta: "View wishlist" },
  { title: "Bag", text: "The pieces you have selected, ready when you are.", href: "/bag", cta: "View bag" },
];

export default function AccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="A more personal house."
        intro="Your bag and wishlist are saved on this device. Customer accounts are coming soon."
        image="/images/official/products/duffel-01.jpg"
        imageAlt="VANTE campaign image of a black polo and leather duffel"
      />
      <section className="bg-obsidian py-20">
        <div className="page-frame grid gap-5 md:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} className="flex flex-col border border-white/15 p-7">
              <h2 className="font-serif text-3xl">{a.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-bone/60">{a.text}</p>
              <Link href={a.href} className="link-line mt-7 self-start">{a.cta}</Link>
            </div>
          ))}
        </div>
        <div className="page-frame mt-12">
          <Link href="/members" className="link-line">Explore the member experience</Link>
        </div>
      </section>
    </>
  );
}
