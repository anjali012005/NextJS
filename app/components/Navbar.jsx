"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-black/30 backdrop-blur-md text-white">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        Us ❤️
      </h1>

      {/* Links */}
      <div className="flex gap-8 text-lg">
        <Link href="/" className="hover:text-pink-300 transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-pink-300 transition">
          Our Story
        </Link>

        <Link href="/memories" className="hover:text-pink-300 transition">
          Memories
        </Link>

        <Link href="/message" className="hover:text-pink-300 transition">
          Message
        </Link>
      </div>
    </nav>
  );
}
