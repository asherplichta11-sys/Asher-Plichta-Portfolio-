import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl">
      <h1 className="display text-[clamp(2.75rem,7vw,5.5rem)] text-ink">Lost signal.</h1>
      <p className="mt-6 text-lg text-muted">This page doesn’t exist.</p>
      <p className="mt-8">
        <Link href="/" className="font-bold text-accent underline underline-offset-4 hover:text-accent-strong">
          Back to home
        </Link>
      </p>
    </div>
  );
}
