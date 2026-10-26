"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="max-w-md text-sm text-bone/75" role="status">Thank you. You will hear from the house when there is something worth saying.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex border-b border-white/35 focus-within:border-champagne">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent py-3 text-base outline-none placeholder:text-bone/40"
        />
        <button type="submit" disabled={status === "sending"} className="px-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-champagne disabled:opacity-50">
          {status === "sending" ? "Joining" : "Join"}
        </button>
      </div>
      {status === "error" && <p className="mt-3 text-sm text-red-300" role="alert">That did not go through. Please check the address and try again.</p>}
    </form>
  );
}
