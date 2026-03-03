import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/it/footer"

export const metadata = {
  title: "Termini e Condizioni | Versia Garden",
  description: "Termini e condizioni di Versia Garden.",
}

export default function TerminiCondizioni() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Termini e Condizioni</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Marzo 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduzione</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le presenti Condizioni Generali di Vendita disciplinano l&apos;utilizzo del sito versiagarden.com e
                gli acquisti effettuati tramite esso. Accedendo al sito o effettuando un ordine, Lei accetta
                integralmente le presenti condizioni.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Chi Siamo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden — Ragione sociale: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 |
                Avenida Girassol, 29.156-572, Cariacica, ES, Brasile |{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Prodotti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vendiamo piante di ibisco vive e prodotti digitali (video corsi). Le immagini dei prodotti sono
                indicative. La variazione naturale di colore, dimensione e forma è da considerarsi normale e non
                costituisce un difetto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Ordini e Pagamenti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Effettuando un ordine, Lei conferma di: avere almeno 18 anni o di disporre del consenso genitoriale,
                che le informazioni fornite sono accurate, e di autorizzare l&apos;addebito del pagamento. I prezzi
                sono indicati nella valuta dello store (EUR, GBP o USD). I pagamenti vengono elaborati tramite Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Abbonamenti e Prodotti Digitali</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il Corso Video di Giardinaggio è un abbonamento. È previsto un periodo di prova gratuito come indicato
                al momento dell&apos;acquisto. Al termine del periodo di prova, il rinnovo avviene automaticamente.
                È possibile disdire in qualsiasi momento scrivendo a{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . La disdetta interrompe i rinnovi futuri ma non dà diritto al rimborso di quelli già addebitati.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Spedizione e Consegna</h2>
              <p className="text-muted-foreground leading-relaxed">
                Consulti la nostra{" "}
                <Link href="/it/shipping-policy" className="text-[#016630] hover:underline">
                  Politica di Spedizione
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Rimborsi e Resi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Consulti la nostra{" "}
                <Link href="/it/refund-policy" className="text-[#016630] hover:underline">
                  Politica di Rimborso
                </Link>{" "}
                per i dettagli sulla finestra di rimborso di 14 giorni. I consumatori residenti in Italia beneficiano
                di ulteriori tutele previste dal Codice del Consumo (D.Lgs. 206/2005).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Proprietà Intellettuale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i contenuti (testi, immagini, loghi, video, materiali del corso) sono di proprietà di Versia
                Garden. È vietata qualsiasi riproduzione senza autorizzazione scritta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Limitazione di Responsabilità</h2>
              <p className="text-muted-foreground leading-relaxed">
                Non siamo responsabili per danni indiretti o consequenziali. La responsabilità totale è limitata
                all&apos;importo pagato per lo specifico ordine. Non siamo responsabili per la salute delle piante
                dopo la consegna qualora le istruzioni di cura non vengano seguite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Forza Maggiore</h2>
              <p className="text-muted-foreground leading-relaxed">
                Non siamo responsabili per ritardi causati da circostanze al di fuori del nostro ragionevole controllo
                (calamità naturali, pandemie, scioperi postali, ritardi doganali, provvedimenti governativi).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Legge Applicabile</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le presenti condizioni sono disciplinate dalla legge brasiliana. Per i consumatori residenti in
                Italia, si applicano altresì le norme imperative del Codice del Consumo (D.Lgs. 206/2005) nella
                misura in cui offrano una tutela maggiore.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Risoluzione delle Controversie</h2>
              <p className="text-muted-foreground leading-relaxed">
                La preghiamo di contattarci prima a{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . I consumatori UE possono altresì utilizzare la piattaforma ODR della Commissione Europea:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#016630] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Modifiche</h2>
              <p className="text-muted-foreground leading-relaxed">
                Potremmo aggiornare le presenti condizioni. Le modifiche verranno pubblicate con la data aggiornata.
                Il proseguimento dell&apos;utilizzo del sito costituisce accettazione delle nuove condizioni.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">14. Salvaguardia</h2>
              <p className="text-muted-foreground leading-relaxed">
                Qualora una disposizione risultasse inapplicabile, le restanti disposizioni continueranno ad avere
                piena efficacia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">15. Contattaci</h2>
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
