import Image from "next/image"

export function GerminationSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Text Content - Shows first on mobile, left on desktop */}
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              SEMI PRE-ATTIVATI: LA VITA È GIÀ IN ATTESA ALL&apos;INTERNO
            </h2>

            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                La maggior parte dei semi di ibisco resta dormiente per settimane prima di iniziare a svegliarsi. I nostri no. Prepariamo con cura ogni seme per rimuovere la barriera della dormienza, così nel momento in cui tocca il substrato, la germinazione inizia immediatamente.
              </p>

              <p>
                Insieme al nostro substrato esclusivo per la germinazione dell&apos;ibisco e al fertilizzante Versia Bloom Accelerator, i Suoi semi hanno tutto il necessario per germogliare in 7 giorni o meno. E con l&apos;App Versia Garden che La guida passo-passo con video-lezioni, saprà esattamente cosa fare — e quando farlo — dal seme alla fioritura spettacolare.
              </p>
            </div>
          </div>

          {/* Image - Shows second on mobile, right on desktop */}
          <div className="mt-8 md:mt-0 md:w-1/2 md:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Versia/_prompt_professional_2k_202602241415.jpeg"
                alt="Vassoio di germinazione con piantine e mano che apre il coperchio"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
