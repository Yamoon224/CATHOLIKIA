"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeNewsletter } from "@/lib/api"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      await subscribeNewsletter(email)
      setMessage("Merci pour votre inscription!")
      setEmail("")
    } catch (error) {
      setMessage("Erreur lors de l'inscription. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">RESTEZ CONNECTÉS. INSPIREZ-VOUS</h2>
            <p className="text-gray-600 mb-8">
              Inscrivez-vous pour recevoir des mises à jour mensuelles sur les missions, les demandes de prière, les
              histoires d'impact et les moyens de vous impliquer
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary-dark text-white">
                {loading ? "ENVOI..." : "ENVOYER"}
              </Button>
            </form>

            {message && (
              <p className={`text-sm ${message.includes("Merci") ? "text-green-600" : "text-red-600"}`}>{message}</p>
            )}
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="/placeholder-94cgc.png" alt="Enfants souriants" className="rounded-lg" />
            <img src="/hands-forming-heart-shape.jpg" alt="Mains en forme de coeur" className="rounded-lg" />
            <img
              src="/together-we-will-change-the-world-text.jpg"
              alt="Together we will change the world"
              className="rounded-lg col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
