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
              “Food choices shape nature.” Roughly 30% of global greenhouse emissions and up to 80% of biodiversity loss are linked to how we grow and consume food (FAO, 2023).
            </p>
            <p className="mt-3 max-w-[60ch] mx-auto text-stone-800 text-lg sm:text-xl leading-relaxed text-balance">
              Sabor Selva’s mission is to prove that taste and preservation can coexist — to build supply chains that work with nature, not against it.
            </p>
            <p className="mt-3 max-w-[60ch] mx-auto text-stone-700">
              Inspired by our Bolivian partners and organizations like Food by Nature, we stand for a future where production restores ecosystems instead of erasing them.
            </p>
          </div>
        </SoftCard>

        {/* 2) People • Forest • Fair Value — premium cards with images */}
        <div className="grid gap-5 md:grid-cols-3 mt-10">
          {[
            {
              title: "People",
              body:
                "Dignity first. Wild harvests create steady income that allows families to remain in the forest rather than migrate to cities. Each cacao or coffee harvest directly supports education, solar power, and clean-water projects in Amazonian communities. We align with ILO fair-labor principles and zero child-labor policy, working through Saltus’ transparent producer programs.",
              note: "“A living forest means a living wage.”",
              img: "/our-mission-people.jpg",
            },
            {
              title: "Forest",
              body:
                "Keep the forest standing. Every bar and bag begins inside existing rainforest ecosystems — where wild cacao grows naturally under tall canopy trees. By purchasing wild-grown cacao, we reduce deforestation pressure by up to 90% compared to plantation expansion (Food by Nature data). Each kilogram of wild chocolate emits about 1.2 kg CO₂, nearly 50–75% less than conventional dark chocolate.",
              note: "“Protecting biodiversity is not a side effect — it’s the recipe.”",
              img: "/our-mission-forest.jpg",
            },
            {
              title: "Fair Value",
              body:
                "Quality deserves recognition. Our Bolivian partner operates on a farm-gate plus quality-premium system, ensuring producers are paid above local market averages. Transparency means we know every lot, every fermentation batch, and every partner family involved. This clarity lets us reward skill over volume — redefining luxury as measured respect for both maker and land.",
              note: "“Luxury is not excess; it’s fairness done beautifully.”",
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
              <p>Forest intact: Cacao is gathered from original wild trees across the Bolivian Amazon — zero deforestation, zero irrigation.</p>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 text-emerald-700">{/* shield */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l7 4v6c0 5-3.5 7.5-7 8-3.5-.5-7-3-7-8V7l7-4Z"/></svg>
              </span>
              <p>Lower impact: Avoids slash-and-burn agriculture and supports biodiversity by giving value to the living forest.</p>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 text-emerald-700">{/* globe */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>
              </span>
              <p>Reduced footprint: Wild dark chocolate averages 1.2 kg CO₂ per kg, around 50–75% less than conventional plantation dark chocolate (partner estimates).</p>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 text-emerald-700">{/* leaf */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20c8 0 12-6 12-12V4H8C2 4 2 10 2 12s2 8 8 8Z"/></svg>
              </span>
              <p>Chemical-free: Naturally pesticide-free, grown without fertilizers or microplastics.</p>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-1 text-emerald-700">{/* leaf */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20c8 0 12-6 12-12V4H8C2 4 2 10 2 12s2 8 8 8Z"/></svg>
              </span>
              <p>Community-led: Collected by indigenous families under Bolivia’s strong child-labor and environmental legislation.</p>
            </li>
          </ul>
          <p className="mt-4 italic text-stone-700">“Wild chocolate is proof that flavor and forest can share the same root.”</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip">Forest-grown</span>
            <span className="chip">No pesticides/irrigation claimed</span>
            <span className="chip">CO₂ −50–75% (source)</span>
            <span className="chip">Bolivia origin</span>
          </div>
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
                We work with Saltus, a Bolivian maker renowned for precision fermentation and forest-friendly production. Their facility:
              </p>
              <ul className="list-disc pl-5 marker:text-emerald-700 space-y-2">
                <li>Treats and reuses 100% of process water.</li>
                <li>Incorporates solar energy with recycled glass-bottle heat storage.</li>
                <li>Uses LED lighting and recycled building materials to minimize waste.</li>
              </ul>
              <p>
                Saltus’ programs combine traceability, fair premiums, and technical training to reward quality and protect the rainforest.
              </p>
              <p className="italic">“Transparency and stewardship—two sides of the same bean.”</p>
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
