export default function OriginesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">LES ORIGINES DE LA VILLE-ÉTAT</h2>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img src="/ancient-city-aerial-view-historical-architecture.jpg" alt="Origines de la ville" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">DÉCOUVREZ NOTRE HISTOIRE</h3>
                <p className="text-lg">Une ville fondée sur la foi et la tradition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
