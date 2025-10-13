import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { type GalleryItem } from "@/components/HowWeWorkGallery";
import HowWeWorkSteps from "@/components/HowWeWorkSteps";
import { Card, SoftCard } from "@/components/Card";
import CardImage from "@/components/CardImage";

export const metadata = {
  title: "About Sabor Selva",
  description:
    "Our origin story and sense of place—luxury chocolate & coffee, rooted in the Bolivian rainforest.",
} satisfies Metadata;


export default function AboutPage() {
  const steps: GalleryItem[] = [
    {
      title: "LEGACY",
      body:
        "Wild cacao thrives under the Bolivian jungle canopy. Protecting this ecosystem means protecting one of the planet’s last wild cacao gene pools — the foundation of our flavor and our mission.",
      src: "/how-1.jpg",
      alt: "Jungle canopy with wild cacao trees in their natural habitat",
    },
    {
      title: "HARVEST",
      body:
        "Families from forest communities collect ripe cacao pods using traditional poles, ensuring minimal impact on surrounding trees. These harvests provide income that makes it possible for families to remain in their ancestral forest homes.",
      src: "/how-2.jpg",
      alt: "Hands using long poles to reach ripe cacao pods",
    },
    {
      title: "FERMENTATION",
      body:
        "Beans are fermented naturally in woven baskets or cloth, allowing the pulp’s sugars to transform flavor without additives or industrial heat — a slow method that preserves both quality and tradition.",
      src: "/how-3.jpg",
      alt: "Cacao beans fermenting in cloth and wicker baskets",
    },
    {
      title: "DRYING",
      body:
        "The beans are sun-dried on raised tables using only natural warmth, eliminating the need for fossil-fuel dryers and maintaining the integrity of each batch.",
      src: "/how-4.jpg",
      alt: "Cacao beans drying on tarpaulins or raised tables in sunlight",
    },
    {
      title: "COMMUNITY",
      body:
        "Every bar sustains fair livelihoods through transparent pricing and traceable sourcing. We follow the principles of decent work and zero child labor, helping ensure dignity and opportunity for the next generation.",
      src: "/how-5.jpg",
      alt: "Village life with people in forest communities",
    },
    {
      title: "FUTURE",
      body:
        "Our purchases fund local initiatives in solar power, clean water, and education access — helping young people stay, study, and steward the forest they grew up in.",
      src: "/how-6.jpg",
      alt: "Solar panels and learning in a village setting",
    },
  ];

  return (
    <main>
      {/* Hero (full-bleed like home) */}
      <section
        className="relative left-1/2 -translate-x-1/2 w-screen h-[60vh] min-h-[420px] flex items-center justify-center text-center overflow-hidden text-white"
      >
        <Image
          src="/about-hero.jpg"
          alt="About Sabor Selva hero image"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 z-20 bg-black/30" />
        <div className="relative z-30 px-4 text-white">
          <SectionHeading as="h1" className="drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] text-white hero-title">About Us</SectionHeading>
        </div>
      </section>

      {/* Our Story */}
      <section className="container section">
        <div className="max-w-3xl mx-auto">
          <SoftCard className="p-6 sm:p-8 prose-basic">
            <SectionHeading as="h2" centered className="text-stone-900">Our Story</SectionHeading>
          <div className="mx-auto mt-3 max-w-[60ch] text-stone-800">
            <p>
              We began with a simple idea: celebrate rare flavors from the
              rainforest while honoring the people and places that keep the
              forest alive. Each decision favors quality, dignity, and care.
            </p>
            <p className="mt-4">
              From cacao to coffee, our work is guided by patience and
              precision—craft that respects biodiversity and culture, and a
              commitment to long-term value over short-term gain.
            </p>
            <blockquote className="mt-6 border-l-2 border-amber-600/60 pl-4 text-stone-700 italic relative">
              <span
                aria-hidden
                className="absolute -left-1.5 top-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-500"
              />
              <span>&ldquo;Deja que el bosque siga en pie.&rdquo;</span>
            </blockquote>
            </div>
          </SoftCard>
        </div>
      </section>

      <div className="container">
        <div className="divider" />
      </div>

      {/* Sourcing & Place — premium two-column with soft card + image */}
      <section className="container section">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Text in a soft card with hairline gold accent */}
          <SoftCard className="p-6 sm:p-8">
            <div style={{ height: 1, backgroundColor: "rgba(212,175,55,0.3)" }} />
            <div className="max-w-[60ch]">
              <SectionHeading as="h2" className="text-stone-900">Sourcing &amp; Place</SectionHeading>
              <p className="mt-3 text-stone-800">
                Our cacao and coffee are gathered from native trees in Bolivia’s Amazonian lowlands — where cultivation means conservation. Each harvest values biodiversity over yield, rewarding communities who protect the forest rather than clear it.
              </p>
              <ul className="mt-4 list-disc pl-5 text-stone-800 marker:text-emerald-700">
                <li>Wild and agroforestry-grown crops that prevent deforestation</li>
                <li>Fair payment programs built on ILO standards and full traceability</li>
                <li>Transparent, long-term relationships with indigenous producers</li>
              </ul>
            </div>
          </SoftCard>

          {/* Near-square image with ring + soft shadow + subtle texture overlay */}
          <div className="relative">
            <CardImage
              src="/about-2.jpg"
              alt="Sourcing and place image"
              heightClass="h-[320px] sm:h-[380px] md:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Removed gallery section for a cleaner layout */}

      {/* What is Wild Chocolate — text first, image under; subtle framing */}
      <section className="container section">
        <div className="max-w-[60ch]">
          <SectionHeading as="h2" className="text-stone-900">What Is Wild Chocolate</SectionHeading>
          <p className="mt-3 text-stone-800">
            Wild chocolate is cacao in its purest form — fruit collected from naturally occurring trees within living rainforest ecosystems. It’s harvested without chemicals, irrigation, or land clearing, keeping old-growth forests intact. Each pod is gathered by hand, fermented, and sun-dried near its origin — a process that preserves both aroma and ecology.
          </p>
        </div>
        <div className="mt-8">
          <CardImage
            src="/about-1.jpg"
            alt="What is wild chocolate image"
            heightClass="h-[320px] sm:h-[380px] md:h-[420px]"
          />
        </div>
      </section>

      {/* How We Work — side-by-side steps (text + image) */}
      <section className="container section">
        <SectionHeading as="h2" className="text-stone-900">How We Work</SectionHeading>
        <div className="mt-6">
          <HowWeWorkSteps items={steps} />
        </div>
      </section>

      {/* Partner callout (Saltus) — spacing/link placement refined */}
      <section className="container section">
        <Card className="p-6 sm:p-8">
          <SectionHeading as="h2" className="text-stone-900">Our Partner in Bolivia</SectionHeading>
          <p className="mt-3 max-w-[58ch] text-stone-800">
            We partner with Saltus in Achocalla, Bolivia — a maker whose values mirror our own. Their facility treats and reuses 100% of process water, operates partly on solar power, and uses recycled glass and LED lighting to minimize its footprint. Together, we transform wild cacao into award-winning chocolate that supports both excellence and equity.
          </p>
          <div className="mt-4 flex justify-end">
            <a
              href="https://www.en.saltuschocolate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Visit Saltus
            </a>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="container section pb-16">
        <Card className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-serif text-stone-900 text-lg">
              Want to see the numbers?
            </div>
            <p className="text-stone-700 max-w-[60ch]">
              Read more about conservation impact and fair wages.
            </p>
          </div>
          <Link href="/our-mission" className="btn btn-primary font-bold focus-visible:ring-2 focus-visible:ring-amber-500/40">
            Read Our Mission
          </Link>
        </Card>
      </section>
    </main>
  );
}
