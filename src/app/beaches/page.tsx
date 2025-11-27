export default function BeachesPage() {
  const beaches = [
    {
      name: "Vatera Beach",
      img: "/vatera.jpg",
      desc: "Vatera is an area south of Lesvos with a sandy beach of 8 km long, the largest on the beach of the island. It is 55 km from the capital, Mytilene. The beach sees to Chios, Psara, and Turkey."
    },
    {
      name: "Agios Isidoros",
      img: "/agios-isidoros.jpg",
      desc: "Award-winning blue flag beach near Plomari, famous for its beauty."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 
                     bg-[url('/beach.jpg')] bg-cover bg-center bg-fixed relative">

      {/* Background Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Content wrapper */}
      <div className="relative z-10">

        <h1 className="text-4xl font-bold text-center mb-10">Beaches of Lesvos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beaches.map((b, i) => (
            <div 
              key={i}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl 
                         overflow-hidden hover:scale-[1.03] transition-transform"
            >
              <img src={b.img} alt={b.name} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{b.name}</h2>
                <p className="text-gray-300 text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 py-6 text-center text-gray-400 text-sm border-t border-white/10 w-full">
          <p>
            © 2025 Lesvos Travel • Designed & Developed by{" "}
            <a href="https://amamouridis.github.io/portfolio/" 
              className="text-blue-400 hover:underline">
              Angelos Mamouridis
            </a>
          </p>
        </footer>

      </div>
    </main>
  );
}
