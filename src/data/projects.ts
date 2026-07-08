import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "lumen-veil",
    title: "Lumen Veil",
    tagline: "Atmospheric action RPG",
    category: "game",
    year: 2026,
    description:
      "A third-person action RPG built around light-based combat and procedural ruin worlds. Eona led core systems design, environment art direction, and the real-time lighting toolchain.",
    highlights: [
      "Dynamic light-as-weapon combat loop",
      "Procedural ruin generation for replayability",
      "Cinematic boss encounters with real-time VFX",
    ],
    tech: ["Unreal Engine 5", "Houdini", "Niagara", "C++"],
    image: "/images/projects/project-1.svg",
    accent: "#8b5cf6",
  },
  {
    slug: "neon-drift",
    title: "Neon Drift",
    tagline: "Arcade racer IP & key art",
    category: "visual-art",
    year: 2025,
    client: "Independent IP",
    description:
      "Full visual identity for a synthwave racing universe — vehicle designs, track vistas, UI mood boards, and a launch trailer look-dev package.",
    highlights: [
      "12 vehicle hero illustrations",
      "Motion poster series for social launch",
      "Cohesive neon-noir color system",
    ],
    tech: ["Photoshop", "Blender", "After Effects"],
    image: "/images/projects/project-2.svg",
    accent: "#22d3ee",
  },
  {
    slug: "echo-chamber",
    title: "Echo Chamber",
    tagline: "Narrative puzzle experience",
    category: "interactive",
    year: 2025,
    description:
      "An interactive audio-visual installation where players reshape memory fragments through spatial puzzles. Built for festival circuits and gallery touring.",
    highlights: [
      "Spatial audio-reactive environments",
      "Touchless gesture input prototype",
      "Modular scene system for touring",
    ],
    tech: ["Unity", "Wwise", "TouchDesigner"],
    image: "/images/projects/project-3.svg",
    accent: "#f472b6",
  },
  {
    slug: "aether-forge",
    title: "Aether Forge",
    tagline: "Technical art pipeline",
    category: "game",
    year: 2024,
    client: "Partner studio",
    description:
      "End-to-end technical art pipeline for a stylized open-world title — shader libraries, foliage tools, and automated LOD workflows that cut iteration time by 40%.",
    highlights: [
      "Stylized PBR shader suite",
      "Houdini-to-engine foliage scatter",
      "Automated asset validation in CI",
    ],
    tech: ["Unreal Engine 5", "Houdini", "Python", "Substance"],
    image: "/images/projects/project-4.svg",
    accent: "#a78bfa",
  },
  {
    slug: "still-frame",
    title: "Still Frame",
    tagline: "Cinematic illustration series",
    category: "visual-art",
    year: 2024,
    description:
      "A limited series of large-format digital paintings exploring solitude in megacity futures — commissioned for gallery print and digital exhibition.",
    highlights: [
      "8 large-format originals",
      "Print-ready 300 DPI masters",
      "Behind-the-process breakdown reels",
    ],
    tech: ["Photoshop", "Procreate", "DaVinci Resolve"],
    image: "/images/projects/project-5.svg",
    accent: "#38bdf8",
  },
  {
    slug: "pulse-protocol",
    title: "Pulse Protocol",
    tagline: "Mobile roguelite prototype",
    category: "game",
    year: 2024,
    description:
      "Vertical-slice roguelite prototype with card-based loadouts and bite-sized runs. Eona handled game design, UX, and VFX-driven feedback loops.",
    highlights: [
      "90-second core loop tuned for mobile",
      "Haptic-synced impact feedback",
      "Live-ops ready metagrowth scaffold",
    ],
    tech: ["Unity", "C#", "Spine", "Shader Graph"],
    image: "/images/projects/project-6.svg",
    accent: "#34d399",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
