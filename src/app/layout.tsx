import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Sabor Selva – Chocolate & Coffee that Protect the Bolivian Rainforest",
  description:
    "Premium, wild-grown Bolivian chocolate & coffee. Fair wages, forest-first sourcing, and extraordinary flavor.",
  metadataBase: new URL("https://sabor-selva.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[var(--bg)] text-[var(--text)]">
        {/* Accessibility: skip link */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[95] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        {/* Full-bleed header outside container */}
        <Header />

        {/* Page content inside container, with top padding to match header height */}
        <main
  id="content"
  className="pt-[120px] sm:pt-[160px] max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12"
>
  {children}
</main>

        {/* Footer inside same container */}
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
