import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { PlainHeader } from "@/components/page-hero";
import { getSession } from "@/lib/session";

export const metadata: Metadata = { title: "Create an account", robots: { index: false } };

export default async function RegisterPage() {
  if (await getSession()) redirect("/account");
  return (
    <section className="min-h-[80svh] bg-obsidian pb-24 pt-32">
      <div className="page-frame max-w-xl">
        <PlainHeader eyebrow="Join VÄNTÉ" title="Wear your advantage." />
        <p className="mt-6 text-sm leading-6 text-bone/65">Create an account to be first to every drop.</p>
        <div className="mt-10"><AuthForm mode="register" /></div>
      </div>
    </section>
  );
}
