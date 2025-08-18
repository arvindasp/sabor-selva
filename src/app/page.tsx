import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide">Sabor Selva</a>
          <nav className="hidden sm:flex gap-6 text-sm text-neutral-300">
            <a href="#story" className="hover:text-white">Our Story</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#sustainability" className="hover:text-white">Sustainability</a>
            <a href="#contact" className="hover:text-white">Stay Updated</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="Bolivian rainforest canopy" fill className="object-cover opacity-40" priority />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Chocolate & Coffee that Protect the Bolivian Rainforest
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-300">
            Premium, wild-grown flavors. Fair wages from farm to bar. Every bag and bar helps keep the forest standing.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#products" className="rounded-2xl px-6 py-3 bg-emerald-600 hover:bg-emerald-500 transition">
              See Products
            </a>
            <a href="#contact" className="rounded-2xl px-6 py-3 border border-neutral-700 hover:border-neutral-500 transition">
              Stay Updated
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Our Story</h2>
            <p className="mt-5 text-neutral-300">
              Sabor Selva partners with Bolivian communities to source wild-grown cacao and coffee.
              We pay fair wages and support forest-friendly harvesting that protects biodiversity and
              combats deforestation. The result is extraordinary flavor with a measurable impact.
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/story.jpg" alt="Harvest in the Bolivian rainforest" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Products</h2>
        <p className="mt-3 text-neutral-300">Showcase only for now—no webshop yet.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Chocolate 70% – Wild Cacao", img: "/chocolate-70.jpg", notes: "Dark, floral, rainforest terroir." },
            { title: "Chocolate 85% – Intense", img: "/chocolate-85.jpg", notes: "Bold cocoa, minimal sugar." },
            { title: "Chocolate w/ Amazonian Nuts", img: "/chocolate-nuts.jpg", notes: "Crunchy, savory-sweet balance." },
            { title: "Ground Coffee – Medium Roast", img: "/coffee-ground.jpg", notes: "Balanced, honeyed acidity." },
            { title: "Whole Bean – Forest Blend", img: "/coffee-beans.jpg", notes: "Wild aromatics, clean finish." },
          ].map((p) => (
            <article key={p.title} className="rounded-2xl border border-neutral-800 overflow-hidden hover:border-neutral-600 transition">
              <div className="relative aspect-square">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{p.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sustainability & Fair Wages */}
      <section id="sustainability" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Sustainability & Fair Wages</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="font-medium">Forest-First Sourcing</h3>
            <p className="mt-2 text-neutral-300">
              We prioritize wild-grown cacao and coffee and pay premiums that reward conservation
              and high quality—keeping trees standing and livelihoods strong.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="font-medium">Fair, Transparent Pay</h3>
            <p className="mt-2 text-neutral-300">
              Long-term relationships and traceability. We’ll publish our price multipliers vs. commodity
              rates as we grow, and co-invest in local processing where possible.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section id="contact" className="mx-auto max-w-2xl px-5 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Stay Updated</h2>
        <p className="mt-2 text-neutral-300">
          Join our list and we’ll share launch updates and impact reports from the rainforest.
        </p>

        {/* Quick zero-backend option: Google Form embed */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-800">
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            height="420"
            className="w-full"
          >
            Loading…
          </iframe>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-400">
          © {new Date().getFullYear()} Sabor Selva. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
