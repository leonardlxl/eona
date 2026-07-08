import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="glow-orb absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl" />
      <div
        className="absolute top-20 right-10 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="section-label animate-pulse-glow">Digital Visual Art · Games · Technology</p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-7xl">
          We build worlds
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            worth getting lost in.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
          Eona is a creative technology studio specializing in game development,
          cinematic digital art, and real-time interactive experiences for
          studios, brands, and original IP.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/work" className="btn-primary">
            View our work →
          </Link>
          <Link href="/contact" className="btn-outline">
            Start a project
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 sm:max-w-lg">
          {[
            { value: "12+", label: "Shipped projects" },
            { value: "4", label: "Core disciplines" },
            { value: "Global", label: "Remote studio" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
