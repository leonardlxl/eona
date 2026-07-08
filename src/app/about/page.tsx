import Link from "next/link";

export const metadata = {
  title: "About | Eona Studio",
  description:
    "Eona is a digital studio blending visual art, game development, and creative technology.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-white/5 px-4 py-20 text-center sm:px-6">
        <p className="section-label">About Eona</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Art meets engineering
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/50">
          We are a remote-first studio building at the frontier of games, digital
          art, and interactive technology.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="glass-panel space-y-6 rounded-2xl p-8 text-sm leading-relaxed text-white/60 sm:p-10 sm:text-base">
          <h2 className="text-xl font-bold text-white">Who we are</h2>
          <p>
            <strong className="text-white/90">Eona</strong> was founded by
            artists and engineers who believe the best digital experiences emerge
            when visual craft and technical depth work as one discipline. We
            partner with game studios, entertainment brands, and ambitious
            founders to ship work that feels{" "}
            <strong className="text-violet-300">cinematic, playable, and alive</strong>.
          </p>
          <p>
            Our team spans game design, environment and character art, real-time
            VFX, technical art, and pipeline engineering — united by a shared
            obsession with world-building.
          </p>

          <h2 className="pt-4 text-xl font-bold text-white">What we believe</h2>
          <ul className="space-y-3">
            {[
              {
                title: "Craft over volume",
                text: "We take on fewer projects to protect creative quality.",
              },
              {
                title: "Tools serve vision",
                text: "Technology should amplify imagination, not replace it.",
              },
              {
                title: "Play is universal",
                text: "Whether a game or an installation, we design for wonder.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="text-violet-400">◈</span>
                <span>
                  <strong className="text-white/80">{item.title}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel mt-8 rounded-2xl p-8">
          <h2 className="font-bold text-white">Capabilities</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/50 sm:grid-cols-2">
            {[
              "Game prototyping & vertical slices",
              "Art direction & key visual",
              "Character & environment design",
              "Real-time cinematics & trailers",
              "Technical art & shader development",
              "Pipeline tooling & automation",
            ].map((cap) => (
              <p key={cap} className="flex gap-2">
                <span className="text-cyan-400">·</span>
                {cap}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/work" className="btn-primary">
            Explore our work →
          </Link>
        </div>
      </div>
    </div>
  );
}
