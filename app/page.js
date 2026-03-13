"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        Welcome to our story ❤️
      </h1>
    </main>
  );
}