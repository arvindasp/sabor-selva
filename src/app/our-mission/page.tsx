import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission – Sabor Selva",
  description:
    "Keeping forests standing through wild-grown cacao & coffee, fair value in the supply chain, and long-term partnerships in Bolivia.",
};

/* ---------- QUICK SIZE TWEAKS ----------
   Edit these class strings to resize blocks later.
----------------------------------------- */
const HERO_HEIGHT = "h-[340px] sm:h-[400px] md:h-[500px]";
const KPI_HEIGHT = "h-[92px]";
const METHOD_IMAGE_HEIGHT = "h-[200px] sm:h-[220px] md:h-[240px]";
const CONSERVE_IMAGE_HEIGHT = "h-[240px] sm:h-[250px] md:h-[270px]";

/** Elegant placeholder so the page looks polished before images are added. */
function Placeholder({
  label,
  height,
  className = "",
  rounded = "rounded-xl-hero",
}: {
  label: string;
  height: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={[
        "relative ring-line overflow-hidden shadow-soft bg-[var(--cream)] text-stone-700 grid place-items-center",
        rounded,
        height,
        className,
      ].join(" ")}
      aria-label={`${label} placeholder`}
    >
           <div className="text-xs sm:text-sm text-center px-4">
        <strong>Image placeholder</strong>
        <br />
        Add <code>/{label}</code> to <code>/public</code>
      </div>
    </div>
  );
}

