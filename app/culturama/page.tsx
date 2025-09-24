import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

export default function CulturamaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/church-interior-with-priest-in-purple-vestments.jpg")',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">CULTURAMA</h1>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Contenu à venir</h2>
          <p className="text-gray-500">Cette section sera développée prochainement.</p>
        </div>
      </section>

      <FormationBanner />
      <NewsletterSection />
    </div>
  )
}
