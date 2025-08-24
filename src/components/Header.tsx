"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
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
      {/* Luxurious Header */}
      <header className="fixed inset-x-0 top-0 z-[90] bg-[var(--bg)] border-b shadow-md">
  <div className="w-full px-4 sm:px-6 lg:px-10">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center py-6 sm:py-8">
      {/* Brand */}
      <Link
        href="/"
        className="text-[#1c3b2a] font-bold tracking-[0.15em] text-2xl sm:text-4xl transition-all duration-200 hover:underline hover:underline-offset-[6px] active:scale-[1.01]"
        aria-label="Sabor Selva Home"
      >
        Sabor Selva
      </Link>

      {/* Hamburger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="group p-3 sm:p-4 flex flex-col justify-between items-end space-y-1 transition-all"
      >
        <span className="w-7 h-[2px] bg-[#1c3b2a] rounded group-hover:scale-105 transition-transform" />
        <span className="w-5 h-[2px] bg-[#1c3b2a] rounded group-hover:scale-105 transition-transform" />
        <span className="w-6 h-[2px] bg-[#1c3b2a] rounded group-hover:scale-105 transition-transform" />
      </button>
    </div>
  </div>
</header>

      {/* Slide-in Menu (Right side) */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-[360px] max-w-[420px] z-[100] bg-[var(--surface)] border-l shadow-xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 visible pointer-events-auto" : "translate-x-full invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b">
          <div className="font-bold tracking-[0.12em] text-lg text-stone-800">Menu</div>
          <button
            type="button"
            className="text-stone-900 hover:text-stone-600 transition"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="px-6 py-6">
          <ul className="space-y-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 rounded-md text-xl sm:text-2xl text-stone-800 hover:bg-stone-100 transition"
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
