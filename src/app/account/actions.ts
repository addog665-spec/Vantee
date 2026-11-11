"use server";

import { redirect } from "next/navigation";
import { accountsEnabled, createAccount, verifyAccount } from "@/lib/accounts";
import { endSession, startSession } from "@/lib/session";

export type AuthState = { error?: string; email?: string; name?: string } | undefined;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UNAVAILABLE = "Accounts are being set up. Please try again shortly.";

export async function register(_: AuthState, form: FormData): Promise<AuthState> {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");
  const kept = { name, email };

  if (!name || name.length > 80) return { ...kept, error: "Please enter your name." };
  if (!EMAIL.test(email) || email.length > 254) return { ...kept, error: "Please enter a valid email address." };
  if (password.length < 8 || password.length > 200) return { ...kept, error: "Your password needs at least 8 characters." };
  if (!accountsEnabled()) return { ...kept, error: UNAVAILABLE };

  const account = await createAccount(name, email, password);
  if (account === "exists") return { ...kept, error: "There is already an account with this email. Log in instead." };
  await startSession(account);
  redirect("/account");
}

export async function logIn(_: AuthState, form: FormData): Promise<AuthState> {
  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");
  if (!email || !password) return { email, error: "Please enter your email and password." };
  if (!accountsEnabled()) return { email, error: UNAVAILABLE };

  const account = await verifyAccount(email, password);
  if (!account) return { email, error: "That email and password don’t match an account." };
  await startSession(account);
  redirect("/account");
}

export async function logOut() {
  await endSession();
  redirect("/");
}
