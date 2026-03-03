import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/it/footer"

export const metadata = {
  title: "Politica di Rimborso | Versia Garden",
  description: "La nostra politica di rimborso per i prodotti Versia Garden.",
}

export default function RimborsoPolicyPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Politica di Rimborso</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Marzo 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. La Nostra Garanzia</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden vuole che Lei sia completamente soddisfatto del Suo acquisto. Poiché vendiamo piante
                vive, comprendiamo quanto sia importante che il Suo ordine arrivi in perfette condizioni. Se le piante
                arrivano danneggiate, morte o in cattivo stato, ci impegniamo a risolvere il problema.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Finestra di Rimborso di 14 Giorni</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ha 14 giorni dalla data di consegna per richiedere un rimborso o una sostituzione, in conformità con
                il Codice del Consumo (D.Lgs. 206/2005) e la Direttiva Europea 2011/83/UE sui diritti dei consumatori.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">Per avere diritto al rimborso:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Deve contattarci entro 14 giorni dal ricevimento dell&apos;ordine.</li>
                <li>Deve fornire documentazione fotografica del problema (piante danneggiate, articoli errati, ecc.).</li>
                <li>Le piante non devono essere state rinvasate o modificate significativamente rispetto allo stato di consegna.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Come Richiedere un Rimborso</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                La preghiamo di contattarci all&apos;indirizzo{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                indicando:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Il numero d&apos;ordine o l&apos;indirizzo email utilizzato al momento dell&apos;acquisto.</li>
                <li>Una breve descrizione del problema.</li>
                <li>Foto che mostrino le condizioni delle piante all&apos;arrivo.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Esamineremo la Sua richiesta entro 48 ore e Le risponderemo con una soluzione.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Opzioni di Rimborso</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">A seconda della situazione, potremo offrire:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Rimborso completo sul metodo di pagamento originale.</li>
                <li>Spedizione di sostituzione senza costi aggiuntivi.</li>
                <li>Rimborso parziale se solo una parte dell&apos;ordine risulta danneggiata.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                I rimborsi vengono elaborati entro 5–10 giorni lavorativi dall&apos;approvazione. I tempi di accredito
                dipendono dalla banca o dall&apos;emittente della carta di credito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Articoli Non Rimborsabili</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  Piante morte a causa di cure inadeguate dopo la consegna (es. eccesso d&apos;acqua, esposizione al
                  gelo, luce solare inadeguata).
                </li>
                <li>
                  Prodotti digitali, incluso l&apos;abbonamento al Corso Video di Giardinaggio, dopo che il contenuto
                  sia già stato consultato. Se non ha ancora acceduto al corso, può richiedere il recesso entro 14
                  giorni per un rimborso completo.
                </li>
                <li>Ordini per i quali sono trascorsi più di 14 giorni dalla consegna.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Rimborsi in Ritardo o Mancanti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se ha ricevuto conferma del rimborso ma non lo ha ancora ricevuto entro 10 giorni lavorativi, La
                preghiamo di verificare prima con la propria banca o emittente della carta di credito. Successivamente
                ci contatti a{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Cambi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al momento non offriamo cambi diretti. Se desidera un prodotto diverso, Le chiediamo di richiedere un
                rimborso e di effettuare un nuovo ordine.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contattaci</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email:{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                — Tempo di risposta: entro 48 ore.
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
