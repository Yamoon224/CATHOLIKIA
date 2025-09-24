import { type NextRequest, NextResponse } from "next/server"

const mockArticles = [
  {
    id: "1",
    title: "GROUPE D'ÉTUDE BIBLIQUE HEBDOMADAIRE",
    content:
      "Pour la science, la musique, le sport, etc., l'Europe utilise la même vocabulaire. Les langues ne diffèrent que par leur grammaire, leur prononciation et les mots les plus courants. Chacun pourrait apprendre une nouvelle langue commune serait, sophistiquée : la grammaire serait plus simple et plus régulière que celle des langues individuelles. La nouvelle langue commune sera plus simple et plus régulière que les langues européennes existantes.",
    image: "/people-studying-bible-together.jpg",
    date: "5 NOVEMBRE",
    time: "à 8h00 - 17h00",
    category: "Événement",
    author: "KTO",
    type: "event",
    eventDetails: {
      location: "Centre communautaire du Fonds de l'Église",
      organizer: "KTO",
      phone: "123456789",
      email: "contact@example.com",
      cost: "Entrée libre",
    },
  },
  {
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
    type: "article",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const article = mockArticles.find((a) => a.id === params.id)

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    // Simulate related articles
    const relatedArticles = [
      {
        id: "3",
        title: "Entrez dans la beauté - là où l'adoration rencontre le bonheur du mariage",
        image: "/church-wedding-ceremony.jpg",
        date: "1 juin 2024",
        category: "Mariage",
      },
      {
        id: "4",
        title: "Vivez l'adoration guidée par l'esprit dans notre communauté ecclésiale",
        image: "/people-praying-together-outdoors.jpg",
        date: "1 juin 2024",
        category: "Adoration",
      },
    ]

    return NextResponse.json(
      {
        article,
        relatedArticles,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching article:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
