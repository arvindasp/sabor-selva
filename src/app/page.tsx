"use client";

import React, { useEffect } from "react";
import Image from "next/image";

/**
 * QUICK SIZE TWEAKS (edit these class strings):
 * - HERO_HEIGHT: overall hero height at each breakpoint
 * - MISSION_HEIGHT: image height in the 3 mission cards
 * - SLIDE_WIDTH: width of each product/gallery slide
 * - SLIDE_IMAGE_HEIGHT: image height inside each slide
 */
const HERO_HEIGHT = "h-[320px] sm:h-[420px] md:h-[520px]";
const MISSION_HEIGHT = "h-[180px] sm:h-[210px] md:h-[240px]";
const SLIDE_WIDTH = "w-[82vw] sm:w-[24rem] md:w-[26rem]";
const SLIDE_IMAGE_HEIGHT = "h-[200px] sm:h-[240px] md:h-[260px]";

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
      {/* BRAND WORDMARK (between header and hero) */}
      <section className="container pt-3 pb-1 text-center">
        <h1 className="tracking-wide-hero" style={{ fontWeight: 700 }}>
          SABOR&nbsp;SELVA
        </h1>
      </section>

      {/* HERO — contained, fixed height, crisp */}
      <section className="section pt-2">
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
              sizes="(min-width: 1250px) 1200px, 120vw"
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

      {/* THREE MISSION CARDS — fixed image heights */}
      <section id="mission" className="container section scroll-mt-[110px]">
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
              <div className={["relative overflow-hidden", MISSION_HEIGHT].join(" ")}>
                <Image
                  src={`/${card.img}`}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1000px) 400px, (min-width: 700px) 35vw, 10vw"
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
                  {/* If you add actual files to /public with these names, replace the div below with a Next <Image/> */}
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
