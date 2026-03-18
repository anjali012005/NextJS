"use client";

import { useState, useEffect } from "react";

const chats = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
];

export default function OurMessages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % chats.length);
    }, 4000); // slow transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[150px] rounded-full"></div>

      {/* Chat Image */}
      <div className="relative max-w-md w-full transition-opacity duration-1000">
        <img
          src={chats[index]}
          alt="memory"
          className="rounded-2xl shadow-2xl border border-white/10 object-cover w-full h-[600px]"
        />
      </div>

    </section>
  );
}