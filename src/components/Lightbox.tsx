"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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

  // Always portal to body to avoid ancestor stacking/overflow quirks
  const portalRoot = typeof window !== "undefined" ? document.body : null;

  const node = (
    <div className="fixed inset-0 z-[9999] grid place-items-center">
      {/* Backdrop (warm, dim) */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(12,20,16,0.55)] motion-safe:transition-opacity motion-safe:duration-300"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative z-[100] w-[92vw] max-w-[840px] max-h-[92vh] overflow-y-auto rounded-[12px] ring-line shadow-soft bg-[var(--surface)] motion-safe:transition-all motion-safe:duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:animate-[popIn_320ms_cubic-bezier(0.22,1,0.36,1)] outline outline-2 outline-[var(--gold)]/50"
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

  return portalRoot ? createPortal(node, portalRoot) : node;
}
