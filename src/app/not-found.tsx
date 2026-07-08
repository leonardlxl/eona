import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="section-label">404</p>
      <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-white/50">
        This page doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link href="/work" className="btn-outline">
          View work
        </Link>
      </div>
    </div>
  );
}
