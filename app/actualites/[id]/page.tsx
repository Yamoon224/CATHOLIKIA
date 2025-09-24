"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MapPin, User, Mail, Phone } from "lucide-react"
import { sendContactMessage } from "@/lib/api"
import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

interface Article {
  id: string
  title: string
  content: string
  image: string
  date: string
  category: string
  author?: string
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  organizer: string
  phone: string
  email: string
  cost: string
  description: string
  image: string
}

export default function ArticleDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [event, setEvent] = useState<Event | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Simulate API call
        if (params.id === "1") {
          setEvent(mockEvent)
        } else {
          setArticle(mockArticle)
        }
        setRelatedArticles(mockRelatedArticles)
      } catch (error) {
        console.error("Failed to fetch article:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [params.id])

  const mockEvent: Event = {
    id: "1",
    title: "GROUPE D'ÉTUDE BIBLIQUE HEBDOMADAIRE",
    date: "5 NOVEMBRE",
    time: "à 8h00 - 17h00",
    location: "Centre communautaire du Fonds de l'Église",
    organizer: "KTO",
    phone: "123456789",
    email: "contact@example.com",
    cost: "Entrée libre",
    description:
      "Pour la science, la musique, le sport, etc., l'Europe utilise la même vocabulaire. Les langues ne diffèrent que par leur grammaire, leur prononciation et les mots les plus courants. Chacun pourrait apprendre une nouvelle langue commune serait, sophistiquée : la grammaire serait plus simple et plus régulière que celle des langues individuelles. La nouvelle langue commune sera plus simple et plus régulière que les langues européennes existantes.",
    image: "/people-studying-bible-together.jpg",
  }

  const mockArticle: Article = {
    id: "2",
    title: "VOYAGER ENSEMBLE DANS LA FOI, L'ESPOIR ET L'AMOUR DIVIN",
    content: `Le ministère des enfants aide les enfants à grandir et à devenir des adolescents spirituels, des jeunes adultes et des adultes qui aiment Dieu et servent les autres. En tant que parent ou tuteur, vous jouez un rôle important dans le développement spirituel de votre enfant. Nous croyons qu'il est possible d'établir une base spirituelle solide qui ancrera nos enfants dans la foi et les aidera à naviguer dans les défis de la vie. Nous croyons que tous les dimanches, le service se réunit tous les dimanches.

Notre programme comprend d'études dynamiques que les enfants apprécient et dont ils tirent un apprentissage précieux, ainsi que des ressources familiales conçues pour répondre aux besoins des familles d'aujourd'hui. Les enfants sont encouragés à ouvrir leur cœur à Dieu par le culte et l'étude dans un environnement sûr et bienveillant.

Notre directrice de la crèche, Monique Rice, et notre directrice des enfants, Jill Gosell, sont toutes deux disponibles pour vous aider à trouver la place la plus importante de tout parent : aider votre enfant à développer une relation avec Dieu !

Le Ciel fait de la place à chaque enfant, et nous aussi.`,
    image: "/church-interior-with-wooden-pews.jpg",
    date: "2024-01-15",
    category: "Foi",
    author: "Père Jean-Baptiste",
  }

  const mockRelatedArticles: Article[] = [
    {
      id: "3",
      title: "Entrez dans la beauté - là où l'adoration rencontre le bonheur du mariage",
      content: "",
      image: "/church-wedding-ceremony.jpg",
      date: "1 juin 2024",
      category: "Mariage",
    },
    {
      id: "4",
      title: "Vivez l'adoration guidée par l'esprit dans notre communauté ecclésiale",
      content: "",
      image: "/people-praying-together-outdoors.jpg",
      date: "1 juin 2024",
      category: "Adoration",
    },
  ]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await sendContactMessage(contactForm)
      setContactForm({ name: "", email: "", message: "" })
      alert("Message envoyé avec succès!")
    } catch (error) {
      alert("Erreur lors de l'envoi du message")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

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
          <h1 className="text-4xl md:text-6xl font-bold text-balance">{event ? "ÉVÉNEMENTS" : "ACTUALITÉS"}</h1>
        </div>
      </section>

      <FormationBanner />

      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {event ? (
                // Event Details
                <div>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
                    <div className="border-2 border-black inline-block px-8 py-4">
                      <div className="text-2xl font-bold">{event.date}</div>
                      <div className="text-lg">{event.time}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Détails</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date} 2027</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">TIME:</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">Coût :</span>
                          <span>{event.cost}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Organisateur</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span>{event.organizer}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{event.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{event.email}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Lieu</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 mt-1" />
                          <span>{event.location}</span>
                        </div>
                        <Button className="bg-primary hover:bg-primary-dark text-white mt-4">VOIR LE MAPS</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Article Content
                article && (
                  <div>
                    <div className="mb-8">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>

                    <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

                    <div className="prose max-w-none">
                      {article.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              )}

              {/* Contact Form */}
              <div className="mt-16 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">DITES QUELQUE CHOSE</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">E-MAIL</label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">NOM</label>
                      <Input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">MESSAGE</label>
                    <Textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-primary-dark text-white">
                    ENVOYER
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-bold mb-6">AUTRES NOUVELLES</h3>
                <div className="space-y-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Card key={relatedArticle.id} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={relatedArticle.image || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4 flex-1">
                          <div className="text-xs text-primary mb-1">{relatedArticle.date}</div>
                          <h4 className="text-sm font-semibold line-clamp-2 mb-2">{relatedArticle.title}</h4>
                          <Link href={`/actualites/${relatedArticle.id}`}>
                            <Button variant="outline" size="sm">
                              DÉTAILS
                            </Button>
                          </Link>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterSection />
    </div>
  )
}
