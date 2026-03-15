"use client";
import { useState } from "react";

export default function LoveLetter() {

  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black py-24 text-center">

      <h1 className="text-4xl text-pink-400 font-bold mb-10">
        A Letter For You 💌
      </h1>

      <button
        onClick={() => setOpen(!open)}
        className="bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600"
      >
        Open Letter
      </button>

      {open && (
        <div className="max-w-xl mx-auto mt-10 bg-gray-900 p-8 rounded-xl text-gray-300 leading-8">
          <p>
            Every moment with you has become a memory I never want to lose.
            Life feels lighter, brighter, and more meaningful with you in it.
          </p>

          <p className="mt-4">
            This little space on the internet is just a reminder that
            some stories are worth saving forever. ❤️
          </p>
        </div>
      )}

    </section>
  );
}