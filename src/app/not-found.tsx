import Link from "next/link";
import { mirrorSiteUrl, primarySiteUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <p className="text-5xl">🌙</p>
      <h1 className="mt-4 text-2xl font-bold text-sky-900">Page not found</h1>
      <p className="mt-2 text-sm text-slate-500">This product or page does not exist</p>
      <div className="mt-8 flex flex-col gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/products" className="btn-outline">
          Browse shop
        </Link>
      </div>
      <p className="mt-8 text-xs leading-relaxed text-slate-400">
        Use the full site URL:
        <br />
        <a href={mirrorSiteUrl} className="text-sky-600 hover:underline">
          {mirrorSiteUrl}
        </a>
      </p>
    </div>
  );
}
