"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type GalleryItem = { src: string; alt: string; text?: string };

export default function HowWeWorkGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  // Labels for the chain navigation
  const labels = [
    "1) Origins",
    "2) Gathering",
    "3) Ferment",
    "4) Curing",
    "5) Livelihoods",
    "6) Legacy",
  ];

  // When opening modal: lock scroll, show with fade-in, focus trap
  // Ensure the inline panel scrolls into view when opened
  useEffect(() => {
    if (open !== null && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [open]);

  // Allow closing with Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div>
      {/* Chain of step links */}
      <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[1.05rem]">
        {items.map((_, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <button
              type="button"
              className="font-serif tracking-[0.08em] text-stone-800 hover:text-[#0b3d2e] transition-colors underline decoration-amber-500/40 underline-offset-4"
              onClick={() => setOpen(idx)}
              aria-label={`Open step ${idx + 1}`}
            >
              {labels[idx] ?? `Step ${idx + 1}`}
            </button>
            {idx < items.length - 1 && (
              <span aria-hidden className="text-stone-400">→</span>
            )}
          </div>
        ))}
      </nav>

      {/* Warm backdrop (click to close). No scroll lock. */}
      {open !== null && (
        <button
          aria-label="Close"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[90] bg-black/10"
        />
      )}

      {open !== null && (
        <div ref={panelRef} className="relative z-[100] mt-8">
          <div className="rounded-xl-hero ring-line shadow-soft overflow-hidden bg-[var(--surface)]">
            <div style={{ height: 1, backgroundColor: "rgba(191,160,106,0.3)" }} />
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] bg-black">
                <Image
                  src={items[open].src}
                  alt={items[open].alt}
                  fill
                  quality={100}
                  sizes="(min-width: 1024px) 50vw, 90vw"
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
                  {items[open].text || "Replace this with your method notes for this step."}
                </p>
                {/* No close button or next/prev per spec */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
