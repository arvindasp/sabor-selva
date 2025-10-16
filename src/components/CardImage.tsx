"use client";

import Image from "next/image";
import { useRef } from "react";
import { cx, IMG_FRAME, EASE_LUX, DUR_MED } from "@/lib/ui";

export default function CardImage({
  src,
  alt,
  heightClass,
  elevatedHover = true,
  className,
  quality = 95,
  sizes,
}: {
  src?: string;
  alt: string;
  heightClass: string;
  elevatedHover?: boolean;
  className?: string;
  quality?: number;
  sizes?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={wrapRef}
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
        <Image
          src={src}
          alt={alt}
          fill
          quality={Math.min(100, Math.max(1, quality))}
          sizes={sizes ?? "(min-width: 1024px) 560px, (min-width: 768px) 50vw, 95vw"}
          className="object-cover"
          onLoadingComplete={(img) => {
            try {
              const el = wrapRef.current;
              if (!el) return;
              const { width, height } = el.getBoundingClientRect();
              const dpr = typeof window !== "undefined" && typeof window.devicePixelRatio === "number" ? window.devicePixelRatio : 1;
              const neededW = Math.round(width * dpr);
              const neededH = Math.round(height * dpr);
              if (img.naturalWidth < neededW || img.naturalHeight < neededH) {
                console.warn(
                  `[Image quality] "${src}" is smaller than its rendered size. ` +
                    `Needed at least ${neededW}x${neededH}px, but got ${img.naturalWidth}x${img.naturalHeight}.`
                );
              }
            } catch {
              // ignore
            }
          }}
        />
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
