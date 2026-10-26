import type { Metadata } from "next";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Members",
  description: "Private releases, considered recommendations, and a more personal way to return to the house.",
  alternates: { canonical: "/members" },
};

const benefits = [
  { title: "Private access", text: "Early consideration for small-run releases." },
  { title: "The edit", text: "A future AI stylist designed around your actual wardrobe." },
  { title: "Care notes", text: "Materials, repair, and the long life of a piece." },
];

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Members"
        title="A closer relationship."
        intro="Private releases, considered recommendations, and a more personal way to return to the house."
        image="/images/official/campaign/campaign-harbor-03.jpg"
        imageAlt="VANTE campaign at the harbor"
      />
      <section className="bg-[#11110f] py-20">
        <div className="page-frame grid gap-px bg-white/12 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={b.title} className="bg-[#11110f] p-8 md:p-10" data-reveal>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="mt-7 font-serif text-3xl">{b.title}</h2>
              <p className="mt-4 text-sm leading-6 text-bone/60">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="page-frame mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Join the list</p>
            <h2 className="display mt-4 max-w-lg text-5xl">Membership begins with a note.</h2>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
