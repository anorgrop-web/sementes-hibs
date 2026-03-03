import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/it/footer"

export const metadata = {
  title: "Informativa sulla Privacy | Versia Garden",
  description: "Informativa sulla privacy di Versia Garden.",
}

export default function PrivacyPolicyPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Informativa sulla Privacy</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Marzo 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduzione</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden si impegna a proteggere la Sua privacy. La presente informativa spiega come raccogliamo,
                utilizziamo, conserviamo e proteggiamo i Suoi dati personali in conformità con il Regolamento Generale
                sulla Protezione dei Dati (GDPR — Regolamento UE 2016/679).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Informazioni che Raccogliamo</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                <li>
                  <span className="font-medium text-foreground">Quando effettua un ordine:</span> nome completo,
                  email, numero di telefono, indirizzo di spedizione e fatturazione, informazioni di pagamento
                  (elaborate da Stripe — non conserviamo i dati della carta).
                </li>
                <li>
                  <span className="font-medium text-foreground">Automaticamente durante la navigazione:</span>{" "}
                  indirizzo IP, tipo di browser, pagine visitate, sito di provenienza, tipo di dispositivo.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Come Utilizziamo i Suoi Dati</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Elaborare e gestire gli ordini.</li>
                <li>Inviare conferme d&apos;ordine e aggiornamenti sulla spedizione.</li>
                <li>Fornire assistenza clienti.</li>
                <li>Migliorare il nostro sito e i nostri servizi.</li>
                <li>Inviare comunicazioni di marketing (solo previo consenso).</li>
                <li>Adempiere agli obblighi di legge.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Elaborazione dei Pagamenti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i pagamenti vengono elaborati in modo sicuro tramite Stripe. Non vediamo né conserviamo il
                numero completo della carta. Per maggiori informazioni:{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#016630] hover:underline"
                >
                  https://stripe.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Cookie e Tracciamento</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                <li>
                  <span className="font-medium text-foreground">Facebook Pixel:</span> misurazione pubblicitaria.
                  Può disattivarlo tramite le impostazioni degli annunci di Facebook.
                </li>
                <li>
                  <span className="font-medium text-foreground">Google Analytics:</span> dati anonimi sull&apos;utilizzo
                  del sito.
                </li>
                <li>
                  <span className="font-medium text-foreground">Cookie essenziali:</span> necessari per il
                  funzionamento del carrello e del checkout.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Può disattivare i cookie non essenziali tramite le impostazioni del browser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Condivisione dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                Non vendiamo i Suoi dati personali. Condividiamo i dati solo con: Stripe (pagamenti), partner
                logistico (nome e indirizzo per la spedizione), Facebook/Meta (dati anonimi tramite Pixel), Google
                (analytics anonimi).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Conservazione dei Dati</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Dati degli ordini: 5 anni (obblighi fiscali e contabili).</li>
                <li>Dati marketing: fino alla revoca del consenso.</li>
                <li>Analytics: 26 mesi.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. I Suoi Diritti (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                In qualità di interessato, Lei ha il diritto di:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Accedere ai Suoi dati personali.</li>
                <li>Rettificare dati inesatti o incompleti.</li>
                <li>Richiedere la cancellazione (&ldquo;diritto all&apos;oblio&rdquo;).</li>
                <li>Limitare il trattamento.</li>
                <li>Richiedere la portabilità dei dati.</li>
                <li>Revocare il consenso al marketing in qualsiasi momento.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Per esercitare i Suoi diritti, La preghiamo di contattarci a{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . Risponderemo entro 30 giorni.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Sicurezza dei Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                Crittografia SSL/TLS, conformità PCI-DSS di Stripe, controlli di accesso sui sistemi interni.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Trasferimenti Internazionali di Dati</h2>
              <p className="text-muted-foreground leading-relaxed">
                I dati potrebbero essere trasferiti al di fuori del SEE (Brasile, USA). Sono in atto adeguate
                garanzie di protezione.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Privacy dei Minori</h2>
              <p className="text-muted-foreground leading-relaxed">
                Il nostro sito non è destinato a soggetti di età inferiore ai 16 anni. Non raccogliamo
                consapevolmente dati di minori.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Modifiche alla Presente Informativa</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gli aggiornamenti verranno pubblicati su questa pagina con la data di revisione aggiornata.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Contattaci</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email:{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                — Tempo di risposta: entro 30 giorni.
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              Titolare del trattamento: Versia Garden | Gestito da: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ:
              57.203.094/0001-13 | Avenida Girassol, 29.156-572, Cariacica, ES, Brasile
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
