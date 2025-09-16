"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryItem = { src: string; alt: string; text?: string };

export default function HowWeWorkGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
      if ((e.key === "ArrowRight" || e.key === "ArrowDown") && open !== null) {
        setOpen((i) => (i === null ? null : (i + 1) % items.length));
      }
      if ((e.key === "ArrowLeft" || e.key === "ArrowUp") && open !== null) {
        setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((it, idx) => (
          <button
            key={it.src}
            type="button"
            className="group block focus:outline-none"
            aria-label={`Open ${it.alt}`}
            onClick={() => setOpen(idx)}
          >
            <figure className="relative h-[240px] sm:h-[260px] md:h-[300px] rounded-xl-hero ring-line overflow-hidden shadow-soft">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                quality={95}
                sizes="(min-width: 1024px) 16.6vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span aria-hidden className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-subtle" />
            </figure>
          </button>
        ))}
      </div>

      {mounted && open !== null &&
        createPortal(
          <div className="fixed inset-0 z-[95]">
            {/* Backdrop */}
            <button
              className="absolute inset-0 bg-black/60"
              aria-label="Close"
              onClick={() => setOpen(null)}
            />
            {/* Modal content */}
            <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
              <div className="w-full max-w-5xl">
                <div className="relative w-full rounded-xl-hero ring-line overflow-hidden shadow-soft" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={items[open].src}
                    alt={items[open].alt}
                    fill
                    quality={100}
                    sizes="(min-width: 1024px) 60vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="card p-5 sm:p-6 mt-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif tracking-[0.012em] text-stone-900">Step {open + 1}</h3>
                    <button className="chip" aria-label="Close overlay" onClick={() => setOpen(null)}>
                      &times;
                    </button>
                  </div>
                  <p className="mt-3 text-stone-700 max-w-[60ch]">
                    {items[open].text || "Replace this with your method notes for this step."}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      className="btn btn-outline"
                      onClick={() => setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
                      aria-label="Previous"
                    >
                      ← Prev
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => setOpen((i) => (i === null ? null : (i + 1) % items.length))}
                      aria-label="Next"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
