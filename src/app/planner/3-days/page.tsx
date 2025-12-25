import Link from "next/link";

export const metadata = {
  title: "Πλάνο 3 Ημερών στη Λέσβο | Lesvos Travel Guide",
  description:
    "Αναλυτικό πλάνο 3 ημερών στη Λέσβο: χωριά, παραλίες, φύση και τοπικές γεύσεις.",
};

export default function Planner3Days() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* HERO */}
      <section className="relative h-[50vh] bg-[url('/plomari2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 text-white">
            <h1 className="text-4xl font-bold">Λέσβος σε 3 Μέρες</h1>
            <p className="text-gray-200 mt-2">
              Πιο χαλαρό πλάνο με φύση, χωριά & εμπειρίες
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* DAY 1 */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Ημέρα 1 — Μόλυβος & Βόρεια Λέσβος</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🏘 Βόλτα στον <strong>Μόλυβο</strong></li>
            <li>🏰 Ανάβαση στο κάστρο</li>
            <li>🏖 Μπάνιο στην <strong>Εφταλού</strong></li>
            <li>🍽 Δείπνο στο λιμάνι</li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Ημέρα 2 — Παραλίες & Πλωμάρι</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🏖 Πρωί στα <strong>Βατερά</strong></li>
            <li>🍤 Μεσημεριανό δίπλα στη θάλασσα</li>
            <li>🏘 Βόλτα στο <strong>Πλωμάρι</strong></li>
            <li>🥃 Ούζο & χαλαρό απόγευμα</li>
          </ul>
        </div>

        {/* DAY 3 */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Ημέρα 3 — Φύση & Παράδοση</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🌲 Επίσκεψη στην <strong>Αγιάσο</strong></li>
            <li>☕ Καφές στο χωριό</li>
            <li>🥾 Μικρή πεζοπορία ή φύση</li>
            <li>🍽 Παραδοσιακό φαγητό πριν την αναχώρηση</li>
          </ul>
        </div>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition"
          >
            ← Επιστροφή στην αρχική
          </Link>
        </div>

      </section>
    </main>
  );
}
