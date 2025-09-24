import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

export default function VieDeFoiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/church-interior-with-priest-in-purple-vestments.jpg")',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center text-white px-4">
          <div className="border-4 border-white p-8 inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">VIE DE FOI</h1>
          </div>
        </div>
      </section>

      {/* Content will be added here based on future requirements */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Contenu à venir</h2>
          <p className="text-gray-500">
            Cette section sera développée prochainement avec du contenu sur la vie de foi.
          </p>
        </div>
      </section>

      <FormationBanner />
      <NewsletterSection />
    </div>
  )
}
