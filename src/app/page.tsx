export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white">
      {/* Hero Section */}
     <section className="w-full h-[85vh] bg-[url('/petra.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-center">Discover Lesvos</h1>
          <p className="text-center mt-2 text-lg">Beaches • Villages • Culture • Nature</p>
        </div>
      </section>

      
    </main>
  );
}