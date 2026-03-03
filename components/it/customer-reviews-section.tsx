'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/Gemini_Generated_Image_ltnw6mltnw6mltnw.png',
    text: "Non avrei mai pensato di poter coltivare ibisco dal seme — ma questo kit lo ha reso quasi troppo facile. Ho visto i primi germogli in 5 giorni. Cinque giorni! Ora ho un balcone pieno di colore che fa invidia ai vicini.",
  },
  {
    id: 2,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/Gemini_Generated_Image_4zk4nd4zk4nd4zk4.png',
    text: "L'app è una rivoluzione. Ogni volta che non ero sicura di cosa fare, c'era un video pronto per me. Come avere un esperto di giardinaggio a portata di mano.",
  },
  {
    id: 3,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/Gemini_Generated_Image_qczasfqczasfqcza.png',
    text: "Tutti i miei amici me lo chiedono quando pubblico una foto. Coltivarli dal seme li rende ancora più speciali — dico a tutti 'l'ho coltivato da un semino' e non ci credono.",
  },
  {
    id: 4,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/Gemini_Generated_Image_4tkvsy4tkvsy4tkv.png',
    text: "Tra lavoro, figli e vita quotidiana, non ho quasi mai tempo per me. Ma controllare le mie piantine ogni mattina è diventato il mio piccolo rituale. Guardarle crescere dal nulla fino a questi fiori incredibili... è davvero terapeutico.",
  },
  {
    id: 5,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/Gemini_Generated_Image_u2en2du2en2du2en.png',
    text: "I fiori sono enormi, vibranti e durano tutto il giorno. Sapere che li ho coltivati da un seme, con le mie mani, usando questo kit — quella sensazione non ha prezzo. Non è solo giardinaggio, è creare qualcosa di bello.",
  },
  {
    id: 6,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/image%20874.png',
    text: "Ho comprato semi online prima e ho avuto solo delusioni. Questo è stato completamente diverso. Il substrato, il fertilizzante, l'app — tutto funziona insieme. 9 semi su 10 sono germogliati. Incredibile.",
  },
  {
    id: 7,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/image%20877.png',
    text: "Ci siamo trasferiti di recente e volevo qualcosa che facesse sentire il nuovo giardino come nostro. Coltivare questi ibisco dal seme ha fatto esattamente questo. Ogni fiore sembra personale.",
  },
  {
    id: 8,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/image%20878.png',
    text: "Mia moglie mi ha regalato questo kit per il compleanno. Miglior regalo di sempre. Abbiamo seguito i progressi insieme — dai piccoli germogli ai bellissimi boccioli. È diventata la nostra cosa.",
  },
  {
    id: 9,
    image: 'https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/image%20875.png',
    text: "Apprezzo il design e l'estetica, e l'ibisco a petali doppi è un capolavoro della natura. Coltivarlo da soli lo rende ancora più soddisfacente. I gradienti di colore sono irreali.",
  },
]

export function CustomerReviewsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Dal Seme allo Spettacolo — Le Storie dei Nostri Coltivatori
        </h2>
        
        <div className="relative px-4 md:px-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/3">
                  <div className="flex flex-col h-full">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={review.image || "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Versia%20Garden/Kit%20hibiscus/Gemini_Generated_Image_u2en2du2en2du2en.png"}
                        alt={`Recensione cliente ${review.id}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-4 md:hidden">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'w-8 bg-gray-800'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Vai alla slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
