"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryItem = { src: string; alt: string; text?: string };

export default function HowWeWorkGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  // Resolve the portal target after mount; fall back to body.
  useEffect(() => {
    const el = document.getElementById('modal-portal') as HTMLElement | null;
    setPortalTarget(el ?? document.body);
  }, []);

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

  // When opening modal: lock scroll, show with fade-in, focus trap
  useEffect(() => {
    if (open !== null) {
      // Only lock if we'll actually render a modal
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setVisible(true);
      const id = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.clearTimeout(id);
        setVisible(false);
      };
    }
  }, [open]);

  return (
    <div>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <button
            key={it.src}
            type="button"
            className="group block focus:outline-none cursor-zoom-in"
            aria-label={`Open ${it.alt}`}
            onClick={() => setOpen(idx)}
          >
            <figure className="relative h-[220px] md:h-[260px] lg:h-[300px] rounded-xl-hero ring-line overflow-hidden shadow-soft transition-shadow duration-300">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                quality={95}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Soft inner vignette for premium feel */}
              <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />
              {/* Gold accent dot */}
              <span aria-hidden className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-subtle" />
            </figure>
          </button>
        ))}
      </div>

      {portalTarget && open !== null && createPortal(
        <div
          className={[
            "fixed inset-0 z-[9999] flex items-center justify-center px-4",
            "transition-opacity motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
            visible ? "opacity-100" : "opacity-0",
          ].join(" ")}
          role="presentation"
          onMouseDown={(e) => {
            // Close when clicking backdrop only
            if (e.target === e.currentTarget) setOpen(null);
          }}
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="howw-title"
            className={[
              "relative w-full max-w-5xl bg-[var(--surface)]",
              "rounded-xl-hero ring-line shadow-soft overflow-hidden",
              "transition-all motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
            ].join(" ")}
            onKeyDown={(e) => {
              if (e.key === 'Tab') {
                const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
                  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusables || focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  (last as HTMLElement).focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  (first as HTMLElement).focus();
                }
              }
            }}
          >
            {/* Gold hairline */}
            <div style={{ height: 1, backgroundColor: "rgba(191,160,106,0.3)" }} />

            {/* Close button */}
            <button
              ref={closeBtnRef}
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-3 right-3 chip"
            >
              ×
            </button>

            {/* Content grid */}
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
                <h3 id="howw-title" className="mt-2 font-serif tracking-[0.012em] text-stone-900">
                  {items[open].alt}
                </h3>
                <p className="mt-3 text-stone-700 max-w-[60ch]">
                  {items[open].text || "Replace this with your method notes for this step."}
                </p>

                {/* Bottom controls */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    ref={prevBtnRef}
                    className="btn btn-outline"
                    onClick={() => setOpen((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
                    aria-label="Previous"
                  >
                    ← Prev
                  </button>
                  <button
                    ref={nextBtnRef}
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
        portalTarget
      )}
    </div>
  );
}
