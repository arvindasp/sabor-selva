import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdf6e3] border-b border-stone-300 py-8 md:py-12 px-6 lg:px-16 flex items-center justify-between">
      <Link href="/" className={`${playfair.className} text-3xl md:text-4xl tracking-wide text-stone-900`}>
        Sabor Selva
      </Link>
      <nav className="flex gap-8 md:gap-12 text-sm md:text-base">
        <Link href="/" className="hover:text-emerald-900 hover:underline underline-offset-4 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-emerald-900 hover:underline underline-offset-4 transition-colors">
          About Us
        </Link>
        <Link href="/our-mission" className="hover:text-emerald-900 hover:underline underline-offset-4 transition-colors">
          Our Mission
        </Link>
        <Link href="/#products" className="hover:text-emerald-900 hover:underline underline-offset-4 transition-colors">
          Products
        </Link>
      </nav>
    </header>
  );
}
