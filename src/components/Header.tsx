"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const active =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `rounded-full px-4 py-2 text-sm font-medium transition ${
      active
        ? "bg-white/10 text-white"
        : "text-white/60 hover:bg-white/5 hover:text-white"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08080c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-violet-900/40">
            E
          </span>
          <div>
            <p className="text-base font-bold tracking-wide text-white">Eona</p>
            <p className="text-[10px] tracking-widest text-white/40 uppercase">
              Digital Studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary hidden text-xs sm:inline-flex">
          Start a project
        </Link>
      </div>

      <nav className="flex justify-center gap-1 border-t border-white/5 px-4 py-2 sm:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
