export const metadata = {
  title: "Contact | Eona Studio",
  description: "Get in touch with Eona for game development and digital art projects.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-white/5 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Contact</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Start a project
          </h1>
          <p className="mt-4 max-w-2xl text-white/50">
            Tell us about your game, visual art, or interactive experience. We
            typically respond within 2 business days.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6">
        <form className="glass-panel space-y-6 rounded-2xl p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/70">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-violet-500/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-violet-500/50"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-white/70">
              Project type
            </label>
            <select
              id="type"
              name="type"
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#12121a] px-4 py-3 text-sm text-white outline-none focus:border-violet-500/50"
            >
              <option value="game">Game development</option>
              <option value="art">Digital visual art</option>
              <option value="interactive">Interactive / installation</option>
              <option value="tech">Technical art / pipeline</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-violet-500/50"
              placeholder="Tell us about your project, timeline, and goals..."
            />
          </div>
          <button type="button" className="btn-primary w-full">
            Send message
          </button>
          <p className="text-center text-xs text-white/30">
            Demo form — connect to your email service or CRM when ready.
          </p>
        </form>

        <div className="space-y-8">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-bold text-white">Direct contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li>
                <span className="text-white/70">Email</span>
                <br />
                hello@eona.studio
              </li>
              <li>
                <span className="text-white/70">Business inquiries</span>
                <br />
                projects@eona.studio
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-bold text-white">Follow us</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li className="hover:text-violet-400">LinkedIn — /eona-studio</li>
              <li className="hover:text-violet-400">ArtStation — eona</li>
              <li className="hover:text-violet-400">Twitter / X — @eonastudio</li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8">
            <h2 className="font-bold text-white">Working with us</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              We work on fixed-scope packages, retainer partnerships, and
              co-development for select original IP. NDA-friendly from first
              conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
