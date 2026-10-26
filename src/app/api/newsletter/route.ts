const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email = "";
  try {
    email = String(((await request.json()) as { email?: unknown }).email ?? "").trim().toLowerCase();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!EMAIL.test(email) || email.length > 254) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Sign-ups appear in the Vercel runtime logs until a mailing-list provider is connected.
  console.log(`newsletter-signup ${email}`);
  return Response.json({ ok: true });
}
