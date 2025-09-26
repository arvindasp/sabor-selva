"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import CardImage from "@/components/CardImage";
import { EASE_LUX } from "@/lib/ui";

type Item = { src: string; alt: string };

export default function AboutThumbGallery() {
  const items: Item[] = [
    { src: "/about-1.jpg", alt: "About photo 1" },
    { src: "/about-2.jpg", alt: "About photo 2" },
    { src: "/about-3.jpg", alt: "About photo 3" },
  ];

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Item | null>(null);

  function onOpen(it: Item) {
    setCurrent(it);
    setOpen(true);
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {items.map((it) => (
          <button
            key={it.src}
            type="button"
            onClick={() => onOpen(it)}
            className={`group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 motion-safe:transition transform motion-safe:duration-300 ${EASE_LUX} hover:scale-[1.02]`}
          >
            <CardImage
              src={it.src}
              alt={it.alt}
              heightClass="h-[240px] sm:h-[300px] md:h-[340px]"
            />
            <span aria-hidden className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-subtle" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
          </button>
        ))}
      </div>
      <Lightbox open={open && !!current} onClose={() => setOpen(false)} label={current?.alt || "Image"}>
        <div style={{ height: 1, backgroundColor: "rgba(212,175,55,0.3)" }} />
        <div className="relative w-[86vw] sm:w-[80vw] md:w-[70vw]" style={{ aspectRatio: "4 / 3" }}>
          {current && (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          )}
        </div>
      </Lightbox>
    </div>
  );
}
