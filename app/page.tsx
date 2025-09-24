import HeroSection from "@/components/hero-section"
import ActualitesSection from "@/components/actualites-section"
import FormationBanner from "@/components/formation-banner"
import OriginesSection from "@/components/origines-section"
import EvenementsSection from "@/components/evenements-section"
import NewsletterSection from "@/components/newsletter-section"
import ImpliquerSection from "@/components/impliquer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ActualitesSection />
      <FormationBanner />
      <OriginesSection />
      <EvenementsSection />
      <NewsletterSection />
      <ImpliquerSection />
    </div>
  )
}
