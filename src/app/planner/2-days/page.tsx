import Link from "next/link";

export const metadata = {
  title: "Πλάνο 2 Ημερών στη Λέσβο | Lesvos Travel Guide",
  description:
    "Ιδανικό πλάνο 2 ημερών στη Λέσβο: χωριά, παραλίες και φαγητό για σύντομες αποδράσεις.",
};

export default function Planner2Days() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* HERO */}
      <section className="relative h-[50vh] bg-[url('/molivos.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10 text-white">
            <h1 className="text-4xl font-bold">Λέσβος σε 2 Μέρες</h1>
            <p className="text-gray-200 mt-2">
              Ιδανικό πλάνο για σύντομη αλλά γεμάτη εμπειρία
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* DAY 1 */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Ημέρα 1 — Χωριά & Θάλασσα</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🏘 Πρωί: Βόλτα στον <strong>Μόλυβο</strong> (κάστρο & σοκάκια)</li>
            <li>🏖 Μεσημέρι: Μπάνιο στην <strong>Εφταλού</strong></li>
            <li>🍽 Φαγητό: Παραθαλάσσια ταβέρνα</li>
            <li>🌅 Απόγευμα: Καφές στο λιμάνι Μολύβου</li>
          </ul>
        </div>

        {/* DAY 2 */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Ημέρα 2 — Παραλίες & Φαγητό</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🏖 Πρωί: Παραλία <strong>Βατερά</strong></li>
            <li>🍤 Μεσημέρι: Ψάρι ή θαλασσινά</li>
            <li>🏘 Απόγευμα: Βόλτα στο <strong>Πλωμάρι</strong></li>
            <li>🌙 Βράδυ: Ούζο & χαλαρό δείπνο</li>
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
