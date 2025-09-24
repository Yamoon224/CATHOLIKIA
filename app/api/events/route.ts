import { type NextRequest, NextResponse } from "next/server"

const mockEvents = [
  {
    id: "1",
    title: "Groupe d'étude biblique hebdomadaire",
    description:
      "Plongez plus profondément dans la Parole de Dieu avec nous ! Rejoignez notre étude biblique hebdomadaire pour des discussions enrichissantes et une croissance spirituelle.",
    date: "2024-02-02",
    time: "18:00 - 20:00",
    image: "/people-studying-bible-together.jpg",
    category: "Étude",
    location: "Centre communautaire",
    organizer: "Père Jean-Baptiste",
  },
  {
    id: "2",
    title: "les jeunes adultes se connectent",
    description:
      "Un espace où les jeunes adultes peuvent se réunir, grandir dans la foi et nouer des amitiés durables. Rejoignez-nous pour des discussions, des moments de culte et de détente.",
    date: "2024-02-06",
    time: "19:00 - 21:00",
    image: "/young-adults-church-group.jpg",
    category: "Jeunesse",
    location: "Salle de jeunesse",
    organizer: "Équipe jeunesse",
  },
  {
    id: "3",
    title: "rassemblement de prière en milieu de semaine",
    description:
      "Retrouvez-vous en milieu de semaine avec la communauté pour un moment de prière, de réflexion et d'encouragement. Cherchons Dieu ensemble.",
    date: "2024-02-20",
    time: "18:30 - 19:30",
    image: "/prayer-meeting-church.jpg",
    category: "Prière",
    location: "Chapelle principale",
    organizer: "Équipe de prière",
  },
  {
    id: "4",
    title: "Dîner de connexion du pasteur",
    description:
      "Vous êtes nouveau dans notre église ? Notre pasteur principal, Neil, et son épouse Vicki aimeraient beaucoup vous connaître davantage !",
    date: "2024-02-25",
    time: "19:00 - 21:00",
    image: "/people-studying-bible-together.jpg",
    category: "Communauté",
    location: "Salle de réception",
    organizer: "Pasteur Neil",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const upcoming = searchParams.get("upcoming") === "true"

    let filteredEvents = [...mockEvents]

    if (category) {
      filteredEvents = filteredEvents.filter((event) => event.category.toLowerCase() === category.toLowerCase())
    }

    if (upcoming) {
      const now = new Date()
      filteredEvents = filteredEvents.filter((event) => new Date(event.date) >= now)
    }

    // Sort by date
    filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return NextResponse.json(
      {
        events: filteredEvents,
        total: filteredEvents.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
