import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import HowWeWorkGallery, { type GalleryItem } from "@/components/HowWeWorkGallery";

export const metadata = {
  title: "Our Mission — Sabor Selva",
  description:
    "Keeping forests standing through wild-grown cacao and coffee, clear value chains via our partner in Bolivia, and long-term relationships.",
} satisfies Metadata;

const playfair = Playfair_Display({ subsets: ["latin"] });

// Local image placeholder (same style as About)
function Placeholder({
  label,
  height = "h-[300px] sm:h-[380px] md:h-[460px]",
  className = "",
}: { label: string; height?: string; className?: string }) {
  return (
    <div
      className={[
        "relative ring-line overflow-hidden shadow-soft rounded-xl-hero",
        "bg-gradient-to-br from-emerald-100 to-emerald-200/60 grid place-items-center",
        height,
        className,
      ].join(" ")}
      aria-label={`${label} placeholder`}
    >
      <div className="text-stone-700 text-xs sm:text-sm text-center px-4">
        <strong>Image placeholder</strong>
        <br />
        Add <code>/{label}</code> to <code>/public</code>
      </div>
    </div>
  );
}

export default function MissionPage() {
  const steps: GalleryItem[] = [
    { src: "/how-1.jpg", alt: "How we work image 1", text: "Selective wild harvest preserves canopy and habitat." },
    { src: "/how-2.jpg", alt: "How we work image 2", text: "Careful picking and sorting at collection points." },
    { src: "/how-3.jpg", alt: "How we work image 3", text: "Post-harvest handling supports clean, traceable flavor." },
    { src: "/how-4.jpg", alt: "How we work image 4", text: "Community hubs connect value, logistics, and services." },
    { src: "/how-5.jpg", alt: "How we work image 5", text: "Quality premiums reward craft and careful work." },
    { src: "/how-6.jpg", alt: "How we work image 6", text: "Transport links producers to markets with transparency." },
  ];

  return (
    <main>
      {/* 1) Our Mission — People • Forest • Fair Value */}
      <section className="container section">
        <div className="card-soft max-w-4xl mx-auto p-8 sm:p-10 text-center">
          <div style={{ height: 1, backgroundColor: "rgba(191,160,106,0.3)" }} />
          <div className="mt-6">
            <h1 className={`${playfair.className} tracking-[0.02em]`}>Our Mission</h1>
            <p className="muted uppercase tracking-[0.22em] mt-2 text-xs">Salva la Selva</p>
            <p className="mt-4 max-w-[60ch] mx-auto text-stone-700 text-balance">
              Food choices shape nature. Roughly 30% of global CO₂ and 50–80% of nature loss come from how the world eats. Our mission is to pick supply chains that co-exist with nature, not replace it.
            </p>
            <p className="mt-2 max-w-[60ch] mx-auto text-stone-700">Inspired by partners and resources like foodbynature.org.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mt-8">
          <div className="card p-6 text-left">
            <h3 className={`${playfair.className} tracking-[0.012em]`}>People</h3>
            <p className="mt-2 text-stone-700 max-w-[60ch]">Dignity, safety, and options in-place: access to education, basic health, and fair income from the forest.</p>
            <p className="mt-2 text-sm muted">Echoing principles highlighted on foodbynature.org</p>
          </div>
          <div className="card p-6 text-left">
            <h3 className={`${playfair.className} tracking-[0.012em]`}>Forest</h3>
            <p className="mt-2 text-stone-700 max-w-[60ch]">Keep forests standing. Choose foods made in coexistence with living ecosystems instead of clearing land.</p>
            <p className="mt-2 text-sm muted">Zero-deforestation sourcing stance</p>
          </div>
          <div className="card p-6 text-left">
            <h3 className={`${playfair.className} tracking-[0.012em]`}>Fair Value</h3>
            <p className="mt-2 text-stone-700 max-w-[60ch]">Select lower-CO₂ options and value chains aligned with human dignity and nature-positive outcomes.</p>
            <p className="mt-2 text-sm muted">Clear pricing and program premiums</p>
          </div>
        </div>
      </section>

      {/* Keep existing HOW WE WORK section unchanged */}
      <section className="container section">
        <h2 className={`${playfair.className} tracking-[0.012em] text-stone-900`}>How We Work</h2>
        <div className="mt-6">
          <HowWeWorkGallery items={steps} />
        </div>
      </section>

      {/* 2) Why Wild Chocolate — Forest-First vs Plantation */}
      <section className="container section">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Placeholder label="wild-cacao.jpg" height="h-[320px] sm:h-[380px] md:h-[440px]" className="rounded-xl-hero ring-line shadow-soft" />
          <div className="max-w-[60ch]">
            <h2 className={`${playfair.className} tracking-[0.012em]`}>Why Wild Chocolate</h2>
            <ul className="mt-3 space-y-3 text-stone-800">
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-1 text-emerald-700">{/* leaf */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20c8 0 12-6 12-12V4H8C2 4 2 10 2 12s2 8 8 8Z"/></svg>
                </span>
                <p>Forest intact: cacao gathered from original wild trees in Bolivian rainforest, not plantations.</p>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-1 text-emerald-700">{/* shield */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l7 4v6c0 5-3.5 7.5-7 8-3.5-.5-7-3-7-8V7l7-4Z"/></svg>
                </span>
                <p>Lower impact: avoids slash &amp; burn associated with some plantations; gives value to a living forest.</p>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-1 text-emerald-700">{/* globe */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>
                </span>
                <p>Lower footprint: partners cite ~50–75% lower CO₂ vs. plantation dark chocolate (&ldquo;source: partner&rdquo; placeholder). Approx. 1.21 kg CO₂ per kg of wild dark chocolate noted.</p>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">Forest-grown</span>
              <span className="chip">No pesticides/irrigation claimed</span>
              <span className="chip">CO₂ −50–75% (source)</span>
              <span className="chip">Bolivia origin</span>
            </div>
            <p className="mt-3 text-xs muted">Figures shown reflect partner sources; we will publish verified numbers as available.</p>
            <p className="mt-2 text-xs muted">Community-led fruit collection in forests; context differs from plantation labor settings, and Bolivia has strong child-labor legislation.</p>
          </div>
        </div>
      </section>

      {/* 3) Community & Partner Commitments — Saltus & Local Outcomes */}
      <section className="container section">
        <div className="card p-7">
          <h2 className={`${playfair.className} tracking-[0.012em]`}>Our Partner in Bolivia</h2>
          <p className="mt-2 text-stone-700 max-w-[60ch]">
            Purchases go through Saltus in Bolivia. Their programs underpin farm-gate and quality premiums. We will publish what we pay and update as verified.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.en.saltuschocolate.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Saltus</a>
            <Link href="/about" className="btn">Read Our Values</Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mt-6">
          <div className="card overflow-hidden">
            <Placeholder label="livelihoods.jpg" height="h-[200px] sm:h-[220px] md:h-[240px]" />
            <div className="p-5">
              <h3 className={`${playfair.className} tracking-[0.012em]`}>Dignified Livelihoods</h3>
              <p className="mt-1 text-stone-700">Income from wild cacao supports staying in place and living with dignity.</p>
            </div>
          </div>
          <div className="card overflow-hidden">
            <Placeholder label="education.jpg" height="h-[200px] sm:h-[220px] md:h-[240px]" />
            <div className="p-5">
              <h3 className={`${playfair.className} tracking-[0.012em]`}>Education Access</h3>
              <p className="mt-1 text-stone-700">Schools in villages, even at small scale (e.g., ~20 families).</p>
            </div>
          </div>
          <div className="card overflow-hidden">
            <Placeholder label="infrastructure.jpg" height="h-[200px] sm:h-[220px] md:h-[240px]" />
            <div className="p-5">
              <h3 className={`${playfair.className} tracking-[0.012em]`}>Modern Infrastructure</h3>
              <p className="mt-1 text-stone-700">Solar power and internet are emerging in and around forest communities.</p>
            </div>
          </div>
        </div>

        <div className="card-soft p-6 mt-6 max-w-3xl">
          <h3 className={`${playfair.className} tracking-[0.012em]`}>Value Chain (Mini)</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="py-2 pr-4">Component</th>
                  <th className="py-2 pr-4">Definition</th>
                  <th className="py-2 pr-0">Placeholder</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: "Farm-Gate Base", d: "Partner program price (USD/kg)", v: "[0.00]" },
                  { c: "Quality Premium", d: "Fermentation, moisture, sorting", v: "[0.00]" },
                  { c: "Services & Logistics", d: "Local processing and transport", v: "[0.00]" },
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 pr-4 font-medium">{row.c}</td>
                    <td className="py-2 pr-4 text-stone-700">{row.d}</td>
                    <td className="py-2 pr-0">{row.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs muted">We will publish a detailed disclosure and update figures as they are verified.</p>
        </div>
      </section>
    </main>
  );
}
