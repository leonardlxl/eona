import { projects } from "@/data/projects";

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
