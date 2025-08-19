"use client";

import React, { useEffect } from "react";
import Image from "next/image";

// Reveal-on-scroll helper
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

export default function HomePage() {
  useReveal();

  return (
    <main>
      {/* FULL-BLEED HERO (no text overlay; slightly shorter height) */}
      <section className="w-full">
        <div className="relative w-full min-h-[50vh] sm:min-h-[60vh]">
          <Image
            src="/rainforest-hero.jpg"
            alt="Lush Bolivian rainforest canopy"
            fill
            className="object-cover"
            priority
          />
          {/* Soft fade into the light page */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-stone-50 to-transparent" />
        </div>
      </section>

      {/* SLOGAN + INTRO (only one slogan; nice spacing) */}
      <section id="about" className="container section pt-10">
        <div className="flex flex-col items-center text-center">
          <span
            className="uppercase tracking-[0.35em] text-emerald-700 text-sm sm:text-base"
            data-reveal
          >
            Salva la Selva
          </span>

          <div
            className="card-soft prose-basic mt-5 max-w-3xl mx-auto opacity-0 translate-y-3 transition-all duration-700"
            data-reveal
          >
            <div className="p-8 sm:p-10">
              <p className="text-balance">
                Sabor Selva partners with Bolivian communities to source wild-grown cacao and
                coffee. We pay fair wages and support forest-first harvesting that protects
                biodiversity and combats deforestation—so every bar and bag keeps the rainforest
                standing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE MISSION CARDS (shallower aspect so images don’t feel stretched) */}
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
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={`/${card.img}`}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="card-content">
                <h3 className="font-bold">{card.title}</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCTS / GALLERY – Minimal scroller (unchanged for now) */}
      <section id="products" className="section bg-white">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-wide">Products &amp; Gallery</h2>
              <p className="mt-1 text-stone-700">Showcase only for now — shop coming later.</p>
            </div>
          </div>

          <div className="mt-6 -mx-6 overflow-x-auto scroll-smooth">
            <div className="px-6 flex gap-4 snap-x snap-mandatory" aria-label="Product slider">
              {[
                { file: "prod-choc-70.jpg", title: "70% Wild Cacao" },
                { file: "prod-choc-85.jpg", title: "85% Intense" },
                { file: "prod-choc-nuts.jpg", title: "Amazonian Nuts" },
                { file: "prod-coffee-ground.jpg", title: "Ground Coffee" },
                { file: "prod-coffee-beans.jpg", title: "Whole Bean Blend" },
                { file: "lifestyle-forest.jpg", title: "Rainforest Origins" },
              ].map((item) => (
                <figure key={item.file} className="snap-center shrink-0 w-[82vw] sm:w-[28rem] card overflow-hidden">
                  {/* still placeholders for these until you add files */}
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-emerald-100 to-emerald-200/60 ring-line rounded-none" />
                  <figcaption className="card-content flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm muted">Sabor Selva</div>
                    </div>
                    {/* Gold accent dot */}
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
