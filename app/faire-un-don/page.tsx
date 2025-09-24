"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { processDonation } from "@/lib/api"
import FormationBanner from "@/components/formation-banner"
import NewsletterSection from "@/components/newsletter-section"

export default function FaireUnDonPage() {
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    anonymous: false,
  })
  const [loading, setLoading] = useState(false)

  const predefinedAmounts = ["1000", "2500", "5000", "10000", "25000", "50000"]
  const currentAmount = 3025000
  const targetAmount = 5000000
  const donorsCount = 11
  const progressPercentage = (currentAmount / targetAmount) * 100

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault()
    const amount = customAmount || donationAmount
    if (!amount || !donorInfo.name || !donorInfo.email) return

    setLoading(true)
    try {
      await processDonation(Number.parseInt(amount), donorInfo)
      alert("Merci pour votre don généreux!")
      // Reset form
      setDonationAmount("")
      setCustomAmount("")
      setDonorInfo({
        name: "",
        email: "",
        phone: "",
        address: "",
        anonymous: false,
      })
    } catch (error) {
      alert("Erreur lors du traitement du don. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
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
          <div className="border-4 border-white p-8 inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">FAIRE UN DON</h1>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div>
              <img
                src="/people-praying-together-outdoors.jpg"
                alt="Personnes en prière"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Right side - Donation Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                SAUVEZ DES VIES AVEC
                <br />
                UN SEUL DON
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Votre générosité fait la différence ! Chaque don nous aide à répandre l'espoir, à servir notre
                communauté et à partager l'amour de Dieu avec ceux qui sont dans le besoin. Merci de participer à cette
                mission !
              </p>

              {/* Progress Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{currentAmount.toLocaleString("fr-FR")} F</div>
                  <div className="text-sm text-gray-600">COLLECTÉ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{donorsCount}</div>
                  <div className="text-sm text-gray-600">DONS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{targetAmount.toLocaleString("fr-FR")} F</div>
                  <div className="text-sm text-gray-600">OBJECTIF</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="text-sm text-gray-600 mt-2">{progressPercentage.toFixed(1)}% de l'objectif atteint</div>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg"
                onClick={() => document.getElementById("donation-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                DONNEZ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FormationBanner />

      {/* Donation Form */}
      <section id="donation-form" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">FAIRE VOTRE DON</h2>
            <p className="text-gray-600">Choisissez le montant de votre don et remplissez vos informations</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleDonation} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Montant du don (FCFA)</Label>
                  <RadioGroup
                    value={donationAmount}
                    onValueChange={setDonationAmount}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {predefinedAmounts.map((amount) => (
                      <div key={amount} className="flex items-center space-x-2">
                        <RadioGroupItem value={amount} id={amount} />
                        <Label
                          htmlFor={amount}
                          className="cursor-pointer p-3 border rounded-lg flex-1 text-center hover:bg-gray-50"
                        >
                          {Number.parseInt(amount).toLocaleString("fr-FR")} F
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Autre montant</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Entrez votre montant"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setDonationAmount("")
                      }}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input
                      id="address"
                      value={donorInfo.address}
                      onChange={(e) => setDonorInfo({ ...donorInfo, address: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="anonymous"
                    checked={donorInfo.anonymous}
                    onCheckedChange={(checked) => setDonorInfo({ ...donorInfo, anonymous: checked as boolean })}
                  />
                  <Label htmlFor="anonymous">Je souhaite faire un don anonyme</Label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={loading || (!donationAmount && !customAmount)}
                    className="bg-primary hover:bg-primary-dark text-white px-12 py-3 text-lg"
                  >
                    {loading ? "TRAITEMENT..." : "FAIRE LE DON"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}
