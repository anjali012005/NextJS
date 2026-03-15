"use client";

import Link from "next/link";

export default function OurMemories() {
  const memories = [
    {
      title: "The First Meeting",
      date: "Jan 2023",
      slug: "first-meeting",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      title: "Our First Trip",
      date: "Aug 2023",
      slug: "first-trip",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Late Night Talks",
      date: "Dec 2023",
      slug: "late-night-talks",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-pink-400 mb-4">
            Our Memories ❤️
          </h1>
          <p className="text-gray-400">
            A few moments that mean the world to us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {memories.map((memory, index) => (
            <Link
              key={index}
              href={`/memories/${memory.slug}`}
              className="bg-gray-900 border border-pink-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition"
            >
              <img
                src={memory.img}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold text-pink-400">
                  {memory.title}
                </h2>

                <p className="text-gray-500 text-sm mb-2">
                  {memory.date}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}