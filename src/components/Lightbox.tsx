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
  const DEBUG = true; // Temporary: visible helpers to troubleshoot overlay

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

  // Lock scroll when open (body only to avoid iOS/Safari fixed issues)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  // Prefer dedicated portal host if present; fallback to body
  const portalRoot = typeof window !== "undefined"
    ? (document.getElementById("modal-portal") ?? document.body)
    : null;

  const node = (
    <div className="fixed inset-0 z-[99999] grid place-items-center bg-black/60 outline outline-[6px] outline-blue-500/50">
      {DEBUG && (
        <div className="absolute top-3 left-3 z-[200] bg-rose-600 text-white text-sm font-semibold px-2.5 py-1.5 rounded shadow">
          Lightbox OPEN{label ? `: ${label}` : ""}
        </div>
      )}
      {/* Backdrop (dim + blur) */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 z-10 bg-[rgba(12,20,16,0.55)] backdrop-blur-md motion-safe:transition-opacity motion-safe:duration-300"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative z-20 w-[92vw] max-w-[840px] max-h-[92vh] overflow-y-auto rounded-[12px] ring-line shadow-soft bg-white bg-[var(--surface)] motion-safe:transition-all motion-safe:duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:animate-[popIn_320ms_cubic-bezier(0.22,1,0.36,1)] outline outline-2 outline-[var(--gold)]/50 border-[6px] border-emerald-500"
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
