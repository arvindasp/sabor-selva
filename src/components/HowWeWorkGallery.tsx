"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Lightbox from "@/components/Lightbox";
import { EASE_LUX } from "@/lib/ui";

export type GalleryItem = {
  title: string;
  body: string;
  src: string;
  alt: string;
};

export default function HowWeWorkGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const onPrev = () => setOpen((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
  const onNext = () => setOpen((prev) => (prev === null ? 0 : (prev + 1) % items.length));

  const active = useMemo(() => (open !== null ? items[open] : null), [open, items]);

  return (
    <div>
      {/* Word-first grid, calm serif tiles */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3">
        {items.map((it, idx) => (
          <button
            key={it.title}
            type="button"
            aria-label={`Open ${it.title}`}
            onClick={() => setOpen(idx)}
            className={`group relative overflow-hidden rounded-lg ring-line shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] motion-safe:transition transform motion-safe:duration-300 ${EASE_LUX} hover:scale-[1.02] hover:shadow-soft px-4 py-10 sm:py-12 bg-[var(--surface)]`}
          >
            <span className="block text-center font-serif text-[#1F3A2E] uppercase tracking-[0.18em] text-lg sm:text-xl select-none">
              {it.title}
            </span>
            {/* Gold underline on hover */}
            <span aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-4 h-px w-14 bg-[var(--gold)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {/* Modal */}
      <Lightbox
        open={open !== null}
        onClose={() => setOpen(null)}
        onPrev={open !== null ? onPrev : undefined}
        onNext={open !== null ? onNext : undefined}
        label={active?.title}
      >
        {active && (
          <div className="relative">
            {/* Optional subtle leaf watermark */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ maskImage: "radial-gradient(black, transparent 70%)" }}>
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#1F3A2E]">
                <path fill="currentColor" d="M100 10c30 20 50 40 60 70-10 30-30 50-60 70-30-20-50-40-60-70 10-30 30-50 60-70z" />
              </svg>
            </div>
            {/* Image */}
            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-[4/3] bg-stone-100">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 840px, 95vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Content */}
            <div className="p-6 sm:p-7">
              <h3 className="font-serif text-[#1F3A2E] uppercase tracking-[0.18em] text-lg">{active.title}</h3>
              <p className="mt-3 text-stone-800 font-sans text-base leading-relaxed max-w-[70ch]">{active.body}</p>
            </div>
          </div>
        )}
      </Lightbox>
    </div>
  );
}
