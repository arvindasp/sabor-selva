"use client";

import SectionHeading from "@/components/SectionHeading";
import { SoftCard } from "@/components/Card";
import CardImage from "@/components/CardImage";
import type { GalleryItem } from "@/components/HowWeWorkGallery";
import { NEAR_SQUARE_LG } from "@/lib/ui";

export default function HowWeWorkSteps({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex flex-col gap-28 sm:gap-32">
      {items.map((it, idx) => {
        const reversed = idx % 2 === 1;

        const Text = (
          <SoftCard key="text" className="h-full p-6 sm:p-8 md:p-10 flex flex-col justify-start">
            <div style={{ height: 1, backgroundColor: "rgba(212,175,55,0.28)" }} />
            <div className="mt-4">
              <p className="muted uppercase tracking-[0.18em] text-[0.8rem]">Step {idx + 1}</p>
              <SectionHeading as="h3" className="text-stone-900 mt-1">{it.title}</SectionHeading>
              <p className="mt-3 text-stone-800 leading-relaxed max-w-[60ch]">{it.body}</p>
            </div>
          </SoftCard>
        );

        const Image = (
          <div key="image" className="h-full">
            <CardImage
              src={it.src}
              alt={it.alt}
              heightClass="h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px]"
              className="group"
              quality={98}
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 600px, (min-width: 768px) 50vw, 95vw"
            />
          </div>
        );

        return (
          <div
            key={`${it.title}-${idx}`}
            className="grid grid-cols-12 gap-6 md:gap-10 items-center"
          >
            {/* Image */}
            <div className={`${reversed ? "order-2" : "order-1"} col-span-6 lg:col-span-7`}>
              {Image}
            </div>
            {/* Text */}
            <div className={`${reversed ? "order-1" : "order-2"} col-span-6 lg:col-span-5`}>
              {Text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
