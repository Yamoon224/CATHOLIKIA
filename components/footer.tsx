import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Catholikia"
              width={150}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <div className="space-y-2 text-sm text-gray-300">
              <p>Abidjan, Marcory</p>
              <p>1-123-456-7890</p>
              <p>catholikia@example.org</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-yellow-400 hover:text-yellow-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/actualites" className="hover:text-white">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/effata" className="hover:text-white">
                  Effata
                </Link>
              </li>
              <li>
                <Link href="/vie-de-foi" className="hover:text-white">
                  Vie de Foi
                </Link>
              </li>
              <li>
                <Link href="/parlons-en" className="hover:text-white">
                  Parlons-en!
                </Link>
              </li>
              <li>
                <Link href="/culturama" className="hover:text-white">
                  Culturama
                </Link>
              </li>
              <li>
                <Link href="/tribunes" className="hover:text-white">
                  Tribunes
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Collecte de fonds */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Collecte de fonds</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Prendre soin des âmes - apporter de l'espoir à chaque repas.</p>
              <p>La foi en action : partager la parole et soutenir les âmes</p>
              <p>Espoir pour les sans-abri : aidez-nous à leur fournir un abri et un soutien</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
          <p>This is a sample website - christmakers © 2025 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
