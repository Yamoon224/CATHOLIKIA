import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterModal from "@/components/newsletter-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Catholikia - Adorez à tout moment et en tout lieu",
  description: "Plateforme catholique pour la foi, les actualités et les événements",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterModal />
      </body>
    </html>
  )
}
