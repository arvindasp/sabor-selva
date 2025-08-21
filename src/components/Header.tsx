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

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-mission", label: "Our Mission" },
    { href: "/#products", label: "Products" },
  ];

  return (
    <>
      {/* Fixed, solid-white header */}
      <header className="fixed top-0 left-0 right-0 z-[90] border-b bg-white">
        <div className="container py-10 sm:py-14 flex items-center justify-between">
          {/* Left: logo + brand */}
          <div className="flex items-center gap-4">
            {/* Logo placeholder — swap for your logo file when ready */}
            <div
              aria-hidden
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-1 ring-stone-200 bg-emerald-700/90"
              title="Logo"
            />
            <Link
              href="/"
              className="font-bold tracking-[0.20em] text-2xl sm:text-3xl"
              aria-label="Sabor Selva home"
            >
              Sabor Selva
            </Link>
          </div>

          {/* Right: hamburger (pinned fully right) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen(v => !v)}
            className="relative w-12 h-12 sm:w-14 sm:h-14 grid place-items-center rounded-xl ring-1 ring-stone-200 hover:ring-stone-300 transition ml-auto"
          >
            {/* 3 lines morph to X */}
            <span
              aria-hidden
              className={[
                "absolute block h-[2px] w-7 sm:w-8 bg-stone-900 transition-transform duration-300",
                open ? "rotate-45 translate-y-0" : "-translate-y-2.5",
              ].join(" ")}
            />
            <span
              aria-hidden
              className={[
                "absolute block h-[2px] w-7 sm:w-8 bg-stone-900 transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              aria-hidden
              className={[
                "absolute block h-[2px] w-7 sm:w-8 bg-stone-900 transition-transform duration-300",
                open ? "-rotate-45 translate-y-0" : "translate-y-2.5",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* Right drawer (no full-screen backdrop) */}
      <aside
        id="main-menu"
        className={[
          "fixed right-0 top-0 h-full z-[85] bg-white border-l shadow-subtle transition-transform duration-300",
          // Responsive width: ~1/5 of page on desktop, sensible on mobile
          "w-[72vw] sm:w-[34vw] md:w-[26vw] lg:w-[22vw] xl:w-[20vw] min-w-[260px] max-w-[380px]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b">
          <div className="font-bold tracking-[0.12em]">Menu</div>
          <button
            type="button"
            className="rounded-md ring-1 ring-stone-200 px-3 py-1.5 hover:ring-stone-300"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="px-6 py-5">
          <ul className="list-none space-y-3 sm:space-y-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-4 sm:py-5 rounded-lg hover:bg-stone-100 text-xl sm:text-2xl tracking-[0.06em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Luxe detail */}
          <div className="px-3 mt-8">
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
