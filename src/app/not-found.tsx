import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <p className="text-5xl">🌙</p>
      <h1 className="mt-4 text-2xl font-bold text-sky-900">Page not found</h1>
      <p className="mt-2 text-sm text-slate-500">This product or page does not exist</p>
      <Link href="/products" className="btn-primary mt-8">
        Back to shop
      </Link>
    </div>
  );
}
