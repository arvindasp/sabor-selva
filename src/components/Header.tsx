"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fdf6e3] shadow-md py-4 px-6 sm:py-6 sm:px-12">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-screen-2xl mx-auto gap-4">
        <Link
          href="/"
          className="text-3xl font-serif font-bold text-green-900 tracking-wide text-center sm:text-left"
        >
          Sabor Selva
        </Link>
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-lg sm:text-xl font-medium text-gray-900">
          <a href="#home" className="hover:text-green-900 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-green-900 transition-colors duration-200">About Us</a>
          <a href="#mission" className="hover:text-green-900 transition-colors duration-200">Our Mission</a>
          <a href="#products" className="hover:text-green-900 transition-colors duration-200">Products</a>
        </nav>
      </div>
    </header>
  );
}
