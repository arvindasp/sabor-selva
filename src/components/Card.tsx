import { cx } from "@/lib/ui";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cx("card", className)}>{children}</div>;
}

export function SoftCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cx("card-soft shadow-soft", className)}>{children}</div>;
}

