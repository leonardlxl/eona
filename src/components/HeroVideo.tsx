"use client";

import { useRef, useState } from "react";

const DEFAULT_VIDEO =
  "https://cdn.coverr.co/videos/coverr-young-woman-in-a-white-dress-posing-5555/1080p.mp4";
const DEFAULT_POSTER =
  "https://placehold.co/1920x1080/1a2a3a/e8f6fc?text=Your+Hero+Video+Poster";

type Props = {
  /** Prefer local: /videos/hero.mp4 — falls back to demo video if missing */
  videoSrc?: string;
  posterSrc?: string;
};

export default function HeroVideo({
  videoSrc = "/videos/hero.mp4",
  posterSrc = DEFAULT_POSTER,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(videoSrc);

  const handleVideoError = () => {
    if (currentSrc !== DEFAULT_VIDEO) {
      setCurrentSrc(DEFAULT_VIDEO);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const scrollToBrand = () => {
    document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        onError={handleVideoError}
      >
        <source src={currentSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-slate-900/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
          Premium Lookbook
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Teyvat Closet
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
          Genshin-inspired anime fashion — cinematic style, everyday wear
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm transition hover:bg-white/20"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm transition hover:bg-white/20"
          >
            {muted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToBrand}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-white"
        aria-label="Scroll to brand story"
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <span className="animate-bounce text-xl">↓</span>
      </button>

      <p className="absolute bottom-3 right-4 z-10 hidden text-[10px] text-white/40 sm:block">
        Replace video in public/videos/hero.mp4
      </p>
    </section>
  );
}
