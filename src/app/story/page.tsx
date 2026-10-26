import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "The House",
  description: "VANTE is built around the quiet advantage of feeling fully yourself.",
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="The House"
        title="Make room for what matters."
        intro="VANTE is built around the quiet advantage of feeling fully yourself."
        image="/images/official/campaign/campaign-harbor-04.jpg"
        imageAlt="VANTE group campaign at the harbor"
      />
      <section className="bg-obsidian">
        <div className="page-frame page-section grid gap-10 md:grid-cols-[14rem_1fr]">
          <p className="eyebrow">Our philosophy</p>
          <div data-reveal>
            <p className="display max-w-4xl text-[clamp(2.4rem,5vw,4.75rem)] leading-[1.05]">
              We make objects for a life that does not need to announce itself.
            </p>
            <p className="mt-8 max-w-xl text-base leading-7 text-bone/65">
              Every VANTE piece begins with a useful tension: precise but relaxed, modern but lasting, recognizable but never loud. We work with specialist makers who share a belief in long gestures over quick effects.
            </p>
          </div>
        </div>
      </section>
      <section className="on-light grid bg-ivory text-ink md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[85svh]">
          <Image src="/images/official/editorial/editorial-staircase-01.jpg" alt="VANTE launch campaign on a staircase" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center px-[clamp(1.25rem,6vw,7rem)] py-20" data-reveal>
          <div>
            <p className="eyebrow">The measure</p>
            <h2 className="display mt-6 text-[clamp(2.8rem,6vw,6.2rem)]">Less, with more conviction.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-ink/70">
              We release in small, considered chapters. Each one is intended to be lived with, not merely looked at.
            </p>
            <Link href="/collections" className="btn mt-9">Explore Chapter 01</Link>
          </div>
        </div>
      </section>
    </>
  );
}
