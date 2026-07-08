export type ProjectCategory = "game" | "visual-art" | "interactive";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: number;
  client?: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  accent: string;
};
