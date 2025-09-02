import Link from "next/link";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--bg)]/85 glass">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top row: brand and desktop nav */}
        <div className="flex items-center justify-between py-10 sm:py-14">
          <Link
            href="/"
            className={`${playfair.className} text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-none tracking-[0.08em] text-stone-900`}
            aria-label="Sabor Selva home"
          >
            Sabor Selva
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 lg:gap-16 text-[1.05rem] lg:text-[1.15rem] tracking-wider">
            <Link
              href="/"
              className="text-stone-700 hover:text-[#0b3d2e] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-stone-700 hover:text-[#0b3d2e] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/our-mission"
              className="text-stone-700 hover:text-[#0b3d2e] transition-colors"
            >
              Our Mission
            </Link>
            <Link
              href="/#products"
              className="text-stone-700 hover:text-[#0b3d2e] transition-colors"
            >
              Products
            </Link>
          </nav>
        </div>
        {/* Mobile Nav (spacious, scrollable) */}
        <nav className="md:hidden -mt-4 pb-6 flex gap-8 overflow-x-auto text-[1.05rem] tracking-wider">
          <Link href="/" className="shrink-0 text-stone-700 hover:text-[#0b3d2e] transition-colors">
            Home
          </Link>
          <Link href="/about" className="shrink-0 text-stone-700 hover:text-[#0b3d2e] transition-colors">
            About Us
          </Link>
          <Link href="/our-mission" className="shrink-0 text-stone-700 hover:text-[#0b3d2e] transition-colors">
            Our Mission
          </Link>
          <Link href="/#products" className="shrink-0 text-stone-700 hover:text-[#0b3d2e] transition-colors">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
