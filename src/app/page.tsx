"use client";

import React, { useEffect } from "react";
// import Image from "next/image"; // Uncomment when you add real images

// Simple intersection observer to reveal elements on scroll
function useReveal(selector = "[data-reveal]") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

// A tasteful placeholder tile that looks good until images are added
function Placeholder({
  label,
  className = "",
  aspect = "aspect-[16/9]",
  rounded = "rounded-xl-hero",
}: {
  label: string;
  className?: string;
  aspect?: string;
  rounded?: string;
}) {
  return (
    <div
      className={[
        "relative ring-line overflow-hidden",
        "bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500/70",
        aspect,
        rounded,
        className,
      ].join(" ")}
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="px-4 py-2 text-center text-emerald-50/95 text-xs sm:text-sm bg-black/10 rounded-full">
          <span className="opacity-90">Image placeholder</span>
          <span className="opacity-70"> • </span>
          <code className="opacity-90">/public/{label}</code>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  useReveal();

  return (
    <main>
      {/* BRAND WORDMARK (Centered, spaced letters) */}
      <section className="section pt-10 pb-4 text-center">
        <h1
          className="tracking-wide-hero"
          style={{ fontWeight: 700 }}
        >
          SABOR&nbsp;SELVA
        </h1>
      </section>

      {/* FULL-BLEED HERO (edge-to-edge rainforest look) */}
      <section className="w-full">
        <div className="relative w-full">
          {/* When you have the real image, replace this Placeholder with Next/Image:
              
              <div className="relative w-full min-h-[60vh] sm:min-h-[75vh]">
                <Image src="/rainforest-hero.jpg" alt="Bolivian rainforest canopy" fill className="object-cover" priority />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-50 to-transparent" />
              </div>
          */}
          <div className="relative w-full min-h-[60vh] sm:min-h-[75vh]">
            <Placeholder
              label="rainforest-hero.jpg"
              aspect="aspect-auto"
              rounded=""
              className="min-h-[60vh] sm:min-h-[75vh]"
            />
            {/* Smooth fade into the light page */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-50 to-transparent" />
            {/* Wordmark overlay on hero (feels connected to nature) */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="text-center px-6">
                <div
                  className="text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] tracking-[0.25em]"
                  style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 700 }}
                >
                  SABOR&nbsp;SELVA
                </div>
                <div className="mt-3 text-amber-200/90 text-sm tracking-[0.35em] uppercase">
                  Salva la Selva
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLOGAN + INTRO CARD */}
      <section id="about" className="container section">
        <div className="flex flex-col items-center text-center">
          <span className="chip" data-reveal>
            {/* emerald base + gold accent thread */}
            <span className="w-2 h-2 rounded-full bg-emerald-700" />
            Salva la Selva
          </span>

          <div
            className="card-soft prose-basic mt-5 max-w-3xl mx-auto opacity-0 translate-y-3 transition-all duration-700"
            data-reveal
          >
            <div className="p-8 sm:p-10">
              <p className="text-balance">
                Sabor Selva partners with Bolivian communities to source wild-grown cacao and coffee.
                We pay fair wages and support forest-first harvesting that protects biodiversity and
                combats deforestation—so every bar and bag keeps the rainforest standing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE MISSION CARDS (with image placeholders and short copy) */}
      <section id="mission" className="container section">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Wild-Grown & Traceable",
              copy:
                "Forest-first sourcing from native cacao and coffee—carefully harvested with the ecosystem in mind.",
              img: "mission-1.jpg",
            },
            {
              title: "Fair, Transparent Wages",
              copy:
                "Long-term relationships and price premiums that reward quality and conservation.",
              img: "mission-2.jpg",
            },
            {
              title: "Impact You Can Taste",
              copy:
                "Distinct terroir, clean roasting, and minimal processing for exceptional flavor and integrity.",
              img: "mission-3.jpg",
            },
          ].map((card, i) => (
            <article
              key={card.title}
              className="card overflow-hidden opacity-0 translate-y-3 transition-all duration-700"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image area (placeholder for now) */}
              <div className="relative">
                <Placeholder label={card.img} aspect="aspect-[4/3]" rounded="" />
                {/* If you add real images later:
                    <div className="relative aspect-[4/3]">
                      <Image src={`/${card.img}`} alt={card.title} fill className="object-cover" />
                    </div>
                */}
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="font-bold">{card.title}</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCTS / GALLERY – MINIMAL SCROLLER (scroll-snap, no JS) */}
      <section id="products" className="section bg-white">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-wide">Products &amp; Gallery</h2>
              <p className="mt-1 text-stone-700">Showcase only for now — shop coming later.</p>
            </div>
          </div>

          <div className="mt-6 -mx-6 overflow-x-auto scroll-smooth">
            <div
              className="px-6 flex gap-4 snap-x snap-mandatory"
              aria-label="Product slider"
            >
              {[
                { file: "prod-choc-70.jpg", title: "70% Wild Cacao" },
                { file: "prod-choc-85.jpg", title: "85% Intense" },
                { file: "prod-choc-nuts.jpg", title: "Amazonian Nuts" },
                { file: "prod-coffee-ground.jpg", title: "Ground Coffee" },
                { file: "prod-coffee-beans.jpg", title: "Whole Bean Blend" },
                { file: "lifestyle-forest.jpg", title: "Rainforest Origins" },
              ].map((item) => (
                <figure
                  key={item.file}
                  className="snap-center shrink-0 w-[82vw] sm:w-[28rem] card overflow-hidden"
                >
                  <Placeholder
                    label={item.file}
                    aspect="aspect-[4/3]"
                    rounded=""
                    className="w-full"
                  />
                  {/* Real image version:
                      <div className="relative aspect-[4/3] w-full">
                        <Image src={`/${item.file}`} alt={item.title} fill className="object-cover" />
                      </div>
                  */}
                  <figcaption className="card-content flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm muted">Sabor Selva</div>
                    </div>
                    {/* Subtle gold accent */}
                    <div className="w-2 h-2 rounded-full bg-amber-500/90" title="gold accent" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
