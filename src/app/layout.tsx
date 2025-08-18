import type { Metadata } from "next";
import "./globals.css";
import { Lora, Inter } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sabor Selva – Chocolate & Coffee that Protect the Bolivian Rainforest",
  description:
    "Premium, wild-grown Bolivian chocolate & coffee. Fair wages, rainforest protection, and extraordinary flavor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} bg-neutral-950 text-neutral-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
