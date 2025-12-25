import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100 text-neutral-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen bg-[url('/petra.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ανακαλύψτε τη Λέσβο <br /> με τον απόλυτο οδηγό ταξιδιών
              </h1>

              <p className="mt-4 text-lg text-gray-200">
                Χωριά, παραλίες και αυθεντικές γεύσεις — επιλεγμένα μέρη που αξίζουν πραγματικά
              </p>

              <Link
                href="/beaches"
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
              >
                Ξεκινήστε την περιήγηση
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK CATEGORIES ================= */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Παραλίες",
            desc: "Οι καλύτερες παραλίες του νησιού",
            img: "/beach.jpg",
            href: "/beaches",
          },
          {
            title: "Χωριά",
            desc: "Τα πιο γραφικά χωριά της Λέσβου",
            img: "/village.jpg",
            href: "/villages",
          },
          {
            title: "Φύση & Πεζοπορίες",
            desc: "Μονοπάτια και φυσικά τοπία",
            img: "/nature.jpg",
            href: "/nature",
          },
          {
            title: "Ταβέρνες & Φαγητό",
            desc: "Αυθεντικές γεύσεις και τοπικά στέκια",
            img: "/food.jpg",
            href: "/food",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 w-full object-cover group-hover:scale-105 transition"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* ================= FEATURED DESTINATIONS ================= */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8">
          Κορυφαίοι Προορισμοί στη Λέσβο
        </h2>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Μόλυβος",
            subtitle: "Μεσαιωνικό γραφικό χωριό",
            img: "/molivos.jpg",
            href: "/molivos",
          },
          {
            title: "Παραλία Βατερά",
            subtitle: "Η μεγαλύτερη παραλία του νησιού",
            img: "/vatera.jpg",
            href: "/beaches/vatera",
          },
          {
            title: "Πλωμάρι",
            subtitle: "Ούζο, θάλασσα & παράδοση",
            img: "/plomari.jpg",
            href: "/villages/plomari",
          },
        ].map((place) => (
          <Link
            key={place.title}
            href={place.href}
            className="relative rounded-xl overflow-hidden group cursor-pointer block"
          >
            <img
              src={place.img}
              alt={place.title}
              className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 pointer-events-none">
              <h3 className="text-white text-lg font-semibold">
                {place.title}
              </h3>
              <p className="text-gray-200 text-sm">{place.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto py-6 text-center text-gray-500 text-sm border-t border-black/10">
        <p>
          © 2025 Lesvos Travel Guide • Designed & Developed by {""}
          <a
            href="https://amamouridis.github.io/portfolio/"
            className="text-blue-500 hover:underline"
          >
            X
          </a>
        </p>
      </footer>
    </main>
  );
}