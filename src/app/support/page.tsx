import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Support",
  description: "Delivery, returns, care, and repairs for VANTE pieces.",
  alternates: { canonical: "/support" },
};

const faqs = [
  { q: "When will my order arrive?", a: "Orders leave our studio within one business day. You will receive tracking by email when your order is collected." },
  { q: "Is delivery free?", a: "Delivery is complimentary on orders over $400. Below that, the delivery cost is shown at checkout before you pay." },
  { q: "Can I return a piece?", a: "Yes. Unworn items in original condition can be returned within 14 days of delivery." },
  { q: "How should I care for my piece?", a: "Specific care is listed on each product page. When in doubt, keep washing infrequent and storage thoughtful." },
  { q: "Do you offer repairs?", a: "We are developing a repair pathway for VANTE pieces. Contact the house with your item details and we will advise." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function SupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="Support"
        title="Care, without friction."
        intro="A concise answer is usually the best kind. For anything else, the house is close."
        image="/images/official/backgrounds/campaign-boat-01.jpg"
        imageAlt="VANTE campaign at the harbor"
      />
      <section className="bg-obsidian py-20">
        <div className="page-frame grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="divide-y divide-white/12 border-y border-white/12">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-2xl">
                  {f.q} <span className="summary-icon shrink-0 font-sans text-xl text-champagne transition-transform">+</span>
                </summary>
                <p className="max-w-2xl pb-7 text-sm leading-7 text-bone/65">{f.a}</p>
              </details>
            ))}
          </div>
          <aside className="h-fit border border-white/15 p-7">
            <p className="eyebrow">Need a hand?</p>
            <h2 className="mt-4 font-serif text-3xl">Talk to the house.</h2>
            <p className="mt-4 text-sm leading-6 text-bone/60">For order-specific support or material guidance, write directly to our team.</p>
            <Link href="/contact" className="btn mt-7">Contact us</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
