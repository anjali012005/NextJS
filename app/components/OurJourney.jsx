export default function OurJourney() {

  const timeline = [
    {
      year: "2023",
      title: "First Meeting",
      desc: "A random day that changed everything.",
    },
    {
      year: "2023",
      title: "First Trip",
      desc: "Exploring new places together.",
    },
    {
      year: "2024",
      title: "Growing Together",
      desc: "Learning, laughing and becoming stronger.",
    },
  ];

  return (
    <section className="bg-black py-24">

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl text-center text-pink-400 font-bold mb-16">
          Our Journey ❤️
        </h1>

        <div className="border-l border-pink-500/40 pl-10 space-y-12">

          {timeline.map((item, index) => (
            <div key={index}>

              <p className="text-pink-400 text-sm">{item.year}</p>

              <h2 className="text-xl text-white font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}