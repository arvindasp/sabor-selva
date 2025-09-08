import type { Metadata } from "next";

export const metadata = {
  title: "About Sabor Selva",
  description:
    "Our origin story and sense of place—luxury chocolate & coffee, rooted in the Bolivian rainforest.",
} satisfies Metadata;

function Placeholder({
  label,
  height = "h-[320px] sm:h-[380px] md:h-[420px]",
  className = "",
}: { label: string; height?: string; className?: string }) {
  return (
    <div
      className={[
        "relative ring-line overflow-hidden shadow-soft rounded-xl-hero",
        "bg-gradient-to-br from-emerald-100 to-emerald-200/60 grid place-items-center",
        height,
        className,
      ].join(" ")}
      aria-label={`${label} placeholder`}
    >
      <div className="text-stone-700 text-xs sm:text-sm text-center px-4">
        <strong>Image placeholder</strong>
        <br />
        Add <code>/{label}</code> to <code>/public</code>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="container section pt-8">
          <div className="relative w-full rounded-xl-hero ring-line overflow-hidden shadow-soft h-[320px] sm:h-[420px] md:h-[520px]">
            {/* Texture overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-5 mix-blend-multiply"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 15%, rgba(0,0,0,.05), transparent 40%)",
              }}
            />
            {/* Placeholder now; swap to <Image src="/about-hero.jpg" .../> later */}
            <Placeholder
              label="about-hero.jpg"
              height="h-full"
              className="!bg-gradient-to-br !from-emerald-100 !to-emerald-200/60"
            />
            {/* Centered overlay copy */}
            <div className="absolute inset-0 grid place-items-center text-center px-6">
              <div className="max-w-2xl">
                <h1 className="font-serif tracking-[0.012em] text-3xl sm:text-4xl md:text-5xl text-stone-900">
                  About Sabor Selva
                </h1>
                <p className="mt-2 text-stone-800 text-balance">
                  Chocolate &amp; coffee born in the Bolivian rainforest, crafted with dignity.
                </p>
                <div className="mt-3 text-sm muted italic">Salva la Selva</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container section">
        <div className="card-soft max-w-3xl mx-auto p-8 sm:p-10 prose-basic">
          <h2 className="font-serif tracking-[0.012em] text-stone-900 text-2xl sm:text-3xl text-center">
            Our Story
          </h2>
          <div className="mx-auto mt-4 max-w-[60ch] text-stone-800">
            <p>
              We began with a simple idea: celebrate rare flavors from the
              rainforest while honoring the people and places that keep the
              forest alive. Each decision favors quality, dignity, and care.
            </p>
            <p className="mt-3">
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
        </div>
      </section>

      <div className="container">
        <div className="divider" />
      </div>

      {/* Sourcing & Place */}
      <section className="container section">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-serif tracking-[0.012em] text-stone-900 text-2xl sm:text-3xl">
              Sourcing &amp; Place
            </h2>
            <p className="mt-3 max-w-[58ch] text-stone-800">
              Our ingredients are wild-grown or agroforestry-cultivated in the
              Bolivian lowlands—selected for flavor, biodiversity, and a fair
              value chain that strengthens forest communities.
            </p>
            <ul className="mt-4 list-disc pl-5 text-stone-800 marker:text-emerald-700">
              <li className="max-w-[58ch]">Biodiversity-first practices and minimal intervention</li>
              <li className="max-w-[58ch]">Long-term partners and transparent relationships</li>
              <li className="max-w-[58ch]">Full traceability from forest to finished bar</li>
            </ul>
          </div>
          <div>
            <Placeholder
              label="bolivia-map.jpg"
              height="h-[360px] sm:h-[420px]"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="container section">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Placeholder
            label="about-1.jpg"
            height="h-[220px] sm:h-[260px] md:h-[300px]"
          />
          <Placeholder
            label="about-2.jpg"
            height="h-[220px] sm:h-[260px] md:h-[300px]"
          />
          <Placeholder
            label="about-3.jpg"
            height="h-[220px] sm:h-[260px] md:h-[300px]"
          />
        </div>
      </section>

      {/* Partner callout (Saltus) */}
      <section className="container section">
        <div className="card p-6 sm:p-7">
          <h2 className="font-serif tracking-[0.012em] text-2xl sm:text-3xl text-stone-900">
            Our Partner in Bolivia
          </h2>
          <p className="mt-3 max-w-[58ch] text-stone-800">
            We work with Saltus, a Bolivian maker focused on precision
            fermentation, careful roasting, and forest-friendly value chains
            that reward producers for quality and stewardship.
          </p>
          <a
            href="https://www.en.saltuschocolate.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-4 inline-flex"
          >
            Visit Saltus
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="container section pb-16">
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-serif text-stone-900 text-lg">
              Want to see the numbers?
            </div>
            <p className="text-stone-700 max-w-[60ch]">
              Read more about conservation impact and fair wages.
            </p>
          </div>
          <a href="/our-mission" className="btn btn-primary">
            Read Our Mission
          </a>
        </div>
      </section>
    </main>
  );
}

