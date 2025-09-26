import { cx } from "@/lib/ui";

type HeadingLevel = "h1" | "h2" | "h3";

const baseByLevel: Record<HeadingLevel, string> = {
  h1: "font-serif font-bold tracking-[0.06em] text-3xl sm:text-4xl",
  h2: "font-serif font-bold tracking-[0.04em] text-2xl",
  h3: "font-serif font-bold tracking-[0.02em] text-lg sm:text-xl mb-2",
};

export default function SectionHeading({
  as = "h2",
  centered,
  className,
  children,
}: {
  as?: HeadingLevel;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const Comp = as;
  return (
    <Comp className={cx(baseByLevel[as], centered && "text-center", className)}>{children}</Comp>
  );
}

