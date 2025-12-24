import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-[url('/petra.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-2xl text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Lesvos like a local
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Villages, beaches & authentic food — hand-picked, no tourist traps
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/villages"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Explore Villages
            </Link>

            <Link
              href="/beaches"
              className="px-6 py-3 rounded-full border border-white/70 hover:bg-white hover:text-black transition"
            >
              Best Beaches
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Explore Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold">Villages</h3>
          <p className="text-gray-400 mt-2">
            Traditional villages, local life & hidden gems.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Beaches</h3>
          <p className="text-gray-400 mt-2">
            From organized bays to wild untouched shores.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Food & Taverns</h3>
          <p className="text-gray-400 mt-2">
            Authentic local food worth the stop.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm border-t border-white/10">
        <p>
          © 2025 Lesvos Travel • Designed & Developed by{" "}
          <a
            href="https://amamouridis.github.io/portfolio/"
            className="text-blue-400 hover:underline"
          >
            Angelos Mamouridis
          </a>
        </p>
      </footer>

    </main>
  );
}
