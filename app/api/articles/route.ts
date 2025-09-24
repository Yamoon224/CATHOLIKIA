import { type NextRequest, NextResponse } from "next/server"

const mockArticles = [
  {
    id: "1",
    title: "Voyager ensemble dans la foi, l'espoir et l'amour divin",
    excerpt: "Une réflexion sur l'importance de la communauté dans notre parcours spirituel.",
    content: "Le ministère des enfants aide les enfants à grandir et à devenir des adolescents spirituels...",
    image: "/church-interior-with-wooden-pews.jpg",
    date: "2024-01-15",
    category: "Foi",
    author: "Père Jean-Baptiste",
    featured: false,
  },
  {
    id: "2",
    title: "Entrer dans la beauté - la foi rencontre le bonheur du mariage",
    excerpt: "Comment la foi enrichit et sanctifie l'union matrimoniale.",
    content: "Le mariage est un sacrement qui unit deux âmes dans l'amour de Dieu...",
    image: "/church-wedding-ceremony.jpg",
    date: "2024-01-12",
    category: "Mariage",
    author: "Sœur Marie-Claire",
    featured: false,
  },
  {
    id: "3",
    title: "Vivez l'adoration guidée par l'esprit dans notre communauté ecclésiale",
    excerpt: "Découvrez les différentes formes d'adoration dans notre paroisse.",
    content: "L'adoration est au cœur de notre vie spirituelle communautaire...",
    image: "/people-praying-together-outdoors.jpg",
    date: "2024-01-10",
    category: "Adoration",
    author: "Père Michel",
    featured: false,
  },
  {
    id: "featured",
    title: "Le pape français appelle à une mobilisation mondiale pour la paix en Afrique",
    excerpt: "Un appel urgent pour la paix et la réconciliation sur le continent africain.",
    content: "Dans un message poignant, le Saint-Père a lancé un appel à la communauté internationale...",
    image: "/church-interior-with-priest-in-purple-vestments.jpg",
    date: "2024-01-20",
    category: "Actualité",
    author: "Vatican News",
    featured: true,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "6")
    const category = searchParams.get("category")

    let filteredArticles = mockArticles.filter((article) => !article.featured)

    if (category) {
      filteredArticles = filteredArticles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex)

    const totalPages = Math.ceil(filteredArticles.length / limit)
    const featuredArticle = mockArticles.find((article) => article.featured)

    return NextResponse.json(
      {
        articles: paginatedArticles,
        featured: featuredArticle,
        pagination: {
          currentPage: page,
          totalPages,
          totalArticles: filteredArticles.length,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
