import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Domande Frequenti
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quanto velocemente germoglieranno i semi?</AccordionTrigger>
            <AccordionContent>
              I nostri semi sono pre-attivati — arrivano senza periodo di dormienza. Piantati nel substrato esclusivo incluso e mantenuti nelle condizioni giuste, dovrebbe vedere i primi germogli spuntare entro <strong>7 giorni</strong>. L&apos;App Versia Garden La guiderà verso le condizioni ottimali per la germinazione più rapida.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Serve esperienza di giardinaggio?</AccordionTrigger>
            <AccordionContent>
              Assolutamente no. Il Kit di Coltivazione include tutto il necessario, e l&apos;App Versia Garden fornisce video-lezioni passo-passo che coprono l&apos;intero percorso — dalla semina al primo fiore spettacolare. È come avere un botanico personale in tasca.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>E se i miei semi non germinano?</AccordionTrigger>
            <AccordionContent>
              Garantiamo almeno l&apos;<strong>80% di germinazione entro 21 giorni</strong> utilizzando il substrato incluso e seguendo le istruzioni dell&apos;app. Se i Suoi risultati scendono sotto questa soglia, Le invieremo semi sostitutivi senza costi. Il Suo successo conta più di qualsiasi altra cosa per noi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quanto tempo ci vuole per vedere i primi fiori?</AccordionTrigger>
            <AccordionContent>
              L&apos;ibisco generalmente inizia a fiorire entro <strong>4-6 mesi</strong> dalla germinazione, a seconda delle condizioni. Il fertilizzante Versia Bloom Accelerator incluso è specificamente formulato per promuovere una fioritura più rapida e abbondante. L&apos;app monitora i Suoi progressi e Le fa sapere cosa aspettarsi in ogni fase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Posso iniziare il kit in casa?</AccordionTrigger>
            <AccordionContent>
              Assolutamente. Anzi, iniziare in casa è l&apos;ideale. I semi e il substrato funzionano perfettamente su un davanzale soleggiato, in un giardino d&apos;inverno o in qualsiasi punto luminoso. Una volta che le piante sono affermate e il clima è abbastanza caldo, può trapiantarle all&apos;esterno. L&apos;app Le dirà esattamente quando e come.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>{"L'ibisco è una pianta perenne?"}</AccordionTrigger>
            <AccordionContent>
              Sì. Una volta stabilito, l&apos;ibisco è una pianta perenne che fiorisce in modo spettacolare dalla <strong>tarda primavera fino all&apos;autunno inoltrato</strong>. Nei climi più caldi, può fiorire quasi tutto l&apos;anno. Nelle regioni più fredde, basta portare la pianta in vaso all&apos;interno prima del primo gelo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
