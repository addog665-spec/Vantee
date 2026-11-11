import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { Account } from "@/lib/accounts";

/** Signed-in state lives in a signed, HTTP-only cookie; nothing about the session is stored server-side. */

const COOKIE = "vante_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

type Session = { email: string; name: string; exp: number };

// AUTH_SECRET wins when set; otherwise the key is derived from the Blob store's server-only token,
// so accounts work as soon as the store is connected without another secret to manage.
function secret() {
  if (process.env.AUTH_SECRET) return process.env.AUTH_SECRET;
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) throw new Error("Set AUTH_SECRET or connect a Blob store to sign sessions.");
  return createHmac("sha256", token).update("vante-session-v1").digest("hex");
}
const canSign = () => Boolean(process.env.AUTH_SECRET || process.env.BLOB_READ_WRITE_TOKEN);

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

export async function startSession(account: Account) {
  const session: Session = { email: account.email, name: account.name, exp: Math.floor(Date.now() / 1000) + MAX_AGE };
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

export async function getSession(): Promise<Session | null> {
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value || !canSign()) return null;
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;
  const expected = Buffer.from(sign(payload));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString()) as Session;
    return session.exp > Date.now() / 1000 ? session : null;
  } catch {
    return null;
  }
}
