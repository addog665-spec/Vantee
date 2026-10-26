import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy, plainly."
      sections={[
        { heading: "Information we use", text: "We use the information you provide to complete an order, respond to a message, and share requested communications. We collect only what is relevant to those purposes." },
        { heading: "How it is protected", text: "We use reasonable safeguards and work with carefully selected service providers. Payment details are handled only by our payment provider, Stripe, and never reach our servers." },
        { heading: "On your device", text: "Your bag and wishlist are stored in your own browser so they are there when you return. Clearing your browser data removes them." },
        { heading: "Your choices", text: "You may request access, correction, deletion, or an end to marketing communications by contacting the house. We will respond without unnecessary delay." },
      ]}
    />
  );
}
