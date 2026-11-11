import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { PlainHeader } from "@/components/page-hero";
import { getSession } from "@/lib/session";

export const metadata: Metadata = { title: "Log in", robots: { index: false } };

export default async function LoginPage() {
  if (await getSession()) redirect("/account");
  return (
    <section className="min-h-[80svh] bg-obsidian pb-24 pt-32">
      <div className="page-frame max-w-xl">
        <PlainHeader eyebrow="Account" title="Welcome back." />
        <div className="mt-12"><AuthForm mode="login" /></div>
      </div>
    </section>
  );
}
