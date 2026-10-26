import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "For orders, materials, appointments, and anything else that deserves a proper answer.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact the house"
        title="We are listening."
        intro="For orders, materials, appointments, and anything else that deserves a proper answer."
        image="/images/official/editorial/editorial-staircase-01.jpg"
        imageAlt="VANTE group campaign on the staircase"
      />
      <section className="bg-obsidian py-20">
        <div className="page-frame grid gap-14 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Studio hours</p>
              <p className="mt-3 text-sm leading-6 text-bone/70">Monday – Friday<br />09:00 – 18:00 GMT</p>
            </div>
            {contactEmail && (
              <div>
                <p className="eyebrow">Write to us</p>
                <a href={`mailto:${contactEmail}`} className="mt-3 inline-block text-sm text-bone/85 underline-offset-4 hover:underline">{contactEmail}</a>
              </div>
            )}
          </div>
          <ContactForm email={contactEmail} />
        </div>
      </section>
    </>
  );
}
