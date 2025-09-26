// Centralized UI class string tokens (no visual changes)
export const HERO_HEIGHT = "h-[320px] sm:h-[420px] md:h-[520px]" as const;
export const NEAR_SQUARE_SM = "h-[220px] sm:h-[260px] md:h-[300px]" as const;
export const NEAR_SQUARE_MD = "h-[240px] sm:h-[280px] md:h-[300px]" as const;
export const NEAR_SQUARE_LG = "h-[320px] sm:h-[380px] md:h-[440px]" as const;

export const EASE_LUX = "ease-[cubic-bezier(0.22,1,0.36,1)]" as const;
export const DUR_FAST = "duration-200" as const;
export const DUR_MED = "duration-300" as const;

export const IMG_FRAME = "relative w-full overflow-hidden rounded-xl-hero ring-line shadow-soft" as const;
export const TILE_HOVER = "transition-transform duration-300 group-hover:scale-[1.02]" as const;

export type ClassValue = string | undefined | null | false;
export function cx(...parts: ClassValue[]) {
  return parts.filter(Boolean).join(" ");
}

