"use client"

import Image from "next/image"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

interface UpsellModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  onDecline: () => void
}

export function UpsellModal({ isOpen, onClose, onAccept, onDecline }: UpsellModalProps) {
  const pathname = usePathname()
  const isItalian = pathname?.startsWith('/it')
  const isSpanish = pathname?.startsWith('/es')
  const isFrench = pathname?.startsWith('/fr')
  const isUS = pathname?.startsWith('/us')

  if (!isOpen) return null

  const handleAccept = () => {
    window.location.href = "https://mvn0vr-9t.myshopify.com/cart/50672673653016:1"
  }

  const handleDecline = () => {
    window.location.href = "https://mvn0vr-9t.myshopify.com/cart/50689694728472:1"
  }

  const getTitle = () => {
    if (isItalian) return "Congratulazioni, è stato selezionato"
    if (isSpanish) return "Felicidades, ha sido seleccionado"
    if (isFrench) return "Félicitations, vous avez été sélectionné"
    if (isUS) return "Congratulations, you've been selected"
    return "Congratulations, you've been selected"
  }

  const getSubtitle = () => {
    if (isItalian) return "Lei è tra i pochi scelti per ricevere il Kit di Coltivazione Plus — un upgrade esclusivo consegnato a casa Sua."
    if (isSpanish) return "Usted es uno de los pocos elegidos para recibir el Kit de Cultivo Plus — una actualización exclusiva entregada en su puerta."
    if (isFrench) return "Vous faites partie des rares personnes choisies pour recevoir le Kit de Culture Plus — une mise à niveau exclusive livrée chez vous."
    if (isUS) return "You are one of a select few chosen to receive the Plus Growing Kit — an exclusive upgrade delivered to your door."
    return "You are one of a select few chosen to receive the Plus Growing Kit — an exclusive upgrade delivered to your door."
  }

  const getContents = () => {
    if (isItalian) return "In questo kit riceverà: 20 Semi di Ibisco + 20 Semi di Girasole Gigante + 20 Semi di Petunia Galaxy — tutti pre-attivati, con substrato, fertilizzante e accesso completo all'app per ogni varietà."
    if (isSpanish) return "En este kit recibirá: 20 Semillas de Hibisco + 20 Semillas de Girasol Gigante + 20 Semillas de Petunia Galaxy — todas pre-activadas, con sustrato, fertilizante y acceso completo a la app para cada variedad."
    if (isFrench) return "Dans ce kit, vous recevrez : 20 graines d'hibiscus + 20 graines de tournesol géant + 20 graines de pétunia Galaxy — toutes pré-activées, avec substrat, engrais et accès complet à l'appli pour chaque variété."
    return "In this kit, you'll receive: 20 Hibiscus Seeds + 20 Giant Sunflower Seeds + 20 Galaxy Petunia Seeds — all pre-activated, with substrate, fertilizer, and full app access for every variety."
  }

  const getPriceOld = () => {
    if (isUS) return "$39.80"
    return "€39,80"
  }

  const getPriceNew = () => {
    if (isUS) return "$24.80"
    return "€24,80"
  }

  const getShipping = () => {
    if (isItalian) return "+ Spedizione Gratuita"
    if (isSpanish) return "+ Envío Gratuito"
    if (isFrench) return "+ Livraison Gratuite"
    return "+ Free Delivery"
  }

  const getAcceptCTA = () => {
    if (isItalian) return "Sì, Voglio il Kit di Coltivazione Plus"
    if (isSpanish) return "Sí, Quiero el Kit de Cultivo Plus"
    if (isFrench) return "Oui, Je Veux le Kit de Culture Plus"
    if (isUS) return "Yes, I Want the Plus Growing Kit"
    return "Yes, I Want the Plus Growing Kit"
  }

  const getDeclineCTA = () => {
    if (isItalian) return "Solo il Kit Coltivazione Ibisco"
    if (isSpanish) return "Solo el Kit de Cultivo de Hibisco"
    if (isFrench) return "Juste le Kit de Culture d'Hibiscus"
    if (isUS) return "Just the Hibiscus Growing Kit"
    return "Just the Hibiscus Growing Kit"
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-balance">
            {getTitle()}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-center text-gray-700 text-balance">
            {getSubtitle()}
          </p>

          {/* Image */}
          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src="/images/design-mode/Group%201089.png"
              alt="Plus Kit with Hibiscus, Sunflower, and Petunia plants"
              width={600}
              height={400}
              sizes="(max-width: 512px) 100vw, 512px"
              className="w-full h-auto"
            />
          </div>

          {/* Kit contents description */}
          <p className="text-center text-base sm:text-lg text-gray-800">
            {getContents()}
          </p>

          {/* Price section */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-red-600 line-through text-lg sm:text-xl font-semibold">{getPriceOld()}</span>
              <span className="text-green-600 text-3xl sm:text-4xl font-bold">{getPriceNew()}</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-gray-800">{getShipping()}</p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-2">
            <Button
              onClick={handleAccept}
              className="w-full h-14 text-base font-bold rounded-md bg-green-600 hover:bg-green-700 text-white"
            >
              {getAcceptCTA()}
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="w-full h-14 text-base font-bold rounded-md bg-gray-400 hover:bg-gray-500 text-white border-gray-400"
            >
              {getDeclineCTA()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
