"use client";

/** Opens the visitor's email app with the message filled in, so no mail service is needed. */
export function ContactForm({ email }: { email: string }) {
  if (!email) {
    return (
      <div className="border border-white/15 p-8 text-sm leading-6 text-bone/65">
        Our contact address is being set up. In the meantime, reach the house through Instagram.
      </div>
    );
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="sr-only">Name</span>
        <input name="name" required autoComplete="name" placeholder="Name" className="field" />
      </label>
      <label className="block">
        <span className="sr-only">Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="Email address" className="field" />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" required rows={6} placeholder="How can we help?" className="field resize-y" />
      </label>
      <button type="submit" className="btn btn-solid mt-4">Send message</button>
      <p className="text-xs text-bone/45">This opens your email app with your message ready to send.</p>
    </form>
  );
}
