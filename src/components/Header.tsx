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
        <div className="container flex items-center justify-between py-8 sm:py-10">
          {/* Left: Brand (bigger) */}
          <Link
            href="/"
            className="font-bold tracking-[0.20em] text-2xl sm:text-3xl"
            aria-label="Sabor Selva home"
          >
            Sabor Selva
          </Link>

          {/* Right: Hamburger (three real lines, larger, pinned far right) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen(v => !v)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 grid place-items-center rounded-xl ring-1 ring-stone-200 hover:ring-stone-300 transition"
          >
            {/* top bar */}
            <span
              aria-hidden
              className={[
                "absolute block h-[2px] w-8 sm:w-9 bg-stone-900 transition-transform duration-300",
                open ? "rotate-45 translate-y-0" : "-translate-y-3",
              ].join(" ")}
            />
            {/* middle bar */}
            <span
              aria-hidden
              className={[
                "absolute block h-[2px] w-8 sm:w-9 bg-stone-900 transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            {/* bottom bar */}
            <span
              aria-hidden
              className={[
                "absolute block h-[2px] w-8 sm:w-9 bg-stone-900 transition-transform duration-300",
                open ? "-rotate-45 translate-y-0" : "translate-y-3",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* RIGHT DRAWER — hidden by default, slides in from the right when open */}
      <aside
        id="main-menu"
        className={[
          "fixed top-0 right-0 h-full z-[100] bg-[var(--surface)] border-l shadow-subtle",
          "w-[80vw] sm:w-[360px] max-w-[420px]", // narrow panel (not full page)
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
