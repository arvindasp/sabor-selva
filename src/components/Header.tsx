"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open, close on Escape
  useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("overflow-hidden");
    else html.classList.remove("overflow-hidden");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-mission", label: "Our Mission" },
    { href: "/#products", label: "Products" }, // works from any page
  ];

  return (
    <>
      {/* Fixed white header */}
      <header className="fixed top-0 left-0 right-0 z-[90] border-b bg-white">
        <div className="container py-6 sm:py-8 flex items-center justify-between">
          {/* Left: brand + (future) logo */}
          <div className="flex items-center gap-3">
            {/* Logo placeholder (swap for your logo when ready) */}
            <div
              aria-hidden
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-1 ring-stone-200 bg-emerald-700/90"
              title="Logo"
            />
            <Link
              href="/"
              className="font-bold tracking-[0.20em] text-xl sm:text-2xl"
              aria-label="Sabor Selva home"
            >
              Sabor Selva
            </Link>
          </div>

          {/* Right: hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative w-11 h-11 grid place-items-center rounded-lg ring-1 ring-stone-200 hover:ring-stone-300 transition"
          >
            {/* Hamburger lines -> morph into X */}
            <span
              className={[
                "absolute block h-[2px] w-6 bg-stone-900 transition-transform duration-300",
                open ? "rotate-45 translate-y-0" : "-translate-y-2",
              ].join(" ")}
            />
            <span
              className={[
                "absolute block h-[2px] w-6 bg-stone-900 transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute block h-[2px] w-6 bg-stone-900 transition-transform duration-300",
                open ? "-rotate-45 translate-y-0" : "translate-y-2",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-[80] bg-black/20 backdrop-blur-sm transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      {/* Right drawer */}
      <aside
        id="main-menu"
        className={[
          "fixed right-0 top-0 h-full z-[85] w-[82vw] max-w-sm bg-white border-l shadow-subtle transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div className="font-bold tracking-[0.15em]">Menu</div>
          <button
            type="button"
            className="rounded-md ring-1 ring-stone-200 px-3 py-1.5 hover:ring-stone-300"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 rounded-lg hover:bg-stone-100 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Subtle luxe detail */}
          <div className="px-3 mt-6">
            <div className="chip">
              <span className="w-2 h-2 rounded-full bg-amber-500/90" />
              Sabor Selva
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
