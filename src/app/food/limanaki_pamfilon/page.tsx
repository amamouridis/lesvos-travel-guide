import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Το Λιμανάκι των Παμφίλων",
  description:
    "Το Λιμανάκι των Παμφίλων: παραδοσιακή ταβέρνα δίπλα στη θάλασσα, γνωστή για ψάρι, θαλασσινά και αυθεντικές γεύσεις στη Λέσβο.",
};

export default function LimanakiPamfilonPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/limanaki-pamfilon.jpg"
          alt="Το Λιμανάκι των Παμφίλων"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Το Λιμανάκι των Παμφίλων
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Παραδοσιακή ταβέρνα δίπλα στη θάλασσα
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Γιατί να πάτε</h2>
            <p className="text-gray-700 leading-relaxed">
              Το Λιμανάκι των Παμφίλων είναι μια αγαπημένη παραθαλάσσια ταβέρνα
              στη Σκάλα Παμφίλων, ιδανική για όσους αναζητούν φρέσκο ψάρι,
              θαλασσινά και παραδοσιακές γεύσεις δίπλα στο κύμα.
              Η χαλαρή ατμόσφαιρα και η θέα στη θάλασσα την κάνουν
              ιδανική επιλογή για μεσημεριανό ή δείπνο.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Τραπέζια κυριολεκτικά πάνω στη θάλασσα</li>
              <li>Φρέσκο ψάρι και θαλασσινά</li>
              <li>Χαλαρή, οικογενειακή ατμόσφαιρα</li>
              <li>Ιδανικό για καλοκαιρινά μεσημέρια</li>
            </ul>
          </div>

          {/* What to try */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Τι να δοκιμάσετε</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Φρέσκο ψάρι ημέρας</li>
              <li>Καλαμαράκια & γαρίδες</li>
              <li>Μεζέδες θαλασσινών με ούζο</li>
            </ul>
            <Image
                src="/food.jpg"
                alt="Το Λιμανάκι των Παμφίλων"
                fill
                className="object-cover"
                priority
            />
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Practical Info */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Πληροφορίες</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><strong>Τύπος:</strong> Παραδοσιακή ταβέρνα</li>
              <li><strong>Κουζίνα:</strong> Ελληνική / Θαλασσινά</li>
              <li><strong>Τιμές:</strong> €€</li>
              <li><strong>Κατάλληλο για:</strong> Οικογένειες, ζευγάρια</li>
            </ul>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Τοποθεσία</h3>

            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25794.80770969093!2d26.5863!3d39.1116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba8b1d8b0e6b0f%3A0x9b6f52c7e2a9d2f3!2sSkala%20Pamfilon!5e0!3m2!1sel!2sgr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              <a
                href="https://www.google.com/maps/place/Skala+Pamfilon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Άνοιγμα στο Google Maps →
              </a>
            </p>
          </div>

          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Κοντά στο μαγαζί</h3>
            <ul className="text-sm space-y-2">
              <li>🏘 Παμφίλα</li>
              <li>
                🏖 Κοντινές παραλίες Μυτιλήνης
              </li>
              <li>
                🍽 Άλλα παραθαλάσσια μαγαζιά
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Δείτε κι άλλα μέρη για φαγητό στη Λέσβο
        </h2>
        <Link
          href="/food"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Όλα τα μαγαζιά
        </Link>
      </section>

    </main>
  );
}
