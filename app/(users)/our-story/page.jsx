"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pink-400 mb-4">
            Our Story ❤️
          </h1>
          <p className="text-gray-400">
            How two strangers became something unforgettable.
          </p>
        </div>

        {/* Story Card */}
        <div className="bg-gray-900 border border-pink-500/20 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-pink-500/20 transition duration-300">

          <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
{`It all started in the most unexpected way — through a YouTube comment section in 2021. 
Just two strangers replying to each other, not knowing that those small conversations 
would slowly turn into something much deeper. There were no faces, no voices — just words. 
And somehow, those words were enough.

Day by day, the conversations grew longer. What started as random replies became daily chats. 
Without even seeing each other, a connection formed — something genuine, something comforting. 
And before we realized it, we had stepped into a relationship built purely on trust and feelings.

The first time we met was in July 2022, at Bhopal’s Rani Kamlapati station. 
It was for the VIT examination, but honestly, the exam felt like the least important part of that day. 
Standing there, seeing each other for the first time — it was surreal. 
There was nervousness, excitement, and a strange sense of familiarity, 
like we had known each other for years.

That day became a collection of little memories — awkward smiles, quiet moments, 
and conversations that felt different from chats on a screen. 
Everything felt real in a way we had never experienced before.

We met again in November when college started in our first year. 
This time, things were different. We weren’t just two people meeting occasionally — 
we were now part of each other’s daily lives.

We started spending more time together, talking more, trying to understand each other better. 
But it wasn’t always easy. We were completely different — in thoughts, in habits, in the way we saw things. 
And those differences brought challenges we hadn’t faced before.

Still, somewhere between those misunderstandings and efforts, 
we kept trying — trying to understand, trying to stay, trying to make it work.

And maybe that’s what made our story real… not perfect, but honest.

(To be continued...)`}
          </p>

        </div>
      </div>
    </section>
  );
}