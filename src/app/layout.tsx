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
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[95] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        <Header />

        {/* Spacer so content doesn't sit under the fixed header */}
        <div aria-hidden className="h-[136px] sm:h-[176px]" />

        <main id="content">{children}</main>

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
