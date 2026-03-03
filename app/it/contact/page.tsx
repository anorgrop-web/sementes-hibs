import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/it/footer"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Contattaci | Versia Garden",
  description: "Contatta Versia Garden.",
}

export default function ContattiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <Link href="/it">
            <Image
              src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Versia/Group%201087.png"
              alt="Versia Garden"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/it" className="text-sm text-[#016630] hover:underline mb-6 inline-block">
            &larr; Torna alla home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Contattaci</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Marzo 2026</p>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hai una domanda? Siamo qui per aiutarti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Che si tratti di un problema con il Suo ordine, di una domanda sulla cura delle piante, o semplicemente
              di un saluto — saremo felici di sentirLa.
            </p>

            <div className="bg-[#F3F8F4] border border-[#016630]/20 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#016630]/10 flex-shrink-0">
                <Mail className="h-5 w-5 text-[#016630]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Scrivici</p>
                <a
                  href="mailto:info@versiagarden.com"
                  className="text-[#016630] hover:underline text-lg font-medium"
                >
                  info@versiagarden.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">Tempo di risposta: entro 24–48 ore.</p>
              </div>
            </div>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cosa includere nel messaggio</h2>
              <p className="text-muted-foreground mb-2">Per richieste relative agli ordini:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Il numero d&apos;ordine o l&apos;email utilizzata al checkout.</li>
                <li>Breve descrizione del problema.</li>
                <li>Foto se pertinenti.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Informazioni Aziendali</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p className="font-medium text-foreground">Versia Garden</p>
                <p>Gestito da: 57.203.094 MARIA CLARA RODRIGUES LEITE</p>
                <p>CNPJ: 57.203.094/0001-13</p>
                <p>Avenida Girassol, 29.156-572, Cariacica, ES, Brasile</p>
                <p>
                  <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                    info@versiagarden.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
