import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function HomePage() {
  const pillars = [
    {
      title: "Wild-Grown & Traceable",
      description: "Forest-first sourcing from native cacao and coffee.",
      icon: "/globe.svg",
    },
    {
      title: "Fair Wages",
      description: "Long-term relationships that ensure equitable pay.",
      icon: "/file.svg",
       },
    {
      title: "Impactful Flavor",
      description: "Distinct terroir and minimal processing for exceptional taste.",
      icon: "/window.svg",
    },
  ];

  return (
    <div className="w-full">
      <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
        <Image
          src="/rainforest-hero.jpg"
          alt="Bolivian rainforest canopy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          <h1 className={`${playfair.className} text-5xl md:text-7xl tracking-wider text-white`}>
            SABOR SELVA
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto">
            Wild chocolate and coffee that protect the Bolivian rainforest
          </p>
        </div>
      </section>

      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl bg-white/70 backdrop-blur-sm p-8 text-center shadow-md"
            >
              <Image src={pillar.icon} alt="" width={48} height={48} className="mx-auto mb-6" />
              <h3 className={`${playfair.className} text-xl mb-4`}>{pillar.title}</h3>
              <p className="text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
