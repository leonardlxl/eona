import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { getAllProjectSlugs } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Eona Studio`,
    description: project.description,
  };
}

const categoryLabels = {
  game: "Game Development",
  "visual-art": "Digital Visual Art",
  interactive: "Interactive Experience",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative aspect-[21/9] max-h-[480px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, #08080c 0%, transparent 50%), linear-gradient(135deg, ${project.accent}30, transparent)`,
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <Link href="/work" className="text-sm text-white/40 hover:text-violet-400">
            ← Back to work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="tag">{categoryLabels[project.category]}</span>
            <span className="text-sm text-white/30">{project.year}</span>
            {project.client && (
              <span className="text-sm text-white/30">· {project.client}</span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-violet-300">{project.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-white/60">{project.description}</p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/60">
                  <span className="text-violet-400">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
              Tech & Tools
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="text-white/50">Interested in similar work?</p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
