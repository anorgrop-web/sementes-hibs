import { Star } from 'lucide-react'
import Image from "next/image"

export function OurStorySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/design-mode/Gemini_Generated_Image_bh8t6jbh8t6jbh8t.png"
                alt="Helena Viana, fondatrice di Versia Garden, in serra"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">La Nostra Storia</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                La storia di Versia Garden inizia con la passione della nostra fondatrice, la botanica Helena Viana, per il potere trasformativo dei fiori. Ha visto che migliaia di persone sognavano di coltivare fioriture rare ed esotiche ma erano trattenute da una sola cosa: non sapere da dove iniziare. Semi a caso da fonti sconosciute. Nessuna guida. Nessun supporto. La sua missione è diventata chiara: creare un sistema di coltivazione completo che permetta a chiunque — indipendentemente dall&apos;esperienza — di far crescere qualcosa di straordinario dal seme.
              </p>

              <p>
                Da quella missione è nato il movimento &apos;The Colour Awakening&apos;. Oggi siamo più di un negozio; siamo il Suo partner nel viaggio dal seme alla fioritura. Ogni elemento del nostro Kit di Coltivazione — dai semi pre-attivati al substrato esclusivo all&apos;app — esiste per rendere il Suo successo inevitabile. Si unisca a noi, pianti un seme e guardi la Sua storia di colore svolgersi.
              </p>
            </div>

            {/* Trustpilot Rating */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a] p-1 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                ))}
              </div>
              <span className="text-gray-700 font-medium">(19.329 Recensioni)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-7xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/design-mode/a8e399fcfcf6a29c3ce0bd1ae5ff2900d1d38aa9.webp"
              alt="Processo di crescita dell'ibisco"
              width={1200}
              height={600}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
