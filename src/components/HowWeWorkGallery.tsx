"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
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
  const DEBUG = false; // disable debug logs in production

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

      {/* Inline debug fallback overlay (bypasses Lightbox/portal) */}
      {DEBUG && open !== null && active && (
        <div
          className="fixed inset-0 grid place-items-center bg-fuchsia-600/40"
          style={{ zIndex: 2147483647 }}
        >
          <div className="bg-white border-[6px] border-fuchsia-600 rounded-xl max-w-[840px] w-[92vw] max-h-[92vh] overflow-auto p-4">
            <div className="text-fuchsia-700 font-bold">DEBUG INLINE MODAL — {active.title}</div>
            <div className="mt-3 relative aspect-[4/3] bg-stone-100">
              <Image src={active.src} alt={active.alt} fill className="object-cover" />
            </div>
            <p className="mt-3 text-stone-800">{active.body}</p>
            <button type="button" className="mt-4 chip" onClick={() => setOpen(null)}>Close debug</button>
          </div>
        </div>
      )}
    </div>
  );
}
