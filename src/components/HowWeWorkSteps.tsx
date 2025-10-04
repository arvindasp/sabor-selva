"use client";

import SectionHeading from "@/components/SectionHeading";
import { SoftCard } from "@/components/Card";
import CardImage from "@/components/CardImage";
import type { GalleryItem } from "@/components/HowWeWorkGallery";
import { NEAR_SQUARE_LG } from "@/lib/ui";

export default function HowWeWorkSteps({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      {items.map((it, idx) => {
        const Text = (
          <SoftCard key="text" className="h-full p-6 sm:p-8 flex flex-col justify-start">
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
              heightClass="h-[260px] sm:h-[320px] md:h-[380px]"
              className="group"
              quality={98}
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 95vw"
            />
          </div>
        );

        return (
          <div
            key={`${it.title}-${idx}`}
            className={`${idx % 2 === 1 ? "sm:flex sm:flex-row-reverse" : "sm:flex sm:flex-row"} flex flex-col gap-6 sm:gap-8 sm:items-stretch`}
          >
            <div className="sm:w-1/2">{Text}</div>
            <div className="sm:w-1/2">{Image}</div>
          </div>
        );
      })}
    </div>
  );
}
