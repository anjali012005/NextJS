"use client";

export default function PhotoStrip() {
  const images = [
    "/us/first-meeting/1.jpg",
    "/us/first-meeting/2.jpg",
    "/us/first-trip/1.jpg",
    "/us/moments/1.jpg",
    "/us/moments/2.jpg",
  ];

  return (
    <section className="bg-black py-16 overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-white text-center text-3xl md:text-4xl font-semibold mb-10">
        Glimpses of Us 💕
      </h2>

      {/* Horizontal Scroll */}
      <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              alt="memory"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

    </section>
  );
}