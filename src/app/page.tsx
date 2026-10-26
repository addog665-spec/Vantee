import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/catalog";
import { journalEntries } from "@/lib/journal";

const archive = [
  { src: "/images/official/campaign/campaign-harbor-04.jpg", alt: "VANTE group campaign at the harbor", className: "col-span-2 row-span-2 md:col-span-4" },
  { src: "/images/official/editorial/editorial-staircase-02.jpg", alt: "VANTE campaign on the staircase", className: "col-span-2 row-span-2" },
  { src: "/images/official/editorial/editorial-architecture-01.jpg", alt: "VANTE portrait in architecture", className: "col-span-1 row-span-2 md:col-span-2" },
  { quote: "Form is never separate from feeling.", className: "col-span-1 row-span-2 md:col-span-4" },
  { src: "/images/official/editorial/editorial-red-01.jpg", alt: "VANTE red mailbox campaign portrait", className: "col-span-1 row-span-2 md:col-span-2" },
  { src: "/images/official/campaign/campaign-story-01.jpg", alt: "VANTE campaign at the breakwater", className: "col-span-1 row-span-2 md:col-span-4" },
  { src: "/images/official/editorial/editorial-staircase-01.jpg", alt: "VANTE group campaign on the staircase", className: "col-span-2 row-span-2 md:col-span-3" },
  { src: "/images/official/editorial/editorial-red-02.jpg", alt: "VANTE burgundy jersey portrait", className: "col-span-1 row-span-2 md:col-span-1" },
  { quote: "Made to be noticed slowly.", className: "col-span-1 row-span-2 md:col-span-2" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-[#090909]">
        <Image
          src="/images/official/hero/hero-main.jpg"
          alt="VANTE launch campaign at the red mailboxes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        <div className="page-frame relative w-full pb-16 pt-32 sm:pb-24">
          <p className="eyebrow">Chapter 01 / 2026</p>
          <h1 className="display mt-5 max-w-[12ch] text-[clamp(3.6rem,10vw,10rem)] text-bone">Designed for quiet confidence.</h1>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/collections" className="btn btn-solid">
              Shop the collection <ArrowIcon />
            </Link>
            <Link href="/story" className="link-line">Discover the story</Link>
          </div>
        </div>
      </section>

      {/* Point of view */}
      <section className="on-light bg-bone text-ink">
        <div className="page-frame page-section grid gap-10 md:grid-cols-[1fr_minmax(0,22rem)] md:items-end">
          <div data-reveal>
            <p className="eyebrow">The VANTE point of view</p>
            <p className="display mt-8 max-w-[18ch] text-[clamp(2.6rem,6vw,5.75rem)] leading-[1.02]">
              Luxury is not loud. It is remembered. Every thread has purpose. Every silhouette begins with intention.
            </p>
          </div>
          <p data-reveal className="text-[0.95rem] leading-7 text-ink/70">
            VANTE makes fewer, better things. Our work begins with the discipline of editing, and ends in pieces that become more personal as they are worn.
          </p>
        </div>
      </section>

      {/* Cinematic campaign */}
      <section className="grain relative overflow-hidden bg-[#10100f]">
        <Image src="/images/official/backgrounds/campaign-boat-02.jpg" alt="" fill sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="page-frame page-section relative grid min-h-[90svh] items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div data-reveal>
            <p className="eyebrow">A study in presence / 01</p>
            <h2 className="display mt-6 max-w-[11ch] text-[clamp(3.2rem,8vw,8rem)] text-bone">A silhouette can hold a room.</h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-bone/70">
              Every line is considered for the pause before movement. Quiet clothes. Lasting impression.
            </p>
            <Link href="/lookbook" className="link-line mt-8 inline-block">View the lookbook</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center" data-reveal>
            <div className="relative aspect-[3/4] translate-y-8 overflow-hidden">
              <Image src="/images/official/hero/hero-editorial.jpg" alt="VANTE launch campaign portrait" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/official/hero/hero-secondary.jpg" alt="VANTE launch campaign portrait at the red mailboxes" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-obsidian py-[clamp(4.5rem,9vw,8rem)]">
        <div className="page-frame">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The current chapter</p>
              <h2 className="display mt-5 text-[clamp(3rem,7vw,7rem)]">Form, refined.</h2>
            </div>
            <Link href="/collections" className="btn">View all pieces <ArrowIcon /></Link>
          </div>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1rem,4vw,4.5rem)] sm:grid sm:grid-cols-2 sm:overflow-visible lg:mx-auto lg:max-w-[1520px] lg:grid-cols-4 lg:gap-5">
          {products.map((p) => (
            <div key={p.slug} className="w-[78vw] shrink-0 snap-start sm:w-auto">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="grid bg-[#161614] md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[90svh]">
          <Image src="/images/official/products/duffel-04.jpg" alt="VANTE leather duffel in the launch campaign" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center px-[clamp(1.25rem,6vw,7rem)] py-20" data-reveal>
          <div>
            <p className="eyebrow">Made to keep</p>
            <h2 className="display mt-6 max-w-md text-[clamp(2.8rem,6vw,6rem)]">Material carries memory.</h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-bone/65">
              We start with materials that reward proximity: traceable wool, considered cotton, and textures designed to age with grace.
            </p>
            <Link href="/materials" className="link-line mt-9 inline-block">Our materials</Link>
          </div>
        </div>
      </section>

      {/* Visual archive */}
      <section className="on-light bg-ivory text-ink">
        <div className="page-frame page-section">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-10" data-reveal>
            <div>
              <p className="eyebrow">The visual archive</p>
              <h2 className="display mt-5 max-w-3xl text-[clamp(3rem,7vw,7rem)]">A language of texture and light.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-ink/65">Built around weight, space, and the material detail that changes with proximity.</p>
          </div>
          <div className="mt-10 grid auto-rows-[clamp(7rem,16vw,15rem)] grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {archive.map((cell, i) =>
              "quote" in cell ? (
                <div key={i} data-reveal className={`flex items-end border border-ink/15 p-5 sm:p-8 ${cell.className}`}>
                  <p className="font-serif text-[clamp(1.25rem,2.6vw,2.6rem)] leading-tight">{cell.quote}</p>
                </div>
              ) : (
                <div key={i} data-reveal className={`relative overflow-hidden bg-ink/10 ${cell.className}`}>
                  <Image src={cell.src!} alt={cell.alt!} fill sizes="(min-width: 768px) 40vw, 50vw" className="object-cover" />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="on-light border-t border-ink/10 bg-ivory text-ink">
        <div className="page-frame page-section">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Journal</p>
              <h2 className="display mt-5 text-[clamp(2.8rem,6vw,6rem)]">Notes from the house.</h2>
            </div>
            <Link href="/journal" className="link-line">Read all stories</Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {journalEntries.map((entry) => (
              <Link key={entry.slug} href={`/journal/${entry.slug}`} className="group" data-reveal>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={entry.image} alt={entry.imageAlt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
                </div>
                <p className="eyebrow mt-5">{entry.category}</p>
                <h3 className="mt-2 font-serif text-3xl transition-colors group-hover:text-bronze">{entry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{entry.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-obsidian py-20">
        <div className="page-frame flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Private notes</p>
            <h2 className="display mt-4 max-w-xl text-[clamp(2.6rem,5.5vw,5.5rem)]">A quieter way to keep in touch.</h2>
            <p className="mt-4 max-w-sm text-sm text-bone/60">New chapters, private releases, and early access. Rarely, and only when it matters.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
