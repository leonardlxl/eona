import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work | Eona Studio",
  description: "Games, digital visual art, and interactive experiences by Eona.",
};

export default function WorkPage() {
  return (
    <div>
      <section className="border-b border-white/5 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Our work</h1>
          <p className="mt-4 max-w-2xl text-white/50">
            A selection of games, visual art, and interactive projects across
            original IP and client collaborations.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={i === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
