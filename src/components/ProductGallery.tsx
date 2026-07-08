"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  name: string;
};

export default function ProductGallery({ images, name }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="card-soft relative aspect-[3/4] overflow-hidden rounded-3xl">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-16 w-14 overflow-hidden rounded-xl border-2 transition ${
                active === i ? "border-sky-400" : "border-transparent opacity-70"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
