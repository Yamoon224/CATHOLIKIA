"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "ACTUALITÉS", href: "/actualites" },
  { name: "EFFATA", href: "/effata" },
  { name: "VIE DE FOI", href: "/vie-de-foi" },
  { name: "PARLONS-EN!", href: "/parlons-en" },
  { name: "CULTURAMA", href: "/culturama" },
  { name: "TRIBUNES", href: "/tribunes" },
  { name: "À PROPOS", href: "/a-propos" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/images/logo.png" alt="Catholikia" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Link href="/faire-un-don">
            <Button className="bg-primary hover:bg-primary-dark text-white">CATHOLIKIA MAG</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image src="/images/logo.png" alt="Catholikia" width={120} height={32} className="h-8 w-auto" />
              </Link>
              <Button variant="ghost" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="/faire-un-don">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">CATHOLIKIA MAG</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
