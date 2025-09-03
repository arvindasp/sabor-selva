"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Playfair_Display, Merriweather } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });

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
      <section className="relative left-1/2 -translate-x-1/2 w-screen h-[70vh] min-h-[460px] flex items-center justify-center text-center overflow-hidden">
        <Slideshow
          images={["/rainforest-hero.jpg", "/rainforest-3.jpg", "/rainforest-4.jpg"]}
          interval={5500}
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
        <FadeIn className="relative z-10 px-4">
          <h1 className={`${playfair.className} tracking-wide-hero !text-white drop-shadow-md text-5xl md:text-7xl`}>
            SABOR SELVA
          </h1>
        </FadeIn>
      </section>

      {/* Slogan */}
      <section className="section">
        <FadeIn>
          <h2 className={`${merriweather.className} text-center text-3xl md:text-4xl text-balance`}>
            &ldquo;Salva La Selva&rdquo;
          </h2>
        </FadeIn>
      </section>

      {/* Small about text box */}
      <section className="section">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="card p-6 md:p-8">
            <p className="prose-basic">
              Write a brief introduction about the company here. Share your mission,
              origins, and what makes your products unique. Keep it concise and warm.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Three side-by-side text + image sections */}
      <section className="section">
        <div className="flex flex-col gap-10">
          {/* Row 1 */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="card p-6 md:p-8">
                <h3 className={`${playfair.className} mb-3`}>Our Cacao</h3>
                <p className="text-[0.98rem] leading-relaxed">
                  Placeholder text about your cacao sourcing, flavor, and the forests
                  it helps preserve. Replace this with your own copy.
                </p>
              </div>
              <div className="card flex items-center justify-center h-44 md:h-56 ring-line bg-[#f3f4f6]">
                <span className="muted">Image Placeholder</span>
              </div>
            </div>
          </FadeIn>

          {/* Row 2 */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="card order-2 p-6 md:p-8">
                <h3 className={`${playfair.className} mb-3`}>Our Coffee</h3>
                <p className="text-[0.98rem] leading-relaxed">
                  Placeholder text about your coffee varieties, roasting approach, and
                  the communities you support. Replace with your content.
                </p>
              </div>
              <div className="card order-1 md:order-1 flex items-center justify-center h-44 md:h-56 ring-line bg-[#f3f4f6]">
                <span className="muted">Image Placeholder</span>
              </div>
            </div>
          </FadeIn>

          {/* Row 3 */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="card p-6 md:p-8">
                <h3 className={`${playfair.className} mb-3`}>Forest-First Sourcing</h3>
                <p className="text-[0.98rem] leading-relaxed">
                  Placeholder text about traceability, fair wages, and environmental
                  stewardship. Replace with the story you want to tell.
                </p>
              </div>
              <div className="card flex items-center justify-center h-44 md:h-56 ring-line bg-[#f3f4f6]">
                <span className="muted">Image Placeholder</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final larger text box */}
      <section className="section">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <p className="prose-basic text-lg">
              Bigger text box for a concluding message or a deeper dive. You can
              replace this with your final content later.
            </p>
          </div>
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
  }, [images, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt="Rainforest and sourcing imagery"
              fill
              priority={i === 0}
              quality={quality}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
