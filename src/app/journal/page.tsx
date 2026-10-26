import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { journalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Observations from inside the VANTE house and beyond it.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="VANTE Journal"
        title="The thoughtful part."
        intro="Observations from inside the house and beyond it."
        image="/images/official/editorial/editorial-architecture-02.jpg"
        imageAlt="VANTE portrait in architecture"
      />
      <section className="on-light bg-ivory py-20 text-ink">
        <div className="page-frame grid gap-14 md:grid-cols-3 md:gap-6">
          {journalEntries.map((entry) => (
            <Link key={entry.slug} href={`/journal/${entry.slug}`} className="group" data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={entry.image} alt={entry.imageAlt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
              </div>
              <p className="eyebrow mt-5">{entry.category} / {entry.date}</p>
              <h2 className="mt-3 font-serif text-4xl transition-colors group-hover:text-bronze">{entry.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{entry.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
