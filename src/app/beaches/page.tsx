import Link from "next/link";

export default function BeachDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const beaches: Record<string, any> = {
    vatera: {
      name: "Βατερά",
      author: "Angelos",
      img: "/vatera.jpg",
      desc: [
        "Τα Βατερά είναι περιοχή στα νότια της Λέσβου με αμμώδη παραλία μήκους 8 χιλιομέτρων, τη μεγαλύτερη σε μήκος παραλία του νησιού. Απέχει 55 χιλιόμετρα από την πρωτεύουσα, Μυτιλήνη. Η παραλία βλέπει προς τη Χίο, τα Ψαρά, και την Τουρκία.",
        "Τα Βατερά έχουν πλούσια χλωρίδα και πανίδα, ενώ σε κοντινή απόσταση βρίσκεται επίσης το χωριό Βρίσα, όπου στεγάζεται το Μουσείο Φυσικής Ιστορίας με απολιθώματα της γύρω περιοχής από την Παλαιολιθική περίοδο.",
        "Αποτελεί δημοφιλή τουριστικό προορισμό και προσφέρει άνετη πρόσβαση στη θάλασσα και την παραλία της Νότιας Λέσβου."
      ],
      extraImages: ["/vatera.jpg", "/vatera1.jpg", "/vatera2.jpg"]
    },

    "agios-isidoros": {
      name: "Άγιος Ισίδωρος",
      author: "Angelos",
      img: "/agios-isidoros.jpg",
      desc: [
        "Ο Άγιος Ισίδωρος βρίσκεται κοντά στο Πλωμάρι και αποτελεί μία από τις πιο διάσημες παραλίες της Λέσβου, γνωστή για τα καθαρά νερά της.",
        "Έχει βραβευθεί με γαλάζια σημαία και διαθέτει οργανωμένες εγκαταστάσεις."
      ],
      extraImages: ["/agios-isidoros.jpg"]
    }
  };

  const beach = beaches[slug];

  if (!beach) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl">Beach not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-white text-black pb-20">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 px-6 pt-6 max-w-4xl mx-auto">
        <Link href="/" className="hover:underline">Αρχική σελίδα</Link> ›{" "}
        <Link href="/beaches" className="hover:underline">Παραλίες</Link> ›{" "}
        <span className="text-gray-800">{beach.name}</span>
      </nav>

      {/* Title */}
      <header className="max-w-4xl mx-auto px-6 mt-4">
        <h1 className="text-4xl font-bold">{beach.name}</h1>
        <p className="text-gray-600 mt-2 text-sm">by <b>{beach.author}</b></p>
      </header>

      {/* Main Image */}
      <div className="max-w-4xl mx-auto mt-8 px-6">
        <img
          src={beach.img}
          alt={beach.name}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Description paragraphs */}
      <article className="max-w-4xl mx-auto px-6 mt-8 text-lg leading-relaxed">
        {beach.desc.map((paragraph: string, index: number) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </article>

      {/* Extra images (optional) */}
      <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-6 mt-10">
        {beach.extraImages.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            className="w-full rounded-lg shadow"
            alt=""
          />
        ))}
      </div>

      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <Link href="/beaches">
          <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
            ← Επιστροφή στις παραλίες
          </button>
        </Link>
      </div>
    </main>
  );
}
