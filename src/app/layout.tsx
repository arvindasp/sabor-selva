import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabor Selva – Chocolate & Coffee that Protect the Bolivian Rainforest",
  description:
    "Premium, wild-grown Bolivian chocolate & coffee. Fair wages, forest-first sourcing, and extraordinary flavor.",
  metadataBase: new URL("https://sabor-selva.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Skip link for accessibility */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        {/* Sticky Header (glassy, thin border) */}
        <header className="sticky top-0 z-50 glass border-b">
          <div className="container flex items-center justify-between py-3">
            <a
              href="#"
              className="font-bold tracking-wide"
              aria-label="Sabor Selva home"
              title="Sabor Selva"
            >
              Sabor Selva
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="hover:text-emerald-700">About Us</a>
              <a href="#mission" className="hover:text-emerald-700">Our Mission</a>
              <a href="#products" className="hover:text-emerald-700">Products</a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main id="content">{children}</main>

        {/* Simple Footer (repeat nav) */}
        <footer className="mt-24 border-t">
          <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div>© {new Date().getFullYear()} Sabor Selva. All rights reserved.</div>
            <nav className="flex gap-6">
              <a href="#about" className="hover:text-emerald-700">About Us</a>
              <a href="#mission" className="hover:text-emerald-700">Our Mission</a>
              <a href="#products" className="hover:text-emerald-700">Products</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
