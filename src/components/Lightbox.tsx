"use client";

import { useEffect, useRef } from "react";

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  label?: string;
  children: React.ReactNode;
};

export default function Lightbox({ open, onClose, onPrev, onNext, label, children }: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  useEffect(() => {
    if (open) setTimeout(() => closeBtnRef.current?.focus(), 0);
  }, [open]);

  // Lock scroll when open
  useEffect(() => {
    if (open) {
      const root = document.documentElement;
      const prev = root.style.overflow;
      root.style.overflow = "hidden";
      return () => { root.style.overflow = prev; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center">
      {/* Backdrop (warm, dim) */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(191,160,106,0.24)] motion-safe:transition-opacity motion-safe:duration-300"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative z-[100] w-[92vw] max-w-5xl rounded-xl-hero overflow-hidden ring-line shadow-soft bg-[var(--surface)] motion-safe:transition-all motion-safe:duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        {children}
        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-3 right-3 chip"
        >
          Close
        </button>
      </div>
    </div>
  );
}
