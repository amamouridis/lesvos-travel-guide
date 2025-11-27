export default function BeachesPage() {
  const beaches = [
    {
      name: "Vatera Beach",
      img: "/vatera.jpg",
      img1: "/vatera1.jpg",
      desc: "Vatera is an area south of Lesvos with a sandy beach of 8 km long, the largest on the beach of the island. It is 55 km from the capital, Mytilene. The beach sees to Chios, Psara, and Turkey."
    },
    {
      name: "Agios Isidoros",
      img: "/agios-isidoros.jpg",
      desc: "Award-winning blue flag beach near Plomari, famous for its beauty."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-10">Beaches of Lesvos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {beaches.map((b, i) => (
          <div 
            key={i}
            className="bg-gray-900 rounded-xl border border-gray-700 shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <img src={b.img} alt={b.name} className="h-48 w-full object-cover" />

            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{b.name}</h2>
              <p className="text-gray-400 text-sm">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
