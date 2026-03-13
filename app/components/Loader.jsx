"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader() {
  const [burst, setBurst] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setBurst(true), 200);
  }, []);

  const startMusic = () => {
    if (audioRef.current && !started) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
      setStarted(true);
    }
  };

    return (
    <div
      onClick={startMusic}
      className="relative flex items-center justify-center h-screen bg-black overflow-hidden text-white cursor-pointer"
    >

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music/love.mp3" type="audio/mp3" />
      </audio>

      {/* Stars */}
      <div className="absolute w-full h-full">
        {[...Array(80)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 animate-float text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Text */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold tracking-wide animate-fade">
          Our Story Begins
        </h1>

        {!started && (
          <p className="mt-4 text-xl text-pink-400 animate-pulse">
            Tap anywhere to start our story ❤️
          </p>
        )}

        {started && (
          <p className="mt-4 text-xl text-pink-400 animate-pulse">
            Made with love by Anjali ❤️
          </p>
        )}
      </div>

    </div>
  );
}