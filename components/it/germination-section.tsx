"use client"

import { Sprout, Leaf, FlaskConical, Shield, Smartphone, Trophy } from "lucide-react"

const items = [
  {
    icon: Sprout,
    title: "40 Semi di Ibisco Tradizionali",
    subtitle: "Non-OGM · Pre-Attivati · +80% Germinazione",
    description:
      "Varietà tradizionali selezionate a mano con zero dormienza. Mentre i semi comuni dormono per settimane, i nostri si risvegliano nel momento in cui toccano il terreno. Primi germogli in 7 giorni — non è marketing, è botanica.",
  },
  {
    icon: Leaf,
    title: "Substrato Esclusivo per Germinazione",
    subtitle: "Formulato per l'Ibisco · pH 6,5–6,8",
    description:
      "Non è terriccio da vivaio. Una miscela proprietaria progettata specificamente per la germinazione dell'ibisco — ritenzione idrica perfetta, drenaggio ideale, acidità precisa. I Suoi semi non si adattano al terreno. Il terreno si adatta a loro.",
  },
  {
    icon: FlaskConical,
    title: "Versia Bloom Accelerator",
    subtitle: "Formula di Grado Professionale",
    description:
      "La differenza tra 'è cresciuto' e 'è mozzafiato.' Il nostro fertilizzante accelera lo sviluppo radicale e stimola una fioritura abbondante — trasformando piante sane in spettacoli di colore che tolgono il fiato.",
  },
  {
    icon: Shield,
    title: "Fungicida Protettivo",
    subtitle: "Scudo Contro le Malattie Precoci",
    description:
      "Le piantine sono più vulnerabili nelle prime settimane. Il nostro fungicida crea una barriera invisibile contro le malattie che uccidono il 90% dei tentativi di coltivazione amatoriale. La protezione che le Sue piante meritano dal primo giorno.",
  },
  {
    icon: Smartphone,
    title: "App Versia Garden",
    subtitle: "Video-Lezioni · Promemoria Giornalieri · Monitoraggio Progressi",
    description:
      "Il Suo botanico personale — disponibile 24/7, mai impaziente, sempre preciso. Video-lezioni passo-passo dalla germinazione alla prima fioritura. Non si chiederà mai più 'cosa devo fare adesso?'",
  },
]

export function GerminationSection() {
  const scrollToProduct = () => {
    const el = document.getElementById("product-section")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 text-balance">
          Tutto Ciò che Serve per Rendere la Primavera 2026 la Più Fiorita che Abbia Mai Coltivato
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-4 mb-12 text-pretty">
          Questo non è un pacchetto di semi e una speranza. Questo è un sistema di coltivazione professionale completo — cinque elementi di precisione, ciascuno selezionato dai nostri botanici per garantire una sola cosa: il Suo successo. Apra la scatola, segua i passi e guardi il Suo giardino trasformarsi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                <span className="block text-xs text-emerald-600 font-medium uppercase tracking-wide mt-1">
                  {item.subtitle}
                </span>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-emerald-50 rounded-xl p-6 mt-10 text-center">
          <div className="flex justify-center mb-2">
            <Trophy className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />
          </div>
          <h4 className="font-bold text-emerald-800 uppercase tracking-wider text-sm">
            La Garanzia Versia
          </h4>
          <p className="text-gray-700 text-base mt-2 max-w-2xl mx-auto">
            Coltivi con fiducia: se meno dell&apos;80% dei Suoi semi germina entro 21 giorni utilizzando il nostro sistema, li sostituiamo — gratuitamente. Nessun modulo, nessuna scusa. Solo nuovi semi alla Sua porta.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-500 italic mb-4">
            &ldquo;La Primavera 2026 non aspetta. Il Suo kit è pronto. E Lei?&rdquo;
          </p>
          <button
            onClick={scrollToProduct}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Inizia a Coltivare — Aggiungi al Carrello
          </button>
        </div>
      </div>
    </section>
  )
}
