export default async function MemoryGallery({ params }) {

  const { slug } = await params;

  const galleries = {
    "first-meeting": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    ],

    "first-trip": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],

    "late-night-talks": [
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    ],
  };

  const images = galleries[slug] || [];

  return (
    <section className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl text-pink-400 mb-16 text-center">
          Our Memories ❤️
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img
                src={img}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}