"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getArticles } from "@/lib/api"

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

export default function ActualitesSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles(1, 6)
        setArticles(data.articles || mockArticles)
      } catch (error) {
        console.error("Failed to fetch articles:", error)
        setArticles(mockArticles)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const mockArticles: Article[] = [
    {
      id: "1",
      title: "Voyager ensemble dans la foi, l'espoir et l'amour divin",
      excerpt: "Une réflexion sur l'importance de la communauté dans notre parcours spirituel.",
      image: "/church-interior-with-wooden-pews.jpg",
      date: "2024-01-15",
      category: "Foi",
    },
    {
      id: "2",
      title: "Entrer dans la beauté - la foi rencontre le bonheur du mariage",
      excerpt: "Comment la foi enrichit et sanctifie l'union matrimoniale.",
      image: "/church-wedding-ceremony.jpg",
      date: "2024-01-12",
      category: "Mariage",
    },
    {
      id: "3",
      title: "Vivez l'adoration guidée par l'esprit dans notre communauté ecclésiale",
      excerpt: "Découvrez les différentes formes d'adoration dans notre paroisse.",
      image: "/people-praying-together-outdoors.jpg",
      date: "2024-01-10",
      category: "Adoration",
    },
  ]

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">ACTUALITÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg" />
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">ACTUALITÉS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString("fr-FR")}</span>
                  <Link href={`/actualites/${article.id}`}>
                    <Button variant="outline" size="sm">
                      DÉTAILS
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/actualites">
            <Button className="bg-primary hover:bg-primary-dark text-white">VOIR PLUS D'ACTUALITÉS</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
