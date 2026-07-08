import Link from "next/link";
import type { Project } from "@/types/project";

const categoryLabels: Record<Project["category"], string> = {
  game: "Game",
  "visual-art": "Visual Art",
  interactive: "Interactive",
};

type Props = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured }: Props) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group glass-panel block overflow-hidden rounded-2xl transition hover:border-white/20 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-video"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay transition group-hover:opacity-60"
          style={{ background: `linear-gradient(135deg, ${project.accent}40, transparent)` }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="tag">{categoryLabels[project.category]}</span>
          <span className="text-xs text-white/30">{project.year}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-violet-300">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-white/50">{project.tagline}</p>
      </div>
    </Link>
  );
}
