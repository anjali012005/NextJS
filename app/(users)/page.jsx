"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function UserHome() {
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 35000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="relative h-screen w-screen overflow-hidden flex items-center justify-center">

        <Navbar />

      {/* Background Image */}
      <img
        src="/us/sec.jpg"
        alt="Our Story"
        className="absolute inset-0 w-full h-full object-cover animate-zoom"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <h1 className="relative text-white text-5xl md:text-6xl font-bold text-center drop-shadow-lg">
        Welcome to our story ❤️
      </h1>

    </main>
  );
}
