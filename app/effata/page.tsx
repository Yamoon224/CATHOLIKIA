import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

export default function EffataPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              EFFATA OUVRE-TOI...
              <br />
              COMME JÉSUS L'ENTEND !
            </h1>
          </div>
        </div>
      </section>

      {/* Effata Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="overflow-hidden bg-gradient-to-r from-orange-100 to-yellow-100">
            <CardContent className="p-0">
              <div className="relative">
                <img src="/placeholder-94cgc.png" alt="EFFATA" className="w-full h-64 object-cover" />
                <div className="absolute bottom-4 right-4 text-sm text-gray-600">© Père Nicaise</div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  Dans nos vies de bric et de broc, Dieu se propose d'intervenir pour restaurer notre harmonie
                  intérieure. Il dépend du croyant de s'ouvrir à cette perspective. C'est l'appel de Jésus, que nous
                  fait entendre le père Nicaise Misère (missionnaire Marianiste).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Connaissez-vous Effata Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">CONNAISSEZ-VOUS EFFATA?</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/people-praying-together-outdoors.jpg"
                alt="Groupe de prière"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-4 text-sm text-gray-600">
                Cette parole que Jésus a prononcée pour un sourd-muet, il nous propose de la prendre comme programme
                d'ouverture, et nous dit qu'elle touche aussi chacun.
              </p>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="leading-relaxed">
                EFFATA, c'est notre programme de centre de retraitement à domicile à travers Dieu pour découvrir et
                vivre pleinement la joie de l'Évangile. Nous vous proposons de découvrir et de vivre pleinement la joie
                de l'Évangile à travers des retraites spirituelles, des formations et des accompagnements personnalisés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FormationBanner />

      {/* Besoin d'aide Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BESOIN D'AIDE ? NOUS SOMMES LÀ POUR VOUS.</h2>
            <p className="text-gray-600">
              Si vous avez des questions sans réponse d'aide, n'hésitez pas à nous contacter. Nous proposons un soutien
              attentionné, une écoute, une aide spirituelle et un accompagnement spirituel.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">NOM ET PRÉNOM</label>
                  <Input placeholder="Votre nom complet" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">TÉLÉPHONE</label>
                  <Input placeholder="Votre numéro" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-MAIL</label>
                <Input type="email" placeholder="Votre email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">MESSAGE</label>
                <Textarea rows={4} placeholder="Votre message" />
              </div>
              <div className="text-center">
                <Button className="bg-primary hover:bg-primary-dark text-white px-8">ENVOYER</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}
