import type { Metadata } from "next";
import Link from "next/link";
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        {/* Fixed, tall, centered header */}
        <header className="fixed top-0 left-0 right-0 z-[80] border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container py-8 sm:py-12">
            {/* Brand centered */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="font-bold tracking-[0.20em] text-2xl sm:text-3xl"
                aria-label="Sabor Selva home"
                title="Sabor Selva"
              >
                Sabor Selva
              </Link>
            </div>

            {/* Nav centered, evenly spaced */}
            <nav className="mt-4 flex justify-center gap-10 sm:gap-16 text-base sm:text-lg">
              <Link href="/about" className="hover:text-emerald-700">About Us</Link>
              <Link href="/our-mission" className="hover:text-emerald-700">Our Mission</Link>
              {/* Link to the home page's products section from any page */}
              <Link href="/#products" className="hover:text-emerald-700">Products</Link>
            </nav>
          </div>
        </header>

        {/* Spacer so content doesn't sit under the fixed header */}
        <div aria-hidden className="h-[132px] sm:h-[172px]" />

        <main id="content">{children}</main>

        {/* Footer with route links */}
        <footer className="mt-24 border-t">
          <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div>© {new Date().getFullYear()} Sabor Selva. All rights reserved.</div>
            <nav className="flex gap-6">
              <Link href="/about" className="hover:text-emerald-700">About Us</Link>
              <Link href="/our-mission" className="hover:text-emerald-700">Our Mission</Link>
              <Link href="/#products" className="hover:text-emerald-700">Products</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
