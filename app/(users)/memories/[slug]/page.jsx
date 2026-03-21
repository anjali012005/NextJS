"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function MemoryGallery() {
  const { slug } = useParams();

  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const correctPassword = "maiaurtum"; // change this

  // Load auth from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("memoryAuth");
    if (saved === "true") {
      setAuthorized(true);
    }
  }, []);

  const handleUnlock = () => {
    if (input === correctPassword) {
      setAuthorized(true);
      localStorage.setItem("memoryAuth", "true");
    } else {
      alert("Wrong password 💔");
    }
  };

  const galleries = {
    "first-meeting": [
      { src: "/us/first-meeting/1.jpg", caption: "The day it all started ❤️" },
      { src: "/us/first-meeting/2.jpg", caption: "That shy smile 😊" },
      { src: "/us/first-meeting/3.jpg", caption: "Best moment ever ✨" },
    ],

    // "first-trip": [
    //   { src: "/us/first-trip/1.jpg", caption: "Our first adventure 🌍" },
    //   { src: "/us/first-trip/2.jpg", caption: "Sunsets & us 🌅" },
    //   { src: "/us/first-trip/3.jpg", caption: "Unforgettable trip 💫" },
    // ],

    "late-night-talks": [
      { src: "/us/late-night/1.jpg", caption: "Endless conversations 🌙" },
      { src: "/us/late-night/2.jpg", caption: "Laughing at nothing 😂" },
      { src: "/us/late-night/3.jpg", caption: "Just us & vibes 💭" },
    ],

    "long-distance-again": [
      { src: "/us/long-dist-again/1st.jpg", caption: "Endless conversations 🌙" },
      { src: "/us/long-dist-again/2nd.jpg", caption: "Laughing at nothing 😂" },
      { src: "/us/long-dist-again/1.jpg", caption: "Endless conversations 🌙" },
      { src: "/us/long-dist-again/2.jpg", caption: "Laughing at nothing 😂" },
      { src: "/us/long-dist-again/3.jpg", caption: "Just us & vibes 💭" },
       { src: "/us/long-dist-again/4.jpg", caption: "Endless conversations 🌙" },
      { src: "/us/long-dist-again/5.jpg", caption: "Laughing at nothing 😂" },
      { src: "/us/long-dist-again/6.jpg", caption: "Just us & vibes 💭" },
       { src: "/us/long-dist-again/7.jpg", caption: "Endless conversations 🌙" },
      { src: "/us/long-dist-again/8.jpg", caption: "Laughing at nothing 😂" },
      { src: "/us/long-dist-again/9.jpg", caption: "Just us & vibes 💭" },
       { src: "/us/long-dist-again/10.jpg", caption: "Endless conversations 🌙" },
      { src: "/us/long-dist-again/11.jpg", caption: "Laughing at nothing 😂" },
      { src: "/us/long-dist-again/12.jpg", caption: "Just us & vibes 💭" },
    ],
  };

  const us = galleries[slug] || [];

  // 🔐 LOCK SCREEN
  if (!authorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="bg-gray-900 p-8 rounded-xl text-center space-y-4">
          <h2 className="text-2xl text-pink-400">Private Memories 🔒</h2>

          <input
            type="password"
            placeholder="Enter password..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUnlock();
            }}
            className="px-4 py-2 rounded bg-black border border-gray-700 w-full"
          />

          <button
            onClick={handleUnlock}
            className="bg-pink-500 px-6 py-2 rounded hover:bg-pink-600"
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  // 🎞️ GALLERY
  return (
    <section className="min-h-screen bg-black py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Lock Button */}
        <button
          onClick={() => {
            localStorage.removeItem("memoryAuth");
            setAuthorized(false);
          }}
          className="absolute top-6 right-6 text-xs text-gray-400 hover:text-white"
        >
          Lock 🔒
        </button>

        <h1 className="text-4xl text-pink-400 mb-16 text-center">
          Our Memories ❤️
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {us.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">

              {/* Image */}
              <img
                src={item.src}
                className="w-full h-200 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-3 p-4 text-center">

                {/* Caption */}
                <p className="text-white text-sm">{item.caption}</p>

                {/* Download */}
                <a
                  href={item.src}
                  download
                  className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm hover:bg-pink-600"
                >
                  Download
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}