export default function MissionPage() {
  return (
    <main>
      {/* HERO — Banner image with short overlay */}
      <section className="container section pt-8">
        <div className="relative w-full ring-line rounded-xl-hero overflow-hidden shadow-soft">
          {/* Swap Placeholder for real image when you add /mission-hero.jpg */}
          {/* Real image:
                    <div className={["relative w-full", HERO_HEIGHT, "max-h-screen"].join(" ")}>
            <Image src="/mission-hero.jpg" alt="Forest-first harvesting in Bolivia" fill className="object-cover" priority />
          </div>
          */}
          <Placeholder label="mission-hero.jpg" height={HERO_HEIGHT} />

          {/* Overlay copy */}
          <div className="absolute inset-0 grid place-items-center text-center px-6">
            <div className="max-w-2xl">
              <h1 className="text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">Our Mission</h1>
              <p className="mt-2 text-white/95 text-balance">
                Keeping forests standing through wild-grown cacao &amp; coffee, fair value in the supply chain, and
                long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs — 3 metric cards (fill the numbers later) */}
      <section className="container section pt-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Above Commodity Price", value: "[x.xx×]", note: "Target multiplier paid at origin*" },
            { label: "Hectares Conserved", value: "[000]", note: "Areas tied to wild-sourcing practices*" },
            { label: "Families Supported", value: "[000]", note: "Through partner relationships*" },
          ].map((kpi) => (
            <div key={kpi.label} className="card p-5 flex items-center justify-between">
              <div>
                <div className="text-sm muted">{kpi.label}</div>
                <div className="text-2xl font-bold mt-1">{kpi.value}</div>
              </div>
              <div className={["chip", KPI_HEIGHT].join(" ")} style={{ alignSelf: "stretch" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
                placeholder
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm muted">
          * You can replace these placeholders with verified supplier data and your purchase records.
        </p>
      </section>

      {/* HOW IT WORKS — 4 step cards */}
      <section className="container section">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Wild Harvest",
              text: "Selective harvest from native cacao & coffee in and around forests.",
              img: "how-1.jpg",
            },
            {
              title: "Quality & Post-Harvest",
              text: "Fermentation, drying, and sorting for clean flavor & traceability.",
              img: "how-2.jpg",
            },
            {
              title: "Value & Logistics",
              text: "Fair value at origin with logistics & export handled via our partner.",
              img: "how-3.jpg",
            },
            {
              title: "Craft & Transparency",
              text: "Careful roasting/chocolate making; publish impact & pricing notes.",
              img: "how-4.jpg",
            },
          ].map((step) => (
            <article key={step.title} className="card overflow-hidden">
              {/* Replace with real images if you have them */}
              <Placeholder label={step.img} height={METHOD_IMAGE_HEIGHT} rounded="" />
              {/* Real image block:
                     <div className={["relative w-full", METHOD_IMAGE_HEIGHT, "max-h-screen"].join(" ")}>
                <Image src={`/${step.img}`} alt={step.title} fill className="object-cover" />
              </div>
              */}
              <div className="card-content">
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VALUE CHAIN & FAIRNESS — reflect that you buy via Saltus */}
      <section className="container section">
        <h2 className="text-2xl font-bold">Fair Value in the Supply Chain</h2>
        <p className="mt-2 text-stone-700 max-w-3xl">
          We purchase through our Bolivian partner and align our pricing with their farmer payment programs and
          post-harvest services. Below is a simple template you can complete with verified figures.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-3 pr-4">Component</th>
                <th className="py-3 pr-4">Definition</th>
                <th className="py-3 pr-0">Placeholder</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  c: "Commodity baseline",
                  d: "Market reference price (USD/kg) at time of purchase",
                  v: "[0.00]",
                },
                {
                  c: "Farm-gate base (partner)",
                  d: "Base price paid to producers by partner (USD/kg)",
                  v: "[0.00]",
                },
                {
                  c: "Quality premium",
                  d: "Premium for fermentation, moisture, sorting, etc.",
                  v: "[0.00]",
                },
                {
                  c: "Services & logistics",
                  d: "Local processing, storage, transport to export",
                  v: "[0.00]",
                },
                {
                  c: "Total at origin",
                  d: "Sum of partner payments & services",
                  v: "[0.00]",
                },
                {
                  c: "Our purchase price",
                  d: "Price we pay to partner (incoterm notes)",
                  v: "[0.00]",
                },
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

        <p className="mt-3 text-sm muted">
          Note: Replace placeholders with documented figures from your partner; include date ranges and currency.
        </p>
      </section>

      {/* CONSERVATION IMPACT — mix of A (hectares) & B (practices) */}
      <section className="container section">
        <h2 className="text-2xl font-bold">Conservation Impact</h2>
        <div className="mt-2 grid gap-6 md:grid-cols-2 items-start">
          <div>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li>
                <strong>Hectares conserved:</strong> [000] tied to wild-grown sourcing and forest-friendly practices.
              </li>
              <li>
                <strong>Biodiversity practices:</strong> Wild harvest, selective pruning, protecting shade canopy, low-impact transport.
              </li>
              <li>
                <strong>Zero-deforestation policy:</strong> [Describe your stance & verification approach].
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Swap to real images when ready */}
            <Placeholder label="conservation-1.jpg" height={CONSERVE_IMAGE_HEIGHT} />
            <Placeholder label="conservation-2.jpg" height={CONSERVE_IMAGE_HEIGHT} />
            {/* Or real images:
            <div className={["relative w-full", CONSERVE_IMAGE_HEIGHT, "max-h-screen"].join(" ")}>
              <Image src="/conservation-1.jpg" alt="Forest landscape" fill className="object-cover rounded-xl-hero ring-line shadow-soft" />
            </div>
             <div className={["relative w-full", CONSERVE_IMAGE_HEIGHT, "max-h-screen"].join(" ")}>
              <Image src="/conservation-2.jpg" alt="Biodiversity detail" fill className="object-cover rounded-xl-hero ring-line shadow-soft" />
            </div>
            */}
          </div>
        </div>
      </section>

      {/* PARTNER / COMMUNITY — Saltus highlight */}
      <section className="container section">
        <div className="card p-6">
          <h2 className="text-2xl font-bold">Our Partner in Bolivia</h2>
          <p className="mt-2 text-stone-700 max-w-3xl">
            We source through <strong>Saltus</strong>, a Bolivian company focused on quality and forest-friendly value
            chains. We’ll share their public program details and data points here as we publish our reports.
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
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold">Explore our products</h3>
            <p className="text-stone-700">Discover bars and coffees shaped by forest-first sourcing.</p>
          </div>
          <Link href="/products" className="btn btn-primary">
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
}
