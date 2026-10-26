# VANTE

The VANTE storefront: a Next.js site with an editorial homepage, collections, product pages, lookbook, journal, a saved bag and wishlist, and Stripe checkout.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Run `npm run lint` and `npm run build` before deploying.

## Where things live

- `src/lib/catalog.ts`: products, prices, sizes, collections and delivery copy. Edit this to add or change pieces.
- `src/lib/journal.ts`: journal stories.
- `src/app/`: one folder per page (`/collections`, `/products/[slug]`, `/journal/[slug]`, ...).
- `src/components/`: header, footer, product card, product page, bag, and other shared pieces.
- `public/images/official/`: campaign and product photography.

## Settings (Vercel → Project → Settings → Environment Variables)

| Name | What it does |
| --- | --- |
| `STRIPE_SECRET_KEY` | Turns on real card payments. Without it the bag explains that online payment is being set up. |
| `STANDARD_DELIVERY_USD` | Delivery charge for orders under $400 (default 25). Orders of $400 or more ship free. |
| `SHIP_TO_COUNTRIES` | Comma-separated two-letter country codes Stripe will ship to. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Address shown on the contact page; the contact form opens an email to it. |
| `NEXT_PUBLIC_SITE_URL` | Your public address (e.g. `https://vante.com`) once you add a custom domain. Used for SEO. |

Newsletter sign-ups are validated and written to the Vercel runtime logs (`newsletter-signup <email>`) until a mailing-list provider is connected.
