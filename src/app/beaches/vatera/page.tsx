import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Παραλία Βατερά",
  description:
    "Η παραλία Βατερά στη Λέσβο: η μεγαλύτερη παραλία του νησιού, ιδανική για χαλάρωση, οικογένειες και καλό φαγητό δίπλα στη θάλασσα.",
};

export default function VateraPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/vatera.jpg"
          alt="Παραλία Βατερά Λέσβος"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Παραλία Βατερά
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Η μεγαλύτερη παραλία της Λέσβου
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Γιατί να πας</h2>
            <p className="text-gray-700 leading-relaxed">
              Τα Βατερά είναι μια εκτεταμένη αμμώδης παραλία στη νότια Λέσβο,
              ιδανική για χαλαρές διακοπές δίπλα στη θάλασσα. Ο συνδυασμός
              απλωτής παραλίας, καθαρών νερών και παραθαλάσσιων ταβερνών
              την κάνει αγαπημένη επιλογή για οικογένειες αλλά και ζευγάρια.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Πολύ μεγάλη σε μήκος, ιδανική για περίπατο</li>
              <li>Ρηχά νερά – κατάλληλη για παιδιά</li>
              <li>Ταβέρνες και καφέ κυριολεκτικά πάνω στο κύμα</li>
              <li>Όμορφα ηλιοβασιλέματα</li>
            </ul>
          </div>

          {/* Practical info */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Χρήσιμες πληροφορίες</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Τύπος:</strong> Αμμώδης</li>
              <li><strong>Οργάνωση:</strong> Ομπρέλες & ξαπλώστρες σε σημεία</li>
              <li><strong>Πρόσβαση:</strong> Εύκολη με αυτοκίνητο</li>
              <li><strong>Ιδανική για:</strong> Οικογένειες, χαλάρωση</li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Τοποθεσία</h3>
            <div className="w-full h-48 bg-neutral-200 flex items-center justify-center text-sm text-gray-500">
              Map coming soon
            </div>
          </div>

          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Κοντά στα Βατερά</h3>
            <ul className="space-y-2 text-sm">
              <li>
                🏘{" "}
                <Link href="/villages/plomari" className="text-blue-600 hover:underline">
                  Πλωμάρι
                </Link>
              </li>
              <li>🍽 Ταβέρνες παραλίας</li>
              <li>🏖 Μικρότερες ήσυχες παραλίες στην περιοχή</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Δείτε κι άλλες παραλίες στη Λέσβο
        </h2>
        <Link
          href="/beaches"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Όλες οι παραλίες
        </Link>
      </section>

    </main>
  );
}
