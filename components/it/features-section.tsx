import { Flower2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Germoglia in 7 Giorni, Non Mesi",
      description:
        "I nostri semi arrivano pre-attivati — nessun periodo di dormienza, nessuna attesa. Li pianti nel substrato esclusivo e vedrà i primi germogli verdi spuntare entro una settimana.",
    },
    {
      title: "Un Sistema Completo che Pensa per Lei",
      description:
        "Substrato, fertilizzante, fungicida, semi e app — ogni elemento è scelto per funzionare insieme. Nessun dubbio, nessun viaggio extra al vivaio, nessuna ricerca su YouTube.",
    },
    {
      title: "Guardi l'Intero Viaggio Svolgersi",
      description:
        "Dal primo piccolo germoglio alla prima fioritura spettacolare — non c'è nulla di paragonabile al sapere di averlo coltivato con le proprie mani. Questo è il giardinaggio nella sua forma più gratificante.",
    },
    {
      title: "Colori che Illuminano Qualsiasi Spazio",
      description:
        "Ibisco raro a petali doppi in rossi vividi, rosa, viola e gialli. Che sia un balcone, un terrazzo o un giardino intero — questi fiori diventano il protagonista assoluto.",
    },
  ]

  return (
    <section className="bg-background py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78%] h-[177.78%] min-w-full min-h-full"
                src="https://www.youtube.com/embed/EbRDLkSlS0M?autoplay=1&mute=1&loop=1&playlist=EbRDLkSlS0M&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1"
                title="Versia Garden Product Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                loading="eager"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Da un Piccolo Seme a un Giardino che Toglie il Fiato — Nelle Sue Mani, Secondo i Suoi Tempi.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            La maggior parte delle persone pensa che coltivare ibisco raro dal seme sia difficile. Non lo è — quando si ha il sistema giusto. Il nostro Kit di Coltivazione Le offre semi pre-attivati che germogliano in 7 giorni, un substrato esclusivo, fertilizzante di grado professionale e un&apos;app con video-lezioni che La accompagna in ogni fase. Non serve esperienza. Non serve fortuna. Basta aprire la scatola.
          </p>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Perché i Coltivatori Amano Questo Kit</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 text-emerald-600">
                    <Flower2 className="w-full h-full" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
