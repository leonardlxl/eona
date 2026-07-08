import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

export default function HomePage() {
  return (
    <div className="bg-[var(--color-cloud-white)]">
      <HeroVideo />

      <section
        id="brand"
        className="relative border-t border-sky-100 bg-gradient-to-b from-white to-[var(--color-sky-mist)] px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-3xl">✦</span>
          <h2 className="mt-4 text-3xl font-bold text-sky-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            <strong className="text-slate-700">Teyvat Closet</strong> brings the
            colors and spirit of Teyvat into wearable anime fashion. We believe
            great style should feel{" "}
            <strong className="text-sky-700">cute, fresh, and effortless</strong>
            — whether you are heading to a convention or simply expressing your
            love for the world of adventure.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Every piece is designed with clean lines, soft palettes, and subtle
            element-inspired details. No complicated layering required — just
            pick your favorite and go.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              icon: "🌸",
              title: "Cute & Fresh",
              text: "Pastel tones and playful anime aesthetics",
            },
            {
              icon: "🌍",
              title: "Global Ready",
              text: "USD pricing and worldwide shipping mindset",
            },
            {
              icon: "✨",
              title: "Minimal Design",
              text: "Clean layouts that let the outfit shine",
            },
          ].map((item) => (
            <div key={item.title} className="card-soft rounded-3xl p-6 text-center">
              <p className="text-2xl">{item.icon}</p>
              <h3 className="mt-3 font-semibold text-sky-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link href="/products" className="btn-primary">
            Shop the collection →
          </Link>
          <Link href="/about" className="btn-outline">
            About the company
          </Link>
        </div>
      </section>
    </div>
  );
}
