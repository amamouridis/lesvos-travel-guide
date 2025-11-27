"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Beaches", href: "/beaches" },
    { name: "Villages", href: "/villages" },
    { name: "Culture", href: "/culture" },
    { name: "Nature", href: "/nature" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="w-full border-b border-gray-700 bg-black/60 backdrop-blur-md text-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Lesvos Travel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-yellow-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-700">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 hover:bg-gray-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
