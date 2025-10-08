import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Card, SoftCard } from "@/components/Card";
import CardImage from "@/components/CardImage";
import { NEAR_SQUARE_LG } from "@/lib/ui";

export const metadata = {
  title: "Our Mission — Sabor Selva",
  description:
    "Keeping forests standing through wild-grown cacao and coffee, clear value chains via our partner in Bolivia, and long-term relationships.",
} satisfies Metadata;

// Using global serif (Times) per brand

export default function MissionPage() {
  return (
    <main>
      {/* Hero (full-bleed like home/about) */}
      <section
        className="relative left-1/2 -translate-x-1/2 w-screen h-[60vh] min-h-[420px] flex items-center justify-center text-center overflow-hidden text-white"
      >
        <Image
          src="/mission-hero.jpg"
          alt="Our Mission hero image"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 z-20 bg-black/30" />
        <div className="relative z-30 px-4 text-white">
          <SectionHeading as="h1" className="drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] text-white hero-title">Our Mission</SectionHeading>
        </div>
      </section>

      {/* Slogan + lead in soft card */}
      <section className="container section pt-8">
        <SoftCard className="max-w-4xl mx-auto p-8 sm:p-10 text-center">
          <div style={{ height: 1, backgroundColor: "rgba(191,160,106,0.3)" }} />
          <div className="mt-6">
            <p className="muted uppercase tracking-[0.22em] text-sm sm:text-base">Salva la Selva</p>
            <p className="mt-4 max-w-[60ch] mx-auto text-stone-800 text-lg sm:text-xl leading-relaxed text-balance">
              Food choices shape nature. Roughly 30% of global CO₂ and 50–80% of nature loss come from how the world eats. Our mission is to pick supply chains that co-exist with nature, not replace it.
            </p>
            <p className="mt-3 max-w-[60ch] mx-auto text-stone-700">Inspired by partners and resources like foodbynature.org.</p>
          </div>
        </SoftCard>

        {/* 2) People • Forest • Fair Value — premium cards with images */}
        <div className="grid gap-5 md:grid-cols-3 mt-10">
          {[
            {
              title: "People",
              body:
                "Dignity first. Wild harvests create income that allows families to remain in their communities, strengthen local services, and plan for the future. We work through our Bolivian partner and support value flowing to producers through clear, quality-based programs.",
              note: "Echoing principles highlighted on foodbynature.org",
              img: "/our-mission-people.jpg",
            },
            {
              title: "Forest",
              body:
                "Keep the forest standing. By sourcing from native trees within mixed, living ecosystems, we help maintain habitat, protect biodiversity, and reduce the pressure to clear land. Forest-first is not a slogan—it is the standard we choose for every purchase.",
              note: "Zero-deforestation sourcing stance",
              img: "/our-mission-forest.jpg",
            },
            {
              title: "Fair Value",
              body:
                "Quality deserves recognition. We align with transparent pricing through our partner, prioritize long-term relationships, and share information about our costs and commitments as we grow. Luxury here means doing things properly—measured, respectful, and open about the value behind each product.",
              note: "Clear pricing and program premiums",
              img: "/our-mission-fairvalue.jpg",
            },
          ].map((card, i) => (
            <Card key={i} className="overflow-hidden flex flex-col">
              <div className="relative group rounded-none overflow-hidden">
                <CardImage
                  src={card.img}
                  alt={`${card.title} image`}
                  heightClass="h-[240px] sm:h-[260px] md:h-[300px]"
                  quality={100}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="rounded-none"
                />
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
        <div className="mt-10">
          <CardImage
            src="/why-wild-chocolate.jpg"
            alt="Why Wild Chocolate image"
            heightClass={NEAR_SQUARE_LG}
            quality={100}
            sizes="(min-width: 1280px) 960px, (min-width: 1024px) 820px, 100vw"
          />
        </div>
      </section>

      {/* 3) Our Partner in Bolivia — redesigned for richer storytelling */}
      <section className="container section">
        <div className="grid gap-8 md:grid-cols-5 items-start">
          {/* Text column */}
          <SoftCard className="p-6 sm:p-8 md:col-span-3">
            <SectionHeading as="h2">Our Partner in Bolivia</SectionHeading>
            <div className="mt-3 max-w-[62ch] text-stone-800 space-y-4">
              <p>
                We purchase through Saltus in Bolivia—a team focused on
                precision fermentation, careful roasting, and value chains that
                reward producers for quality and stewardship. Their programs
                formalize premiums and keep more value close to the forest.
              </p>
              <p>
                As we grow, we will publish what we pay and update figures as
                they are verified. Transparency, dignity, and long-term
                relationships guide every decision.
              </p>
              <ul className="list-disc pl-5 marker:text-emerald-700 space-y-2">
                <li><strong>Producer Payment Program:</strong> farm-gate plus quality-based premiums.</li>
                <li><strong>Traceability &amp; Quality:</strong> lot separation, clean fermentation, careful drying.</li>
                <li><strong>Forest-First:</strong> wild harvests and agroforestry sourcing to keep forests standing.</li>
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.en.saltuschocolate.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Saltus</a>
              <Link href="/about" className="btn">Read Our Values</Link>
            </div>
          </SoftCard>

          {/* Visual/Highlights column */}
          <div className="md:col-span-2">
            <Card className="p-6">
              <SectionHeading as="h3">Program Highlights</SectionHeading>
              <ul className="mt-2 text-stone-700 text-sm space-y-2">
                <li>Quality-based premiums paid to producers</li>
                <li>Farm-gate transparency and clear documentation</li>
                <li>Long-term contracts and relationship building</li>
                <li>Local processing that supports jobs</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
