import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Φαγητό στη Λέσβο",
  description:
    "Τα καλύτερα μέρη για φαγητό στη Λέσβο: ταβέρνες, εστιατόρια, καφέ και τοπικά προϊόντα.",
};

export default function FoodPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
<section
  className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/ouzo.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Φαγητό στη Λέσβο
    </h1>
    <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
      Ταβέρνες, εστιατόρια και τοπικές γεύσεις — επιλεγμένα μέρη που αξίζουν.
    </p>
  </div>
</section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">Κατηγορίες</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Ταβέρνες", href: "#taverns" },
            { title: "Εστιατόρια", href: "#restaurants" },
            { title: "Καφέ & Bar", href: "#cafes" },
            { title: "Τοπικά Προϊόντα", href: "#local" },
          ].map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center font-medium"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* LIST SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-20">

        {/* Taverns */}
        <div id="taverns">
          <h2 className="text-2xl font-semibold mb-6">Ταβέρνες</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 flex gap-4"
              >
                <div className="w-24 h-24 bg-neutral-200 rounded-lg flex items-center justify-center text-sm text-gray-500">
                  Image
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Όνομα Ταβέρνας
                  </h3>
                  <p className="text-sm text-gray-600">
                    Παραδοσιακή κουζίνα • Παραθαλάσσια
                  </p>
                  <p className="text-sm mt-2">
                    📍 Περιοχή / Χωριό
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Δείτε λεπτομέρειες →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div id="restaurants">
          <h2 className="text-2xl font-semibold mb-6">Εστιατόρια</h2>
          <p className="text-gray-600">
            (Θα προστεθούν σύντομα)
          </p>
        </div>

        {/* Cafes */}
        <div id="cafes">
          <h2 className="text-2xl font-semibold mb-6">Καφέ & Bar</h2>
          <p className="text-gray-600">
            (Θα προστεθούν σύντομα)
          </p>
        </div>

        {/* Local Products */}
        <div id="local">
          <h2 className="text-2xl font-semibold mb-6">Τοπικά Προϊόντα</h2>
          <p className="text-gray-600">
            Ούζο, ελαιόλαδο, τυριά και παραδοσιακά προϊόντα.
          </p>
        </div>
      </section>

    </main>
  );
}
