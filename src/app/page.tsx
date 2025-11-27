export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Hero Section */}
     <section className="w-full h-[60vh] bg-[url('/lesvos.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/50 p-6 rounded-xl">
          <h1 className="text-4xl font-bold text-center">Discover Lesvos</h1>
          <p className="text-center mt-2 text-lg">Beaches • Villages • Culture • Nature</p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-5xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        
        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700">
          <h2 className="text-xl font-semibold">Beaches</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700">
          <h2 className="text-xl font-semibold">Villages</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700">
          <h2 className="text-xl font-semibold">Culture</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-700">
          <h2 className="text-xl font-semibold">Nature</h2>
        </div>

      </section>
    </main>
  );
}