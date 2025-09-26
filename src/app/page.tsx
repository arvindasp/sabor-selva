"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/Card";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Full-bleed hero slideshow */}
      <section
        className="relative left-1/2 -translate-x-1/2 w-screen h-[70vh] min-h-[460px] flex items-center justify-center text-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/rainforest-hero.jpg)' }}
      >
        {/* Static hero only; slideshow moved below */}
        <div className="absolute inset-0 z-20 bg-black/30" />
        <FadeIn className="relative z-30 px-4 text-white">
          <SectionHeading as="h1" className="drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] text-white hero-title">
            SABOR SELVA
          </SectionHeading>
        </FadeIn>
      </section>

      {/* Slogan */}
      <section className="section pt-8 pb-8">
        <FadeIn>
          <SectionHeading as="h2" centered className="text-balance">
            &ldquo;Salva La Selva&rdquo;
          </SectionHeading>
        </FadeIn>
      </section>

      {/* Small about text box */}
      <section className="section">
        <FadeIn className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="prose-basic max-w-[60ch]">
              Sabor Selva crafts premium chocolate and coffee from wild-grown cacao and forest coffee in Bolivia. We partner with a trusted local company to source transparently, honoring people and place. Every bar and bag is made to feel refined and timeless—luxury that keeps the rainforest standing.
            </p>
          </Card>
        </FadeIn>
      </section>

      {/* Three side-by-side text + image sections */}
      <section className="section">
        <div className="flex flex-col gap-10">
          {/* Row 1 */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 items-center">
              <Card className="p-6 md:p-8">
                <SectionHeading as="h3">Our Cacao</SectionHeading>
                <p className="text-[0.98rem] leading-relaxed max-w-[60ch]">
                  Our cacao is gathered from native trees that grow beneath a living canopy. The fruit is harvested by hand, then carefully fermented and dried to preserve its natural character. The result is an elegant, layered flavor—distinct to the forest itself.
                </p>
              </Card>
              <Card className="flex items-center justify-center h-44 md:h-56 ring-line bg-[#f3f4f6]">
                <span className="muted">Image Placeholder</span>
              </Card>
            </div>
          </FadeIn>

          {/* Row 2 */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 items-center">
              <Card className="order-2 p-6 md:p-8">
                <SectionHeading as="h3">Our Coffee</SectionHeading>
                <p className="text-[0.98rem] leading-relaxed max-w-[60ch]">
                  Placeholder text about your coffee varieties, roasting approach, and
                  the communities you support. Replace with your content.
                </p>
              </Card>
              <Card className="order-1 md:order-1 flex items-center justify-center h-44 md:h-56 ring-line bg-[#f3f4f6]">
                <span className="muted">Image Placeholder</span>
              </Card>
            </div>
          </FadeIn>

          {/* Row 3 */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 items-center">
              <Card className="p-6 md:p-8">
                <SectionHeading as="h3">Forest-First Sourcing</SectionHeading>
                <p className="text-[0.98rem] leading-relaxed max-w-[60ch]">
                  We choose value chains that work with nature, not against it. Wild harvests avoid clearing land, respect biodiversity, and support communities who live in and around the forest. We purchase via our Bolivian partner and align with their producer-payment program, prioritizing traceability, fair value, and long-term relationships.
                </p>
              </Card>
              <Card className="flex items-center justify-center h-44 md:h-56 ring-line bg-[#f3f4f6]">
                <span className="muted">Image Placeholder</span>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Full-bleed slideshow (below the 3 blocks) */}
      <section className="section py-0">
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: "65vh",
            minHeight: 420,
            backgroundImage: 'url(/rainforest-3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Slideshow images={["/rainforest-3.jpg", "/rainforest-4.jpg", "/rainforest-5.jpg"]} interval={5000} quality={100} />
        </div>
      </section>

      {/* Final larger text box */}
      <section className="section">
        <FadeIn className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="prose-basic text-lg max-w-[60ch]">
              Sabor Selva exists to show that exceptional taste and ecological care can be one and the same. We focus on wild-grown ingredients, small-scale post-harvest care, and transparent purchasing through our Bolivian partner. Our aim is simple: create products worthy of a special moment, while helping make it possible for forests—and the people who protect them—to thrive. We are building for the long term: slow expansions, considered collaborations, and disclosures as our sourcing deepens. Until then, enjoy the purity of origin in every bar and bag, and know that your choice supports dignity, continuity, and the living rainforest. Where to find us (Stockists and cafés will be listed here as they launch.)
            </p>
          </Card>
        </FadeIn>
      </section>
    </div>
  );
}

function Slideshow({
  images,
  interval = 6000,
  quality = 90,
}: {
  images: string[];
  interval?: number;
  quality?: number;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className="absolute"
      style={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute"
          style={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 1000ms ease-in-out",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt="Rainforest slideshow image"
              fill
              priority={i === 0}
              quality={Math.min(100, Math.max(90, quality))}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
