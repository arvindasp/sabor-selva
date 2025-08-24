"use client";

import React, { useEffect } from "react";
import Image from "next/image";

/**
 * QUICK SIZE TWEAKS (edit these class strings):
 * - HERO_HEIGHT: overall hero height at each breakpoint
 * - MISSION_HEIGHT: image height in the 3 mission rows
 * - SLIDE_WIDTH: width of each product/gallery slide
 * - SLIDE_IMAGE_HEIGHT: image height inside each slide
 */
const HERO_HEIGHT = "h-[340px] sm:h-[400px] md:h-[500px]";
const MISSION_HEIGHT = "h-[200px] sm:h-[220px] md:h-[240px]";
const SLIDE_WIDTH = "w-[78vw] sm:w-[22rem] md:w-[24rem]";
const SLIDE_IMAGE_HEIGHT = "h-[240px] sm:h-[250px] md:h-[270px]";

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
    <main className="pt-[96px] sm:pt-[112px]">
      {/* BRAND WORDMARK (same size, tighter spacing) */}
      <section className="container pt-1 pb-0 text-center">
        <h1 className="tracking-wide-hero" style={{ fontWeight: 700 }}>
          SABOR&nbsp;SELVA
        </h1>
      </section>

      {/* HERO — contained, fixed height, crisp */}
      <section className="section pt-1">
        <div className="container">
          <div
            className={[
              "relative w-full rounded-xl-hero ring-line overflow-hidden shadow-soft",
              HERO_HEIGHT,
            ].join(" ")}
          >
            <Image
              src="/rainforest-hero.jpg"
              alt="Lush Bolivian rainforest canopy"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1280px) 1152px, 90vw"
            />
          </div>
        </div>
      </section>

      {/* SLOGAN + INTRO (single slogan above card) */}
      <section id="about" className="container section scroll-mt-[110px]">
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

     {/* MISSION — text LEFT (smaller), image RIGHT (bigger), always same row */}
<section id="mission" className="container section scroll-mt-[110px]">
  <div className="space-y-10">
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
      <div
        key={card.title}
        className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-8"
      >
        {/* TEXT CARD (left) — shorter + narrower */}
        <article
          className="card min-w-0 opacity-0 translate-y-3 transition-all duration-700"
          data-reveal
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div
            className={[
              // Half padding -> compact box
              "p-3 sm:p-4",
              // Shorter height than image so the image can be larger
              "min-h-[clamp(160px,26vw,320px)]",
              "flex items-center",
            ].join(" ")}
          >
            <div className="max-w-[40ch]">
              <h3 className="font-bold">{card.title}</h3>
              <p className="mt-2 text-stone-700 leading-relaxed">{card.copy}</p>
            </div>
          </div>
        </article>

        {/* IMAGE CARD (right) — bigger, near-square */}
        <div
          className={[
            "card overflow-hidden justify-self-end opacity-0 translate-y-3 transition-all duration-700",
            // Bigger area: near-square; grows more than the text card
            "w-[clamp(220px,46vw,520px)]",
            "h-[clamp(260px,46vw,520px)]",
          ].join(" ")}
          data-reveal
          style={{ transitionDelay: `${i * 80 + 40}ms` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={`/${card.img}`}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(min-width:1280px) 520px, (min-width:1024px) 460px, (min-width:640px) 380px, 240px"
              priority={i === 0}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* PRODUCTS / GALLERY – minimal scroller with fixed heights */}
      <section id="products" className="section bg-white scroll-mt-[110px]">
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
                <figure
                  key={item.file}
                  className={["snap-center shrink-0 card overflow-hidden", SLIDE_WIDTH].join(" ")}
                >
                  {/* Placeholder until you add these files; replace this div with <Image/> when ready */}
                  <div
                    className={[
                      "relative w-full rounded-none ring-line bg-gradient-to-br from-emerald-100 to-emerald-200/60",
                      SLIDE_IMAGE_HEIGHT,
                    ].join(" ")}
                  />
                  <figcaption className="card-content flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm muted">Sabor Selva</div>
                    </div>
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
