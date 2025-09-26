"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { EASE_LUX } from "@/lib/ui";

export type GalleryItem = { src: string; alt: string; text?: string };

export default function HowWeWorkGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const onPrev = () => setOpen((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
  const onNext = () => setOpen((prev) => (prev === null ? 0 : (prev + 1) % items.length));

  return (
    <div>
      {/* Grid of visual tiles */}
      <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3">
        {items.map((it, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Open step ${idx + 1}`}
            onClick={() => setOpen(idx)}
            className={`group relative overflow-hidden rounded-xl-hero ring-line shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 motion-safe:transition transform motion-safe:duration-300 ${EASE_LUX} hover:scale-[1.02] hover:shadow-soft`}
          >
            <div className="relative h-[160px] sm:h-[200px] md:h-[220px]">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
            <span className="sr-only">{it.alt}</span>
          </button>
        ))}
      </div>

      <Lightbox
        open={open !== null}
        onClose={() => setOpen(null)}
        onPrev={open !== null ? onPrev : undefined}
        onNext={open !== null ? onNext : undefined}
        label={open !== null ? items[open].alt : undefined}
      >
        {open !== null && (
          <>
            <div style={{ height: 1, backgroundColor: "rgba(191,160,106,0.3)" }} />
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px] bg-black">
                <Image
                  src={items[open].src}
                  alt={items[open].alt}
                  fill
                  quality={100}
                  sizes="(min-width: 1280px) 900px, (min-width: 1024px) 720px, 95vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5 sm:p-7 relative">
                <div className="flex items-start justify-between gap-3">
                  <span className="uppercase tracking-[0.18em] text-xs text-stone-500">Step</span>
                  <span className="chip">Step {open + 1} of {items.length}</span>
                </div>
                <h3 className="mt-2 font-serif tracking-[0.012em] text-stone-900">{items[open].alt}</h3>
                <p className="mt-3 text-stone-700 max-w-[60ch]">
                  {items[open].text || 'Replace this with your method notes for this step.'}
                </p>
              </div>
            </div>
          </>
        )}
      </Lightbox>
    </div>
  );
}
