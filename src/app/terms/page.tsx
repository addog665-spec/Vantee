import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of the house."
      sections={[
        { heading: "Using this site", text: "Please use this site lawfully and with respect for its content. Product availability, prices, and descriptions may change as each chapter evolves." },
        { heading: "Orders", text: "A confirmed order is subject to availability and our acceptance. Payment, delivery, and refund terms are presented during checkout." },
        { heading: "Intellectual property", text: "The VANTE name, visual identity, photography, copy, and product designs remain protected. They may not be used without prior written permission." },
      ]}
    />
  );
}
