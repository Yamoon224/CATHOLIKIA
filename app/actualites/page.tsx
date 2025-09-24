"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getArticles } from "@/lib/api"
import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

export default function ActualitesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles(currentPage, 9)
        setArticles(data.articles || mockArticles)
        setTotalPages(data.totalPages || 3)
        setFeaturedArticle(data.featured || mockFeaturedArticle)
      } catch (error) {
        console.error("Failed to fetch articles:", error)
        setArticles(mockArticles)
        setFeaturedArticle(mockFeaturedArticle)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [currentPage])

  const mockFeaturedArticle: Article = {
    id: "featured",
    title: "Le pape français appelle à une mobilisation mondiale pour la paix en Afrique",
    excerpt: "Un appel urgent pour la paix et la réconciliation sur le continent africain.",
    image: "/church-interior-with-priest-in-purple-vestments.jpg",
    date: "2024-01-20",
    category: "Actualité",
  }

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
    {
      id: "4",
      title: "Voyager ensemble dans la foi, l'espoir et l'amour divin",
      excerpt: "Une réflexion sur l'importance de la communauté dans notre parcours spirituel.",
      image: "/church-interior-with-wooden-pews.jpg",
      date: "2024-01-08",
      category: "Foi",
    },
    {
      id: "5",
      title: "Entrer dans la beauté - la foi rencontre le bonheur du mariage",
      excerpt: "Comment la foi enrichit et sanctifie l'union matrimoniale.",
      image: "/church-wedding-ceremony.jpg",
      date: "2024-01-05",
      category: "Mariage",
    },
    {
      id: "6",
      title: "Vivez l'adoration guidée par l'esprit dans notre communauté ecclésiale",
      excerpt: "Découvrez les différentes formes d'adoration dans notre paroisse.",
      image: "/people-praying-together-outdoors.jpg",
      date: "2024-01-03",
      category: "Adoration",
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
          <h1 className="text-4xl md:text-6xl font-bold text-balance">ACTUALITÉS</h1>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">DERNIÈRES NOUVELLES</h2>
            <Card className="overflow-hidden">
              <div className="relative h-64 md:h-96">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm">
                  {new Date(featuredArticle.date).toLocaleDateString("fr-FR")}
                </div>
                <div className="absolute bottom-4 right-4">
                  <Link href={`/actualites/${featuredArticle.id}`}>
                    <Button className="bg-white text-black hover:bg-gray-100">LIRE LA SUITE</Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{featuredArticle.title}</h3>
                <p className="text-gray-600">{featuredArticle.excerpt}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <FormationBanner />

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">ACTUALITÉS</h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                      {article.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(article.date).toLocaleDateString("fr-FR")}
                      </span>
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
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-primary text-white" : ""}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}
