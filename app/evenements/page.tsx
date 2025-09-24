"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getEvents } from "@/lib/api"
import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  image: string
  category: string
}

export default function EvenementsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents()
        setEvents(data.events || mockEvents)
      } catch (error) {
        console.error("Failed to fetch events:", error)
        setEvents(mockEvents)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const mockEvents: Event[] = [
    {
      id: "1",
      title: "Groupe d'étude biblique hebdomadaire",
      description:
        "Plongez plus profondément dans la Parole de Dieu avec nous ! Rejoignez notre étude biblique hebdomadaire pour des discussions enrichissantes et une croissance spirituelle.",
      date: "2 NOVEMBRE 2024",
      time: "18:00 - 20:00",
      image: "/people-studying-bible-together.jpg",
      category: "Étude",
    },
    {
      id: "2",
      title: "les jeunes adultes se connectent",
      description:
        "Un espace où les jeunes adultes peuvent se réunir, grandir dans la foi et nouer des amitiés durables. Rejoignez-nous pour des discussions, des moments de culte et de détente.",
      date: "2 NOVEMBRE 2024",
      time: "19:00 - 21:00",
      image: "/young-adults-church-group.jpg",
      category: "Jeunesse",
    },
    {
      id: "3",
      title: "rassemblement de prière en milieu de semaine",
      description:
        "Retrouvez-vous en milieu de semaine avec la communauté pour un moment de prière, de réflexion et d'encouragement. Cherchons Dieu ensemble.",
      date: "2 NOVEMBRE 2024",
      time: "18:30 - 19:30",
      image: "/prayer-meeting-church.jpg",
      category: "Prière",
    },
    {
      id: "4",
      title: "Dîner de connexion du pasteur",
      description:
        "Vous êtes nouveau dans notre église ? Notre pasteur principal, Neil, et son épouse Vicki aimeraient beaucoup vous connaître davantage !",
      date: "2 NOVEMBRE 2024",
      time: "19:00 - 21:00",
      image: "/people-studying-bible-together.jpg",
      category: "Communauté",
    },
  ]

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
          <h1 className="text-4xl md:text-6xl font-bold text-balance">ÉVÉNEMENTS</h1>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg" />
                  <CardContent className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                      {event.date}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{event.time}</span>
                      <Link href={`/actualites/${event.id}`}>
                        <Button variant="outline" size="sm">
                          DÉTAILS
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <FormationBanner />
      <NewsletterSection />
    </div>
  )
}
