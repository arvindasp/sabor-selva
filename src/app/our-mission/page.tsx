import type { Metadata } from "next";
import Link from "next/link";
import HowWeWorkGallery, { type GalleryItem } from "@/components/HowWeWorkGallery";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import CardImage from "@/components/CardImage";
import { NEAR_SQUARE_LG } from "@/lib/ui";

export const metadata = {
  title: "Our Mission — Sabor Selva",
  description:
    "Keeping forests standing through wild-grown cacao and coffee, clear value chains via our partner in Bolivia, and long-term relationships.",
} satisfies Metadata;

// Using global serif (Times) per brand

export default function MissionPage() {
  const steps: GalleryItem[] = [
    {
      title: "LEGACY",
      body:
        "Wild cacao thrives under a 10-meter jungle canopy. Preserving this ecology is the starting point of our craft.",
      src: "/how-1.jpg",
      alt: "Jungle canopy with wild cacao trees in their natural habitat",
    },
    {
      title: "HARVEST",
      body:
        "Forest families gently loosen ripe cacao pods with long poles—knowledge passed down through generations.",
      src: "/how-2.jpg",
      alt: "Hands using long poles to reach ripe cacao pods",
    },
    {
      title: "FERMENTATION",
      body:
        "Beans are removed and naturally fermented in cloth within wicker baskets to release the fruit pulp and develop aroma.",
      src: "/how-3.jpg",
      alt: "Cacao beans fermenting in cloth and wicker baskets",
    },
    {
      title: "DRYING",
      body:
        "Post-fermentation, beans dry on tarps or raised tables under the sun—stabilizing flavor and preserving quality.",
      src: "/how-4.jpg",
      alt: "Cacao beans drying on tarpaulins or raised tables in sunlight",
    },
    {
      title: "COMMUNITY",
      body:
        "Every bar sustains dignified livelihoods, helping families remain in their forest communities.",
      src: "/how-5.jpg",
      alt: "Village life with people in forest communities",
    },
    {
      title: "FUTURE",
      body:
        "Our purchases support solar power and internet access—so the next generation can stay, study, and steward the forest.",
      src: "/how-6.jpg",
      alt: "Solar panels and learning in a village setting",
    },
  ];

  return (
    <main>
      {/* 1) Hero — title outside; slogan + lead inside card */}
      <section className="container section">
        <SectionHeading as="h1" centered>Our Mission</SectionHeading>
        <div className="card-soft max-w-4xl mx-auto p-8 sm:p-10 mt-4 text-center">
          <div style={{ height: 1, backgroundColor: "rgba(191,160,106,0.3)" }} />
          <div className="mt-6">
            <p className="muted uppercase tracking-[0.22em] text-sm sm:text-base">Salva la Selva</p>
            <p className="mt-4 max-w-[60ch] mx-auto text-stone-800 text-lg sm:text-xl leading-relaxed text-balance">
              Food choices shape nature. Roughly 30% of global CO₂ and 50–80% of nature loss come from how the world eats. Our mission is to pick supply chains that co-exist with nature, not replace it.
            </p>
            <p className="mt-3 max-w-[60ch] mx-auto text-stone-700">Inspired by partners and resources like foodbynature.org.</p>
          </div>
        </div>

        {/* 2) People • Forest • Fair Value — premium cards with images */}
        <div className="grid gap-5 md:grid-cols-3 mt-10">
          {[
            {
              title: "People",
              body:
                "Dignity first. Wild harvests create income that allows families to remain in their communities, strengthen local services, and plan for the future. We work through our Bolivian partner and support value flowing to producers through clear, quality-based programs.",
              note: "Echoing principles highlighted on foodbynature.org",
              ph: "people.jpg",
            },
            {
              title: "Forest",
              body:
                "Keep the forest standing. By sourcing from native trees within mixed, living ecosystems, we help maintain habitat, protect biodiversity, and reduce the pressure to clear land. Forest-first is not a slogan—it is the standard we choose for every purchase.",
              note: "Zero-deforestation sourcing stance",
              ph: "forest.jpg",
            },
            {
              title: "Fair Value",
              body:
                "Quality deserves recognition. We align with transparent pricing through our partner, prioritize long-term relationships, and share information about our costs and commitments as we grow. Luxury here means doing things properly—measured, respectful, and open about the value behind each product.",
              note: "Clear pricing and program premiums",
              ph: "value.jpg",
            },
          ].map((card, i) => (
            <Card key={i} className="overflow-hidden flex flex-col">
              <div className="relative group rounded-none overflow-hidden">
                <CardImage alt={`${card.title} image placeholder`} heightClass="h-[220px] sm:h-[240px] md:h-[260px]" className="rounded-none" />
              </div>
              <div className="p-6 flex-1">
                <SectionHeading as="h3">{card.title}</SectionHeading>
                <p className="mt-2 text-stone-700 max-w-[60ch]">{card.body}</p>
                <p className="mt-2 text-sm muted">{card.note}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3) How We Work — lightbox modal via gallery component */}
      <section className="container section">
        <SectionHeading as="h2" className="text-stone-900">How We Work</SectionHeading>
        <div className="mt-6">
          <HowWeWorkGallery items={steps} />
        </div>
      </section>

      {/* 4) Why Wild Chocolate — text first, image below */}
      <section className="container section">
        <div className="max-w-[65ch]">
          <SectionHeading as="h2">Why Wild Chocolate</SectionHeading>
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
        <div className="mt-8">
          <CardImage alt="Wild cacao placeholder image" heightClass={NEAR_SQUARE_LG} />
        </div>
      </section>

      {/* 3) Community & Partner Commitments — Saltus & Local Outcomes */}
      <section className="container section">
        <Card className="p-6 sm:p-8">
          <SectionHeading as="h2">Our Partner in Bolivia</SectionHeading>
          <p className="mt-2 text-stone-700 max-w-[60ch]">
            Purchases go through Saltus in Bolivia. Their programs underpin farm-gate and quality premiums. We will publish what we pay and update as verified.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://www.en.saltuschocolate.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Saltus</a>
            <Link href="/about" className="btn">Read Our Values</Link>
          </div>
        </Card>

        <div className="grid gap-5 md:grid-cols-3 mt-6">
          <Card className="overflow-hidden">
            <CardImage alt="Dignified livelihoods placeholder image" heightClass="h-[200px] sm:h-[220px] md:h-[240px]" />
            <div className="p-6">
              <SectionHeading as="h3">Dignified Livelihoods</SectionHeading>
              <p className="mt-1 text-stone-700">Income from wild cacao supports staying in place and living with dignity.</p>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <CardImage alt="Education access placeholder image" heightClass="h-[200px] sm:h-[220px] md:h-[240px]" />
            <div className="p-6">
              <SectionHeading as="h3">Education Access</SectionHeading>
              <p className="mt-1 text-stone-700">Schools in villages, even at small scale (e.g., ~20 families).</p>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <CardImage alt="Modern infrastructure placeholder image" heightClass="h-[200px] sm:h-[220px] md:h-[240px]" />
            <div className="p-6">
              <SectionHeading as="h3">Modern Infrastructure</SectionHeading>
              <p className="mt-1 text-stone-700">Solar power and internet are emerging in and around forest communities.</p>
            </div>
          </Card>
        </div>

        {/* Value Chain mini intentionally removed per brief */}
      </section>
    </main>
  );
}
