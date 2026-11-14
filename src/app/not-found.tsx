import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-obsidian pt-24">
      <div className="page-frame">
        <p className="eyebrow">404</p>
        <h1 className="display mt-5 text-[clamp(3.4rem,8vw,7rem)]">This page has moved on.</h1>
        <p className="mt-6 max-w-md text-sm leading-6 text-bone/65">The piece or page you were looking for is no longer here.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/collections" className="btn btn-solid">Explore collection</Link>
          <Link href="/" className="btn">Return home</Link>
        </div>
      </div>
    </section>
  );
}
