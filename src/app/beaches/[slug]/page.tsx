import Link from "next/link";

export default function BeachDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const beaches: Record<string, any> = {
    vatera: {
      name: "Vatera Beach",
      img: "/vatera.jpg",
      desc: "Vatera is an area south of Lesvos with a sandy beach of 8 km long...",
      extra: "This beach is great for swimming, long walks and sunset views."
    },
    "agios-isidoros": {
      name: "Agios Isidoros",
      img: "/agios-isidoros.jpg",
      desc: "Award-winning blue flag beach near Plomari...",
      extra: "Crystal clear waters and great for families."
    }
  };

  const beach = beaches[slug];

  if (!beach) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl">Beach not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO IMAGE */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${beach.img})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold">{beach.name}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Back Button */}
        <Link 
          href="/beaches"
          className="text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to Beaches
        </Link>

        <p className="mt-4 text-gray-300 text-lg">{beach.desc}</p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">More Information</h2>
        <p className="text-gray-400">{beach.extra}</p>

      </div>

    </main>
  );
}
