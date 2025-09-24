import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart } from "lucide-react"

export default function ImpliquerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">IMPLIQUEZ-VOUS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="text-center p-8">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Rejoignez un petit groupe</h3>
              <p className="text-gray-600">Connectez-vous avec d'autres croyants et grandissez ensemble dans la foi.</p>
              <Button className="bg-primary hover:bg-primary-dark text-white">EN SAVOIR PLUS</Button>
            </CardContent>
          </Card>

          <Card className="text-center p-8">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Bénévolat</h3>
              <p className="text-gray-600">
                Utilisez vos dons et talents pour servir la communauté et faire une différence.
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-white">COMMENCER</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
