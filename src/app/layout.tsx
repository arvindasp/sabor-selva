import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabor Selva – Chocolate & Coffee that Protect the Bolivian Rainforest",
  description:
    "Premium, wild-grown Bolivian chocolate & coffee. Fair wages, forest-first sourcing, and extraordinary flavor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
