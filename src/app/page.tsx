import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { LoopVideo } from "@/components/loop-video";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProductCard } from "@/components/product-card";
import { collections, getCollection, products } from "@/lib/catalog";

const drops = collections.filter((c) => c.drop);
const chapterPieces = products.filter((p) => !getCollection(p.collection)?.drop);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-[#090909]">
        <Image
          src="/images/official/hero/hero-main.jpg"
          alt="VÄNTÉ launch campaign at the red mailboxes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        <div className="page-frame relative w-full pb-16 pt-32 sm:pb-24">
          <p className="eyebrow">Chapter 01 / 2026</p>
          <h1 className="display mt-5 max-w-[12ch] text-[clamp(3.6rem,10vw,10rem)] text-bone">Wear Your Advantage.</h1>
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
            <p className="eyebrow">More than fashion</p>
            <p className="display mt-8 max-w-[18ch] text-[clamp(2.6rem,6vw,5.75rem)] leading-[1.02]">
              The art of turning adversity into advantage.
            </p>
          </div>
          <div data-reveal>
            <p className="text-[0.95rem] leading-7 text-ink/70">
              VÄNTÉ exists for those who refuse to be defined by where they started. Every collection is a reminder that challenges are not the end of the story — they are often the beginning.
            </p>
            <Link href="/story" className="link-line mt-6 inline-block">Read our story</Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-obsidian py-[clamp(4.5rem,9vw,8rem)]">
        <div className="page-frame">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The current chapter</p>
              <h2 className="display mt-5 text-[clamp(3rem,7vw,7rem)]">Where the story begins.</h2>
            </div>
            <Link href="/collections" className="btn">View all pieces <ArrowIcon /></Link>
          </div>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1rem,4vw,4.5rem)] sm:grid sm:grid-cols-2 sm:overflow-visible lg:mx-auto lg:max-w-[1520px] lg:grid-cols-4 lg:gap-5">
          {chapterPieces.map((p) => (
            <div key={p.slug} className="w-[78vw] shrink-0 snap-start sm:w-auto">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Drops */}
      <section className="border-t border-white/10 bg-obsidian pb-[clamp(4.5rem,9vw,8rem)] pt-[clamp(4rem,8vw,7rem)]">
        <div className="page-frame">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="eyebrow">Latest drops</p>
              <h2 className="display mt-5 text-[clamp(3rem,7vw,7rem)]">Each one, its own story.</h2>
            </div>
            <Link href="/collections" className="btn">Shop all drops <ArrowIcon /></Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {drops.map((d) => (
              <Link key={d.slug} href={`/collections/${d.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-graphite" data-reveal>
                {d.video ? (
                  <LoopVideo src={d.video.src} poster={d.video.poster} label={d.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <Image src={d.image} alt={d.imageAlt} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow">New drop</p>
                  <h3 className="mt-3 font-serif text-4xl text-bone">{d.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-bone/75">{d.tagline}</p>
                  <span className="link-line mt-5 inline-block">Shop the drop</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-obsidian py-20">
        <div className="page-frame flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The list</p>
            <h2 className="display mt-4 max-w-xl text-[clamp(2.6rem,5.5vw,5.5rem)]">First to the next drop.</h2>
            <p className="mt-4 max-w-sm text-sm text-bone/60">Early access to every drop, before anyone else. Only when it matters.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
