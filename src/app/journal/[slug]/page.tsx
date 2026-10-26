import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEntry, journalEntries } from "@/lib/journal";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const entry = getEntry((await params).slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: { canonical: `/journal/${entry.slug}` },
    openGraph: { type: "article", title: `${entry.title} | VANTE`, description: entry.excerpt, images: [entry.image], publishedTime: entry.isoDate },
  };
}

export default async function JournalEntryPage({ params }: PageProps<"/journal/[slug]">) {
  const entry = getEntry((await params).slug);
  if (!entry) notFound();
  const next = journalEntries[(journalEntries.indexOf(entry) + 1) % journalEntries.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.excerpt,
    image: `${siteUrl}${entry.image}`,
    datePublished: entry.isoDate,
    publisher: { "@type": "Organization", name: "VANTE" },
  };

  return (
    <article className="on-light bg-ivory pb-24 pt-28 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-frame">
        <Link href="/journal" className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-ink/60 hover:text-ink">← Journal</Link>
        <header className="mx-auto mt-12 max-w-4xl text-center">
          <p className="eyebrow">{entry.category} / <time dateTime={entry.isoDate}>{entry.date}</time></p>
          <h1 className="display mt-6 text-[clamp(3.2rem,8vw,8rem)]">{entry.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-ink/65">{entry.excerpt}</p>
        </header>
        <div className="relative mx-auto mt-14 aspect-[16/10] max-w-6xl overflow-hidden">
          <Image src={entry.image} alt={entry.imageAlt} fill priority sizes="(min-width: 1200px) 1150px, 100vw" className="object-cover" />
        </div>
        <div className="mx-auto mt-14 max-w-2xl space-y-7 font-serif text-[1.3rem] leading-[1.7] text-ink/85">
          {entry.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
        <div className="mx-auto mt-20 max-w-2xl border-t border-ink/15 pt-8">
          <p className="eyebrow">Next story</p>
          <Link href={`/journal/${next.slug}`} className="mt-3 block font-serif text-4xl hover:text-bronze">{next.title}</Link>
        </div>
      </div>
    </article>
  );
}
