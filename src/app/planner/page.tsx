"use client";

import { useState } from "react";
import Link from "next/link";

const itineraries = {
  molivos: {
    label: "Μόλυβος",
    nearby: [
      "Μόλυβος (κάστρο & σοκάκια)",
      "Εφταλού (μπάνιο & θερμά)",
      "Πέτρα",
      "Ανάξος",
    ],
    extended: [
      "Σίγρι & Απολιθωμένο Δάσος",
      "Αγιάσος",
      "Πλωμάρι",
      "Μυτιλήνη",
    ],
  },
  plomari: {
    label: "Πλωμάρι",
    nearby: [
      "Πλωμάρι (βόλτα & ούζο)",
      "Μελίντα",
      "Άγιος Ισίδωρος",
    ],
    extended: [
      "Βατερά",
      "Αγιάσος",
      "Μυτιλήνη",
      "Μόλυβος",
    ],
  },
  mytilini: {
    label: "Μυτιλήνη",
    nearby: [
      "Μυτιλήνη (κάστρο & αγορά)",
      "Θερμά",
      "Αεροχώρι",
    ],
    extended: [
      "Πλωμάρι",
      "Αγιάσος",
      "Βατερά",
      "Μόλυβος",
    ],
  },
};

export default function PlannerPage() {
  const [location, setLocation] = useState<keyof typeof itineraries | "">("");
  const [days, setDays] = useState(1);

  const buildPlan = () => {
    if (!location) return [];

    const base = itineraries[location];
    let pool = [];

    if (days <= 2) {
      pool = base.nearby;
    } else if (days <= 4) {
      pool = [...base.nearby, base.extended[0]];
    } else if (days <= 7) {
      pool = [...base.nearby, ...base.extended];
    } else {
      pool = [
        ...base.nearby,
        ...base.extended,
        "Ελεύθερη μέρα / χαλάρωση",
        "Ελεύθερη μέρα / επανάληψη αγαπημένων",
      ];
    }

    return pool.slice(0, days);
  };

  const plan = buildPlan();

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">

      {/* ================= HERO ================= */}
      <section className="py-24 bg-neutral-900 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Φτιάξε το ταξίδι σου
        </h1>
        <p className="text-gray-300 text-lg">
          Πες μας πού θα μείνεις και πόσες μέρες έχεις
        </p>
      </section>

      {/* ================= CONTROLS ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        {/* LOCATION */}
        <div>
          <label className="block font-semibold mb-2">
            Πού θα διαμείνεις;
          </label>
          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value as keyof typeof itineraries)
            }
            className="w-full p-3 rounded-lg border border-neutral-300"
          >
            <option value="">Επίλεξε περιοχή</option>
            <option value="molivos">Μόλυβος</option>
            <option value="plomari">Πλωμάρι</option>
            <option value="mytilini">Μυτιλήνη</option>
          </select>
        </div>

        {/* DAYS */}
        <div>
          <label className="block font-semibold mb-2">
            Πόσες μέρες θα μείνεις;{" "}
            <span className="text-yellow-600">({days})</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-yellow-600"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

      </section>

      {/* ================= PLAN ================= */}
      {location && (
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Πρόγραμμα {days} Ημερών κοντά στη διαμονή σου (
            {itineraries[location].label})
          </h2>

          <div className="space-y-6">
            {plan.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6"
              >
                <h3 className="font-semibold text-lg mb-1">
                  Ημέρα {index + 1}
                </h3>
                <p className="text-gray-700">
                  Προτείνεται: <strong>{place}</strong>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= BACK ================= */}
      <div className="text-center pb-20">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition"
        >
          ← Επιστροφή στην αρχική
        </Link>
      </div>

    </main>
  );
}
