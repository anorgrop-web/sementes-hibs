import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/it/footer"

export const metadata = {
  title: "Politica di Spedizione | Versia Garden",
  description: "La nostra politica di spedizione per i prodotti Versia Garden.",
}

export default function SpedizionePolicyPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Politica di Spedizione</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Marzo 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Paesi di Destinazione</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden spedisce in: Regno Unito, Italia, Spagna, Francia, Portogallo, Germania e Stati Uniti.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Metodi di Spedizione e Tempi di Consegna</h2>
              <p className="text-muted-foreground font-medium mb-2">Spedizione Standard:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2 mb-4">
                <li>Europa (UK, Italia, Spagna, Francia, Portogallo, Germania): 7–10 giorni lavorativi. GRATUITA.</li>
                <li>Stati Uniti: 10–15 giorni lavorativi. GRATUITA.</li>
              </ul>
              <p className="text-muted-foreground font-medium mb-2">Spedizione Express:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2 mb-4">
                <li>Europa: 3–4 giorni lavorativi. €14,55.</li>
                <li>Stati Uniti: 5–7 giorni lavorativi. $14,55.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                I tempi di consegna sono stimati a partire dalla data di spedizione, non dalla data dell&apos;ordine.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Come Spediamo le Piante Vive</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Le piante vengono spedite direttamente dal nostro vivaio partner in imballaggi sicuri e appositamente
                progettati:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Piante disposte orizzontalmente in scatole rettangolari allungate.</li>
                <li>Divisori in cartone ondulato mantengono ogni vaso saldamente al proprio posto.</li>
                <li>Il fogliame è avvolto in plastica protettiva trasparente.</li>
                <li>Scheda con le istruzioni di cura inclusa in ogni ordine.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Elaborazione dell&apos;Ordine</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gli ordini vengono elaborati e spediti entro 1–3 giorni lavorativi. Durante i periodi di punta
                (primavera), l&apos;elaborazione potrebbe richiedere fino a 5 giorni lavorativi. Riceverà
                un&apos;email di conferma con le informazioni di tracciamento una volta che l&apos;ordine sarà
                spedito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Tracciamento dell&apos;Ordine</h2>
              <p className="text-muted-foreground leading-relaxed">
                Riceverà un&apos;email con i dettagli di tracciamento dopo la spedizione. Se non riceve le
                informazioni di tracciamento entro 5 giorni lavorativi, La preghiamo di contattarci a{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Dazi Doganali e Tasse di Importazione</h2>
              <p className="text-muted-foreground leading-relaxed">
                All&apos;interno dell&apos;UE non si applicano dazi doganali. Per gli ordini destinati a USA e Regno
                Unito, potrebbero essere applicate tasse di importazione locali — queste sono a carico del cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Problemi di Consegna</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se il Suo ordine non è arrivato entro la finestra temporale stimata, La preghiamo di contattare{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . Effettueremo le verifiche necessarie entro 48 ore. Se il pacco viene restituito a causa di un
                indirizzo errato, La contatteremo per organizzare una nuova spedizione (potrebbero applicarsi costi
                aggiuntivi).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contattaci</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email:{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              Versia Garden | Gestito da: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 |
              Avenida Girassol, 29.156-572, Cariacica, ES, Brasile
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
