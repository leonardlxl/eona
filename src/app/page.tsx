import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ServicesGrid from "@/components/ServicesGrid";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featured = getFeaturedProjects(3);

  return (
    <div>
      <Hero />

      <section className="border-t border-white/5 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">What we do</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Four disciplines, one vision
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            From pixel to pipeline, we unite art and engineering to ship
            experiences that feel alive.
          </p>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0c0c12] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Recent projects
              </h2>
            </div>
            <Link href="/work" className="btn-outline text-sm">
              View all work →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <ProjectCard project={featured[0]} featured />
            {featured.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Let&apos;s collaborate</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-white/50">
            Whether you need a vertical slice, a full art direction package, or
            technical art support — we&apos;d love to hear about it.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
