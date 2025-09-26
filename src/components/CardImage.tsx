"use client";

import Image from "next/image";
import { cx, IMG_FRAME, EASE_LUX, DUR_MED } from "@/lib/ui";

export default function CardImage({
  src,
  alt,
  heightClass,
  elevatedHover = true,
  className,
}: {
  src?: string;
  alt: string;
  heightClass: string;
  elevatedHover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        IMG_FRAME,
        "bg-black/5",
        heightClass,
        "motion-safe:transition",
        DUR_MED,
        EASE_LUX,
        elevatedHover && "group-hover:scale-[1.02]",
        className
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      ) : (
        <div
          className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200/60 grid place-items-center"
          aria-label={`${alt} placeholder`}
        >
          <div className="text-stone-700 text-xs sm:text-sm text-center px-4">
            <strong>Image placeholder</strong>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.5) 0.5px, transparent 0.5px)",
              backgroundSize: "6px 6px",
            }}
          />
        </div>
      )}
    </div>
  );
}

