import Link from "next/link";
import { mirrorSiteUrl, primarySiteUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sky-100 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-3 text-center text-xs text-slate-500 sm:px-6">
        Slow or blocked? Try the{" "}
        <a href={mirrorSiteUrl} className="text-sky-600 hover:underline">
          China-friendly mirror
        </a>{" "}
        or{" "}
        <a href={primarySiteUrl} className="text-sky-600 hover:underline">
          global site
        </a>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-lg font-bold text-sky-800">Teyvat Closet</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Genshin-inspired anime fashion for travelers worldwide. Cute, fresh,
            and easy to wear.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            🌍 Ships internationally · Prices in USD
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">Quick Links</p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-sky-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-sky-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-sky-600">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">Contact</p>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>📧 hello@teyvat-closet.com</li>
            <li>
              <span className="mr-3 hover:text-sky-600">Instagram</span>
              <span className="mr-3 hover:text-sky-600">TikTok</span>
              <span className="hover:text-sky-600">Discord</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-100 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Teyvat Closet · Fan-made showcase (not
        affiliated with miHoYo / HoYoverse)
      </div>
    </footer>
  );
}
