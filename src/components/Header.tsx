import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Single-row header: brand left, links spread evenly across */}
        <div className="flex items-center gap-6 py-6 sm:py-8">
          <Link
            href="/"
            className="font-serif font-bold leading-none tracking-[0.08em] text-stone-900 whitespace-nowrap text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem]"
            aria-label="Sabor Selva home"
          >
            Sabor Selva
          </Link>

          {/* Evenly spread nav (stays on same row; scrolls on very small screens) */}
          <nav className="flex-1 flex items-center justify-evenly overflow-x-auto text-[0.98rem] sm:text-[1.05rem] lg:text-[1.15rem] tracking-wider">
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
      </div>
    </header>
  );
}
