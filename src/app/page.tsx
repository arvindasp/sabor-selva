import React from "react";

function PlaceholderTile({
  label,
  aspect = "aspect-[4/3]",
  rounded = "rounded-[1.25rem]",
}: {
  label: string;
  aspect?: string;
  rounded?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden ring-1 ring-stone-200",
        "bg-gradient-to-br from-emerald-100 to-emerald-200/60",
        "grid place-items-center",
        aspect,
        rounded,
      ].join(" ")}
    >
      <div className="text-stone-700 text-xs sm:text-sm text-center px-4">
        <strong>Image placeholder</strong>
        <br />
        Add <code>{label}</code> to <code>/public</code>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-base font-bold tracking-wide">Sabor Selva</a>
          <nav className="hidden md:flex gap-8 text-sm text-stone-700">
            <a href="#about" className="hover:text-emerald-700">About Us</a>
            <a href="#mission" className="hover:text-emerald-700">Our Mission</a>
            <a href="#products" className="hover:text-emerald-700">Products</a>
          </nav>
        </div>
      </header>

      {/* Brand Name */}
      <section className="pt-12 pb-2 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-[0.25em]">
          SABOR&nbsp;SELVA
        </h1>
      </section>

      {/* Large Rainforest Image (placeholder for now) */}
      <section className="mx-auto max-w-6xl px-6">
        <PlaceholderTile
          label="rainforest-hero.jpg"
          aspect="aspect-[21/9]"
          rounded="rounded-[2rem]"
        />
      </section>

      {/* Slogan + Short Company Text */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-16">
        <p className="uppercase text-xs tracking-[0.35em] text-emerald-700">Salva la Selva</p>
        <div className="mt-4 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <p className="leading-relaxed text-lg">
            Sabor Selva partners with Bolivian communities to source wild-grown cacao and coffee.
            We pay fair wages and support forest-first harvesting that protects biodiversity and
            combats deforestation—so every bar and bag keeps the rainforest standing.
          </p>
        </div>
      </section>

      {/* Mission (three elegant points) */}
      <section id="mission" className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Wild-Grown & Traceable",
              text:
                "Forest-first sourcing from native cacao and coffee—carefully harvested with the ecosystem in mind.",
            },
            {
              title: "Fair, Transparent Wages",
              text:
                "Long-term relationships and price premiums that reward quality and conservation.",
            },
            {
              title: "Impact You Can Taste",
              text:
                "Distinct terroir, clean roasting, and minimal processing for exceptional flavor and integrity.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-[1.25rem] border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-stone-700 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product / Image Grid (placeholders for now) */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-wide">Products & Gallery</h2>
            <p className="mt-1 text-stone-700">Showcase only for now — shop coming later.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "prod-choc-70.jpg",
            "prod-choc-85.jpg",
            "prod-choc-nuts.jpg",
            "prod-coffee-ground.jpg",
            "prod-coffee-beans.jpg",
            "lifestyle-forest.jpg",
          ].map((name, idx) => (
            <figure
              key={name}
              className={[
                "relative overflow-hidden rounded-[1.25rem] ring-1 ring-stone-200",
                idx === 0 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <PlaceholderTile label={name} />
              <figcaption className="absolute inset-x-0 bottom-0 text-center text-xs sm:text-sm text-stone-600 py-2">
                {name.replace(".jpg", "").replace(/-/g, " ")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-700">
          <div>© {new Date().getFullYear()} Sabor Selva. All rights reserved.</div>
          <nav className="flex gap-6">
            <a href="#about" className="hover:text-emerald-700">About Us</a>
            <a href="#mission" className="hover:text-emerald-700">Our Mission</a>
            <a href="#products" className="hover:text-emerald-700">Products</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
