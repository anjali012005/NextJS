import LoveLetter from "@/app/components/LoveLetter";
import OurJourney from "@/app/components/OurJourney";
import OurMemories from "@/app/components/OurMemories";


export default function Home() {
  return (
    <main>

      {/* Memories */}
      <OurMemories />

      {/* Timeline */}
      <OurJourney />

      {/* Love Letter */}
      <LoveLetter />

      {/* Ending */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-4xl text-pink-400">
          And the story continues... ❤️
        </h2>
      </section>

    </main>
  );
}