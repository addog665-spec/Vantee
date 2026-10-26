import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "VANTE Chapter 01: a study in presence, photographed at the harbor.",
  alternates: { canonical: "/lookbook" },
};

const looks = [
  { src: "/images/official/campaign/campaign-harbor-01.jpg", wide: true },
  { src: "/images/official/campaign/campaign-harbor-03.jpg" },
  { src: "/images/official/editorial/editorial-red-01.jpg" },
  { src: "/images/official/campaign/campaign-harbor-04.jpg", wide: true },
  { src: "/images/official/editorial/editorial-architecture-01.jpg" },
  { src: "/images/official/editorial/editorial-staircase-02.jpg" },
  { src: "/images/official/campaign/campaign-story-01.jpg", wide: true },
];

export default function LookbookPage() {
  return (
    <>
      <PageHero eyebrow="Chapter 01 / 2026" title="A study in presence." image="/images/official/campaign/campaign-harbor-02.jpg" imageAlt="VANTE campaign at the harbor" />
      <section className="bg-obsidian py-4 sm:py-8">
        <div className="page-frame grid gap-4 sm:grid-cols-2">
          {looks.map((look, i) => (
            <figure key={look.src} className={look.wide ? "sm:col-span-2" : ""} data-reveal>
              <div className={`relative overflow-hidden ${look.wide ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[4/5]"}`}>
                <Image src={look.src} alt={`Chapter 01 look ${i + 1}`} fill sizes={look.wide ? "100vw" : "(min-width: 640px) 50vw, 100vw"} className="object-cover" />
              </div>
              <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-bone/45">Look {String(i + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
        <div className="page-frame py-16 text-center">
          <Link href="/collections/chapter-01" className="btn">Shop Chapter 01</Link>
        </div>
      </section>
    </>
  );
}
