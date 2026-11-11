"use client";

import Link from "next/link";
import { useActionState } from "react";
import { logIn, register, type AuthState } from "@/app/account/actions";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [state, action, pending] = useActionState<AuthState, FormData>(mode === "login" ? logIn : register, undefined);

  return (
    <form action={action} className="space-y-4">
      {mode === "register" && (
        <label className="block">
          <span className="sr-only">Name</span>
          <input name="name" required autoComplete="name" placeholder="Name" defaultValue={state?.name} className="field" />
        </label>
      )}
      <label className="block">
        <span className="sr-only">Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="Email address" defaultValue={state?.email} className="field" />
      </label>
      <label className="block">
        <span className="sr-only">Password</span>
        <input
          name="password"
          type="password"
          required
          minLength={mode === "register" ? 8 : undefined}
          autoComplete={mode === "register" ? "new-password" : "current-password"}
          placeholder={mode === "register" ? "Password (at least 8 characters)" : "Password"}
          className="field"
        />
      </label>
      {state?.error && <p role="alert" className="text-sm text-champagne">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn btn-solid mt-4 w-full disabled:opacity-60">
        {pending ? "One moment…" : mode === "register" ? "Create account" : "Log in"}
      </button>
      <p className="pt-2 text-sm text-bone/60">
        {mode === "register" ? (
          <>Already have an account? <Link href="/account/login" className="link-line">Log in</Link></>
        ) : (
          <>New to VÄNTÉ? <Link href="/account/register" className="link-line">Create an account</Link></>
        )}
      </p>
    </form>
  );
}
