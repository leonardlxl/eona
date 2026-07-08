"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { cnSiteUrl } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { itemCount, hydrated } = useCart();
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `rounded-full px-4 py-2 text-sm font-medium transition ${
      active
        ? "bg-sky-100 text-sky-800"
        : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-cyan-400 text-lg shadow-sm">
            ✦
          </span>
          <div>
            <p className="text-base font-bold tracking-wide text-sky-800">
              Eona
            </p>
            <p className="text-[10px] text-sky-500">Genshin-Inspired Fashion</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <span className="mx-2 text-slate-300">|</span>
          <Link
            href="/products"
            className="rounded-full px-3 py-2 text-xs text-slate-400 transition hover:text-sky-600"
          >
            Shop
          </Link>
          <a
            href={cnSiteUrl}
            className="rounded-full px-3 py-2 text-xs text-slate-400 transition hover:text-sky-600"
            title="Chinese site"
          >
            中文站
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/products"
            className="rounded-full px-3 py-2 text-xs text-slate-500 hover:bg-sky-50 sm:hidden"
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {hydrated && itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className="flex justify-center gap-1 border-t border-sky-100/80 px-4 py-2 sm:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
        <a
          href={cnSiteUrl}
          className="rounded-full px-3 py-1.5 text-xs text-slate-400 hover:bg-sky-50"
        >
          中文站
        </a>
      </nav>
    </header>
  );
}
