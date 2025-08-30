import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Sabor Selva",
  description:
    "Chocolate & coffee born in the Bolivian rainforest, crafted with dignity. Meet Sabor Selva and our forest-first approach.",
};

/** Minimal placeholder block so the page looks polished before images are added. */
function Placeholder({
  label,
  className = "",
  height = "h-[320px] sm:h-[420px]",
}: {
  label: string;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={[
        "relative ring-line overflow-hidden shadow-soft rounded-xl-hero bg-gradient-to-br from-emerald-100 to-emerald-200/60 grid place-items-center",
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
      {/* Hero — Split: text left, image right */}
      <section className="container section pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1><center>About Us</center></h1>
            <p className="mt-3 text-stone-700 text-balance"><center>
              Chocolate &amp; coffee born in the Bolivian rainforest, crafted with dignity.
              </center></p>
          </div>

          {/* Replace the Placeholder with the Image block once you add /about-hero.jpg */}
          <div className="w-full overflow-hidden rounded-xl-hero ring-line shadow-soft">
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px]">
              <Image src="/mission-1.jpg" alt="Harvest in the Bolivian rainforest" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — you fill in later */}
      <section className="container section">
        <div className="card-soft max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 prose-basic">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-3 text-stone-700">
              {/* Write your origin story here (3–6 sentences). How you and your partner met, first experiences with wild-grown cacao/coffee in Bolivia, why “Sabor Selva,” and the moment you committed to forest-first sourcing. */}
              [Add your brand story here.]
            </p>
            <p className="mt-3 text-stone-700">
              {/* Optional second paragraph: what premium means to you, your quality philosophy, and how fair wages and ecology shape every decision. */}
              [Add a second paragraph here.]
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing & Place */}
      <section className="container section">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-bold">Sourcing &amp; Place</h2>

            <div className="mt-4">
              <h3 className="font-bold">Where We Work</h3>
              <p className="mt-2 text-stone-700">
                {/* Mention regions/communities/parks in Bolivia. Keep it high-level for now. */}
                [Describe the regions and communities you partner with here.]
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold">Wild-Grown Sourcing at a Glance</h3>
              <ul className="mt-2 text-stone-700 list-disc pl-5 space-y-1">
                <li>[Short bullet point about how wild-harvesting protects biodiversity.]</li>
                <li>[Bullet on traceability & long-term relationships.]</li>
                <li>[Bullet on quality practices (fermentation/roast) you value.]</li>
              </ul>
            </div>
          </div>

          {/* Map or landscape image */}
          <div>
            {/* Real image version:
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl-hero ring-line overflow-hidden shadow-soft">
              <Image src="/bolivia-map.jpg" alt="Map of partner regions in Bolivia" fill className="object-cover" />
            </div>
            */}
            <Placeholder label="bolivia-map.jpg" height="h-[360px] sm:h-[420px]" />
          </div>
        </div>
      </section>

      {/* Impact & Ethics — highlights you can edit later */}
      <section className="container section">
        <h2 className="text-2xl font-bold">Impact &amp; Ethics</h2>
        <p className="mt-2 text-stone-700">
          A concise overview here; deeper metrics will live on the “Our Mission” page.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="card p-6">
              <h3 className="font-bold">[Highlight title]</h3>
              <p className="mt-2 text-stone-700">
                [One or two sentences about a key principle or practice you want to emphasize.]
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Photo strip — add your own images later */}
      <section className="container section">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace each Placeholder with an <Image src="/about-1.jpg" .../> etc. */}
          <Placeholder label="about-1.jpg" height="h-[180px] sm:h-[220px]" />
          <Placeholder label="about-2.jpg" height="h-[180px] sm:h-[220px]" />
          <Placeholder label="about-3.jpg" height="h-[180px] sm:h-[220px]" />
        </div>
      </section>

      {/* CTA */}
      <section className="container section">
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold">Want to see the numbers?</h3>
            <p className="text-stone-700">Read more about conservation impact and fair wages.</p>
          </div>
          <Link href="/our-mission" className="btn btn-primary">
            Read Our Mission
          </Link>
        </div>
      </section>
    </main>
  );
}
