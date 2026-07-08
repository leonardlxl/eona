import Link from "next/link";
import { primarySiteUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#08080c]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-lg font-bold text-white">Eona</p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            A digital studio at the intersection of visual art, interactive
            entertainment, and technology. We craft worlds people want to
            explore.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white/80">Studio</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li>
              <Link href="/work" className="hover:text-violet-400">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-violet-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-violet-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white/80">Connect</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li>hello@eona.studio</li>
            <li>
              <span className="hover:text-violet-400">LinkedIn</span>
              {" · "}
              <span className="hover:text-violet-400">ArtStation</span>
            </li>
            <li>
              <span className="hover:text-violet-400">Twitter / X</span>
              {" · "}
              <span className="hover:text-violet-400">Discord</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-white/30">
        <p>
          © {new Date().getFullYear()} Eona Studio · Digital Visual Art & Games
        </p>
        <p className="mt-1">
          <a
            href={primarySiteUrl}
            className="hover:text-violet-400"
          >
            {primarySiteUrl.replace(/^https?:\/\//, "")}
          </a>
        </p>
      </div>
    </footer>
  );
}
