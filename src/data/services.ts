export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "games",
    title: "Game Development",
    description:
      "From concept to launch — gameplay systems, world-building, and live-ready pipelines for PC, console, and mobile.",
    icon: "◈",
  },
  {
    id: "visual-art",
    title: "Digital Visual Art",
    description:
      "Cinematic key art, character design, environment painting, and motion-led visual storytelling for brands and IP.",
    icon: "◇",
  },
  {
    id: "realtime",
    title: "Real-Time & Interactive",
    description:
      "Unreal and Unity experiences — trailers, installations, virtual production, and immersive digital showcases.",
    icon: "◎",
  },
  {
    id: "tech",
    title: "Digital Technology",
    description:
      "Procedural tools, render pipelines, automation, and technical art that scale creative teams without losing craft.",
    icon: "⬡",
  },
];
