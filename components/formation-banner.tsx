import { Button } from "@/components/ui/button"

export default function FormationBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between text-white">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="bg-white p-2 rounded">
              <img src="/lunion-academy-logo.jpg" alt="Lunion Academy" className="h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">FORMATION EN DÉVELOPPEMENT</h3>
              <h4 className="text-lg">WEB BY LUNION-ACADEMY</h4>
              <p className="text-sm">Devenez Développeur Web en 6 MOIS</p>
              <p className="text-xs">Pour plus d'information</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">Cliquez ici</Button>
            <div className="text-center">
              <div className="bg-red-600 rounded-full px-3 py-1 text-xs mb-1">formation de 6 mois</div>
              <div className="text-lg font-bold">50,000</div>
              <div className="text-sm">FCFA</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm">
          <p>#Transformationdigitale | #Formationdeveloppementweb</p>
        </div>
      </div>
    </section>
  )
}
