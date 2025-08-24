"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

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
      {/* FULL-BLEED, NON-TRANSPARENT HEADER */}
      <header className="fixed inset-x-0 top-0 z-[90] bg-[var(--bg)] border-b">
        {/* No .container here -> truly full width; just generous horizontal padding */}
        <div className="w-full flex items-center justify-between px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
          {/* Brand (bigger, far left) */}
          <Link
            href="/"
            className="font-bold tracking-[0.20em] text-2xl sm:text-3xl"
            aria-label="Sabor Selva home"
          >
            Sabor Selva
          </Link>

          {/* Hamburger (three lines, far right) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen(v => !v)}
            className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-xl ring-1 ring-stone-200 hover:ring-stone-300 transition"
          >
            {/* Three bars */}
            <span
              aria-hidden
              className={[
                "absolute left-1/2 top-1/2 -translate-x-1/2 h-[2px] w-9 bg-stone-900 transition-transform duration-300",
                open ? "rotate-45 -translate-y-1/2" : "-translate-y-[10px]",
              ].join(" ")}
            />
            <span
              aria-hidden
              className={[
                "absolute left-1/2 top-1/2 -translate-x-1/2 h-[2px] w-9 bg-stone-900 transition-all duration-200",
                open ? "opacity-0" : "opacity-100 -translate-y-1/2",
              ].join(" ")}
            />
            <span
              aria-hidden
              className={[
                "absolute left-1/2 top-1/2 -translate-x-1/2 h-[2px] w-9 bg-stone-900 transition-transform duration-300",
                open ? "-rotate-45 -translate-y-1/2" : "translate-y-[10px]",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* RIGHT DRAWER — hidden by default; slides in from the RIGHT */}
      <aside
        id="main-menu"
        className={[
          "fixed top-0 right-0 h-full z-[100] bg-[var(--surface)] border-l shadow-subtle origin-right",
          // Narrow panel; not full screen
          "w-[80vw] sm:w-[360px] max-w-[420px]",
          // Start off-screen right; become visible on open
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0 visible pointer-events-auto" : "translate-x-full invisible pointer-events-none",
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

        <nav className="px-6 py-6">
          <ul className="list-none space-y-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-4 rounded-lg hover:bg-stone-100 text-xl sm:text-2xl tracking-[0.06em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
