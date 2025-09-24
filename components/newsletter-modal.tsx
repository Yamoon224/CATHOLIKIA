"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios"

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth > 768) {
        setIsOpen(true)
      }
    }, 5000) // Show modal after 5 seconds on desktop only

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !accepted) return

    setLoading(true)
    try {
      await axios.post("/api/newsletter", { email })
      setIsOpen(false)
      setEmail("")
      setAccepted(false)
    } catch (error) {
      console.error("Newsletter subscription failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 bg-black/50"
      style={{ zIndex: 9999 }}
    >
      <div className="relative max-w-4xl w-full bg-black/80 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20376-m9opLuBpQgim7i4J4YgqWFGmCqnIXV.png")',
          }}
        />
        <div className="relative hero-overlay">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="flex flex-col lg:flex-row items-center min-h-[500px]">
            {/* Left side - Logo */}
            <div className="lg:w-1/2 p-8 flex items-center justify-center">
              <img src="/images/logo.png" alt="Catholikia" className="h-20 w-auto brightness-0 invert" />
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2 p-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                DÉBLOQUEZ <span className="text-yellow-400">15% DE RÉDUCTION</span>
                <br />
                SUR VOTRE <span className="text-yellow-400">PREMIER ACHAT!</span>
              </h2>

              <p className="text-center mb-8 text-gray-200">
                Inscrivez-vous pour recevoir des mises à jour mensuelles sur les missions, les demandes de prière, les
                histoires d'impact et les moyens de vous impliquer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white text-black"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading || !accepted}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  >
                    {loading ? "ENVOI..." : "ENVOYER UN MESSAGE"}
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="accept"
                    checked={accepted}
                    onCheckedChange={(checked) => setAccepted(checked as boolean)}
                  />
                  <label htmlFor="accept" className="text-sm text-gray-200">
                    J'accepte la politique de confidentialité et de cookies pour recevoir
                  </label>
                </div>
              </form>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-center">RÉSEAUX SOCIAUX</h3>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Youtube className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
