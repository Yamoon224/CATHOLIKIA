import { Button } from "@/components/ui/button"
import { Download, Lock, Calendar, CreditCard } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/church-interior-with-priest-in-purple-vestments.jpg")',
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
          ADOREZ À TOUT MOMENT ET
          <br />
          EN TOUT LIEU
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-black">
            <Download className="h-4 w-4 mr-2" />
            TÉLÉCHARGER
          </Button>
          <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-black">
            <Lock className="h-4 w-4 mr-2" />
            SÉCURISÉ
          </Button>
          <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-black">
            <Calendar className="h-4 w-4 mr-2" />
            ÉVÉNEMENTS
          </Button>
          <Button variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-black">
            <CreditCard className="h-4 w-4 mr-2" />
            DONS SÉCURISÉS
          </Button>
        </div>
      </div>
    </section>
  )
}
