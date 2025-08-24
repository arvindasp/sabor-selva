"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
      {/* Full-bleed header */}
      <header className="fixed inset-x-0 top-0 z-[90] bg-[var(--bg)] border-b shadow-md">
        <div className="w-full flex items-center justify-between px-6 sm:px-10 py-6 sm:py-8">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="font-bold tracking-[0.15em] text-2xl sm:text-4xl"
            aria-label="Sabor Selva home"
          >
            Sabor Selva
          </Link>

          {/* Hamburger Icon */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-stone-900 hover:text-stone-700 transition p-2 sm:p-3"
          >
            <Menu className="w-8 h-8 sm:w-10 sm:h-10 text-[#3B2F2F]" />
          </button>
        </div>
      </header>

      {/* Right-side drawer menu */}
      <aside
        id="main-menu"
        className={[
          "fixed top-0 right-0 h-full z-[100] bg-[var(--surface)] border-l shadow-subtle origin-right",
          "w-[80vw] sm:w-[360px] max-w-[420px]",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0 visible pointer-events-auto" : "translate-x-full invisible pointer-events-none",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b">
          <div className="font-bold tracking-[0.12em] text-lg">Menu</div>
          <button
            type="button"
            className="text-stone-900 hover:text-stone-700 transition"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
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
