import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-sky-100 bg-gradient-to-b from-sky-50 to-white px-4 py-16 text-center sm:px-6 sm:py-20">
        <span className="text-4xl">✦</span>
        <h1 className="mt-4 text-3xl font-bold text-sky-900 sm:text-4xl">
          About Eona
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          A global anime fashion brand inspired by the spirit of adventure
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="card-soft space-y-6 rounded-[2rem] p-8 text-sm leading-relaxed text-slate-500 sm:p-10 sm:text-base">
          <h2 className="text-xl font-bold text-sky-900">Who we are</h2>
          <p>
            <strong className="text-slate-700">Eona</strong> was founded
            by fans who wanted anime-inspired clothing that feels wearable every
            day — not just for conventions. We draw from the landscapes,
            elements, and cultures of Teyvat to create pieces that are{" "}
            <strong className="text-sky-700">cartoon-fresh, clean, and minimal</strong>.
          </p>
          <p>
            Our global storefront serves travelers worldwide with English
            support and USD pricing. We focus on quality presentation, thoughtful
            design, and a shopping experience that feels as light as a breeze
            through Mondstadt.
          </p>

          <h2 className="pt-4 text-xl font-bold text-sky-900">Our values</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong className="text-slate-600">Creativity</strong> — fan-made
              designs with original flair
            </li>
            <li>
              <strong className="text-slate-600">Accessibility</strong> — simple
              styles anyone can wear
            </li>
            <li>
              <strong className="text-slate-600">Community</strong> — built for
              adventurers and anime lovers everywhere
            </li>
          </ul>

          <p className="border-t border-sky-100 pt-6 text-xs text-slate-400">
            Not affiliated with miHoYo or HoYoverse. All designs are original
            fan creations for demonstration purposes.
          </p>
        </div>

        <div className="card-soft mt-8 rounded-3xl p-8">
          <h2 className="font-bold text-sky-900">Contact & Shipping</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>🌍 International shipping available (demo)</li>
            <li>📧 hello@eona.style</li>
            <li>💬 Discord: eona-style</li>
            <li>📸 Instagram / TikTok: @eona.style</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="btn-primary">
            Browse our collection
          </Link>
        </div>
      </div>
    </div>
  );
}
