import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      {/* HERO */}
      <section
        className="relative left-1/2 -translate-x-1/2 w-screen h-[70vh] min-h-[460px] flex items-center justify-center text-center overflow-hidden"
      >
        <Image
          src="/mission-hero.jpg"
          alt="Our Mission hero image"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 bg-black/30" />
        <div className="relative z-30 px-4">
          <h1
            className={`${playfair.className} tracking-wide-hero drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] text-5xl md:text-7xl`}
            style={{ color: "#ffffff" }}
          >
            Our Mission
          </h1>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="container section">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="card p-5 sm:p-6 text-center">
            <h3 className="font-serif tracking-[0.012em]">Hectares Linked to Sourcing</h3>
            <div className="mt-1 text-2xl font-bold">TBD hectares</div>
          </div>
          <div className="card p-5 sm:p-6 text-center">
            <h3 className="font-serif tracking-[0.012em]">Families Supported</h3>
            <div className="mt-1 text-2xl font-bold">TBD households</div>
          </div>
          <div className="card p-5 sm:p-6 text-center">
            <h3 className="font-serif tracking-[0.012em]">Price vs Commodity</h3>
            <div className="mt-1 text-2xl font-bold">TBD × baseline</div>
          </div>
        </div>
        <p className="mt-3 text-sm muted">Figures shown are placeholders and will be updated.</p>
      </section>

      {/* HOW WE WORK (image gallery with lightbox, 6 items) */}
      <section className="container section">
        <h2 className="font-serif tracking-[0.012em] text-stone-900">How We Work</h2>
        <div className="mt-6">
          <HowWeWorkGallery items={steps} />
        </div>
      </section>

      {/* VALUE CHAIN TRANSPARENCY */}
      <section className="container section">
        <h2 className="font-serif tracking-[0.012em] text-stone-900">Value Chain Transparency</h2>
        <p className="mt-2 text-stone-700 max-w-[60ch]">
          We align pricing with producer payment programs and post-harvest services via our partner in Bolivia. The table below shows how we structure value.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-3 pr-4">Component</th>
                <th className="py-3 pr-4">Definition</th>
                <th className="py-3 pr-0">Placeholder Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { c: "Commodity Baseline", d: "Market reference price at time of purchase (USD/kg)", v: "[0.00]" },
                { c: "Farm-Gate Base (partner)", d: "Base price paid to producers by partner (USD/kg)", v: "[0.00]" },
                { c: "Quality Premium", d: "Premium for fermentation, moisture, sorting, etc.", v: "[0.00]" },
                { c: "Services & Logistics", d: "Local processing, storage, and transport to export", v: "[0.00]" },
                { c: "Total at Origin", d: "Sum of partner payments and services", v: "[0.00]" },
                { c: "Our Purchase Price", d: "Price we pay to partner (incoterm notes)", v: "[0.00]" },
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="py-3 pr-4 font-medium">{row.c}</td>
                  <td className="py-3 pr-4 text-stone-700">{row.d}</td>
                  <td className="py-3 pr-0">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm muted max-w-[60ch]">
          We buy via Saltus in Bolivia. Their producer payment program underpins farm-gate and quality premiums. We publish what we pay them and update these values as we verify.
        </p>
        <div className="mt-3">
          <a
            href="https://www.en.saltuschocolate.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit Saltus
          </a>
        </div>
      </section>

      {/* CONSERVATION & BIODIVERSITY */}
      <section className="container section">
        <h2 className="font-serif tracking-[0.012em] text-stone-900">Conservation &amp; Biodiversity</h2>
        <div className="mt-2 grid gap-6 md:grid-cols-2 items-start">
          <div>
            <p className="text-stone-800 max-w-[60ch]">
              Our stance centers on wild-grown ingredients and forest-friendly logistics. We prioritize biodiversity and traceability at each step.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">
              <li>Wild-grown and zero-deforestation stance.</li>
              <li>Habitat-friendly harvesting windows.</li>
              <li>Mixed-species mosaics &amp; biodiversity first.</li>
              <li>Traceable lots and careful transport.</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <Placeholder label="conservation-1.jpg" height="h-[220px] sm:h-[260px] md:h-[300px]" />
            <Placeholder label="conservation-2.jpg" height="h-[220px] sm:h-[260px] md:h-[300px]" />
          </div>
        </div>
      </section>

      {/* PARTNER HIGHLIGHT — Saltus */}
      <section className="container section">
        <div className="card p-6 sm:p-7">
          <h2 className="font-serif tracking-[0.012em] text-stone-900">Our Partner in Bolivia</h2>
          <p className="mt-2 text-stone-700 max-w-[60ch]">
            We work with <a href="https://www.en.saltuschocolate.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-amber-500/70 hover:decoration-amber-600">Saltus</a>, whose producer payment programs and quality services support clear, quality-driven value chains.
          </p>
        </div>
      </section>

      {/* CTA — Explore Products */}
      <section className="container section">
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif tracking-[0.012em]">Discover the flavors of the forest.</h3>
            <p className="text-stone-700 max-w-[60ch]">Explore limited lots and careful roasts shaped by biodiversity-first sourcing.</p>
          </div>
        <Link href="/#products" className="btn btn-primary">Explore Products</Link>
        </div>
      </section>
    </main>
  );
}
