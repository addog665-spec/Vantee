import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Materials & Craft",
  description: "We choose fewer materials, then learn them deeply: soft jersey, washed denim, and the time to make them well.",
  alternates: { canonical: "/materials" },
};

const materials = [
  { title: "Jersey", text: "A smooth, easy knit cut for movement, finished with a contrast collar and fine piping.", image: "/images/official/editorial/editorial-red-02.jpg", alt: "The burgundy Crest Jersey up close" },
  { title: "Denim", text: "Washed for a soft hand and a lived-in tone, then marked with our own red motif.", image: "/images/official/editorial/editorial-architecture-02.jpg", alt: "The Motif Denim Short and its red motif" },
  { title: "Time", text: "Small-run production makes room for careful hands and less unnecessary waste.", image: "/images/official/campaign/campaign-story-01.jpg", alt: "VANTE campaign at the breakwater" },
];

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials & craft"
        title="The detail is the design."
        intro="We choose fewer materials, then learn them deeply."
        image="/images/official/products/duffel-01.jpg"
        imageAlt="The black Once Upon a Time Jersey with the Weekend Duffel"
      />
      <section className="on-light bg-ivory py-20 text-ink sm:py-28">
        <div className="page-frame space-y-20 sm:space-y-28">
          {materials.map((m, i) => (
            <div key={m.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-16" data-reveal>
              <div className={`relative aspect-[4/5] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={m.image} alt={m.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h2 className="display mt-4 text-6xl">{m.title}</h2>
                <p className="mt-6 max-w-md text-base leading-7 text-ink/70">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
