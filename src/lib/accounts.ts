import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { get, put } from "@vercel/blob";

/**
 * Customer accounts, stored as one private JSON file per person in a private Vercel Blob store.
 * Everything that touches storage lives here, so moving accounts to a database later only changes this file.
 */

const scrypt = promisify(scryptCallback) as (password: string, salt: Buffer, keylen: number) => Promise<Buffer>;

export type Account = { email: string; name: string; createdAt: string };
type StoredAccount = Account & { passwordHash: string; salt: string };

export const accountsEnabled = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

// File names are a hash of the email, so the store never lists anyone's address in a path.
const pathFor = (email: string) => `accounts/${createHash("sha256").update(normalizeEmail(email)).digest("hex")}.json`;

async function hashPassword(password: string, salt: Buffer) {
  return (await scrypt(password, salt, 64)).toString("base64");
}

async function readAccount(email: string): Promise<StoredAccount | null> {
  const result = await get(pathFor(email), { access: "private", useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) return null;
  return JSON.parse(await new Response(result.stream).text()) as StoredAccount;
}

export async function createAccount(name: string, email: string, password: string): Promise<Account | "exists"> {
  if (await readAccount(email)) return "exists";
  const salt = randomBytes(16);
  const account: StoredAccount = {
    email: normalizeEmail(email),
    name: name.trim(),
    createdAt: new Date().toISOString(),
    salt: salt.toString("base64"),
    passwordHash: await hashPassword(password, salt),
  };
  try {
    // allowOverwrite: false makes a second sign-up for the same email fail instead of replacing the first.
    await put(pathFor(email), JSON.stringify(account), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: false,
    });
  } catch (error) {
    if (await readAccount(email)) return "exists";
    throw error;
  }
  return { email: account.email, name: account.name, createdAt: account.createdAt };
}

export async function verifyAccount(email: string, password: string): Promise<Account | null> {
  const account = await readAccount(email);
  // Hash even when there is no account, so a wrong email takes as long as a wrong password.
  const salt = account ? Buffer.from(account.salt, "base64") : randomBytes(16);
  const attempt = Buffer.from(await hashPassword(password, salt), "base64");
  if (!account) return null;
  const stored = Buffer.from(account.passwordHash, "base64");
  if (stored.length !== attempt.length || !timingSafeEqual(stored, attempt)) return null;
  return { email: account.email, name: account.name, createdAt: account.createdAt };
}
