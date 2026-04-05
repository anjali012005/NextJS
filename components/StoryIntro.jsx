"use client";

export default function StoryIntro() {
  return (
    <>
      <section className="bg-black text-white py-24 px-6 md:px-20 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        How it all began ✨
      </h2>

      {/* Story Text */}
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
        It wasn’t planned, it wasn’t expected… but somehow, it became everything.
        From strangers to something so meaningful, every moment shaped a story
        we never knew we were writing.
        <br /><br />
        This is not just a collection of memories — it’s a journey of emotions,
        laughter, growth, and countless little moments that made us *us*.
      </p>

      {/* Optional Divider */}
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-[2px] bg-white/30"></div>
      </div>

    </section>
    <section className="bg-black text-white py-16 text-center">
        <p className="text-2xl md:text-3xl italic text-gray-200">
            "Some stories are written by fate, and ours is my favorite."
        </p>
    </section>
    </>
  );
}