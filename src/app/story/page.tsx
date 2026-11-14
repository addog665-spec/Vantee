import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, EmblemIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Story",
  description: "VÄNTÉ is more than fashion. It is the art of turning adversity into advantage.",
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Adversity into advantage."
        intro="VÄNTÉ is more than fashion. It is the art of turning adversity into advantage."
        image="/images/official/campaign/campaign-harbor-04.jpg"
        imageAlt="VÄNTÉ group campaign at the harbor"
      />

      <section className="bg-obsidian">
        <div className="page-frame page-section grid gap-10 md:grid-cols-[14rem_1fr]">
          <p className="eyebrow">The name</p>
          <div data-reveal>
            <p className="display max-w-4xl text-[clamp(2.4rem,5vw,4.75rem)] leading-[1.05]">
              The name VÄNTÉ represents advantage.
            </p>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-bone/70">
              <p>
                It stands for the belief that life’s greatest setbacks can become the foundation for something extraordinary. The brand was born from a deeply personal journey.
              </p>
              <p>
                Losing my father at a young age could have defined my story, but instead, it revealed the strength of family, the power of resilience, and the courage to keep moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="on-light grid bg-ivory text-ink md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[85svh]">
          <Image src="/images/official/editorial/editorial-staircase-01.jpg" alt="VÄNTÉ campaign on a staircase" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center px-[clamp(1.25rem,6vw,7rem)] py-20" data-reveal>
          <div>
            <p className="eyebrow">Who we are for</p>
            <h2 className="display mt-6 text-[clamp(2.6rem,5vw,5rem)] leading-[1.05]">
              For those who refuse to be defined by where they started.
            </h2>
            <div className="mt-7 max-w-md space-y-5 text-base leading-7 text-ink/70">
              <p>Every collection is a reminder that challenges are not the end of the story — they are often the beginning.</p>
              <p>
                We create timeless pieces where luxury meets streetwear, combining refined craftsmanship with effortless expression. Every fabric, stitch, and silhouette is designed with intention, allowing each garment to carry meaning beyond its appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-[#10100f]">
        <Image src="/images/official/backgrounds/campaign-boat-02.jpg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="page-frame page-section relative" data-reveal>
          <p className="display max-w-[16ch] text-[clamp(2.8rem,7vw,7rem)] leading-[1.02] text-bone">
            VÄNTÉ isn’t just something you wear.
          </p>
          <p className="display mt-4 text-[clamp(2.8rem,7vw,7rem)] leading-[1.02] text-champagne">It’s a mindset.</p>
          <p className="mt-10 max-w-lg text-lg leading-8 text-bone/75">
            A reminder that your greatest advantage isn’t the life you were given — it’s what you choose to build from it.
          </p>
        </div>
      </section>

      <section className="bg-obsidian">
        <div className="page-frame page-section grid gap-10 md:grid-cols-[14rem_1fr]">
          <p className="eyebrow">The founder</p>
          <div data-reveal>
            <p className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight">Kelvin Yeboah</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-bone/50">Founder, CEO &amp; Creative Director</p>
            <p className="mt-8 max-w-xl text-base leading-7 text-bone/70">
              Founded by Kelvin Yeboah, who serves as Founder, CEO, and Creative Director, VÄNTÉ is built on a vision to inspire a generation to wear their story with confidence and transform adversity into purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="on-light bg-bone text-ink">
        <div className="page-frame page-section flex flex-col items-center text-center" data-reveal>
          <EmblemIcon className="h-16 w-auto" />
          <h2 className="display mt-8 text-[clamp(3.2rem,9vw,8.5rem)] leading-none">Wear Your Advantage.</h2>
          <Link href="/collections" className="btn btn-solid mt-12">
            Shop the collection <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
