"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fdf6e3] shadow-md py-6 px-8 sm:py-8 sm:px-12 lg:py-10 lg:px-20">
      <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-3xl sm:text-4xl font-bold text-green-900 tracking-wide">
          Sabor Selva
        </Link>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-8 text-lg sm:text-xl font-medium text-gray-900">
          <a href="#home" className="hover:text-green-900 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-green-900 transition-colors duration-200">About Us</a>
          <a href="#mission" className="hover:text-green-900 transition-colors duration-200">Our Mission</a>
          <a href="#products" className="hover:text-green-900 transition-colors duration-200">Products</a>
        </nav>
      </div>
    </header>
  );
}
