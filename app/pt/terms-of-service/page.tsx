import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Termos de Serviço | Versia Garden",
  description: "Termos e condições da Versia Garden.",
}

export default function TermsOfServicePT() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-primary py-4 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/pt" className="text-white/80 hover:text-white flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <span className="text-white font-bold text-lg tracking-wide">Versia Garden</span>
          <div className="w-16" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-2">Termos de Serviço</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: Março 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Identificação do vendedor</h2>
            <p className="leading-relaxed text-muted-foreground">
              57.203.094 MARIA CLARA RODRIGUES LEITE, nome comercial Versia Garden, CNPJ: 57.203.094/0001-13, Avenida
              Girassol, 29.156-572, Cariacica, ES, Brasil. E-mail:{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Objeto</h2>
            <p className="leading-relaxed text-muted-foreground">
              Os presentes Termos de Serviço regulam as relações contratuais entre a Versia Garden e qualquer cliente
              que pretenda efetuar uma compra no nosso site. A realização de uma encomenda implica a aceitação integral
              dos presentes termos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Encomendas</h2>
            <p className="leading-relaxed text-muted-foreground">
              Após validação da sua encomenda, será enviado um e-mail de confirmação. A Versia Garden reserva-se o
              direito de cancelar qualquer encomenda em caso de stock insuficiente, erro de preço manifesto ou suspeita
              de fraude.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Preços e pagamento</h2>
            <p className="leading-relaxed text-muted-foreground">
              Os preços são apresentados em euros (€) com todos os impostos incluídos. O pagamento é efetuado por
              cartão de crédito através do nosso prestador seguro Stripe. Nenhum dado de cartão é armazenado pela
              Versia Garden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. Direito de livre resolução</h2>
            <p className="leading-relaxed text-muted-foreground">
              Em conformidade com o Decreto-Lei n.º 24/2014 e a Diretiva Europeia 2011/83/UE, dispõe de 14 dias a
              contar da receção da sua encomenda para exercer o direito de livre resolução, sem necessidade de
              justificação nem pagamento de penalizações.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Resolução de litígios</h2>
            <p className="leading-relaxed text-muted-foreground mb-3">
              Em caso de litígio, convidamo-lo a contactar-nos em primeiro lugar em{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              . A Comissão Europeia disponibiliza uma plataforma de resolução de litígios em linha (RLL):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Pode também recorrer ao Centro de Arbitragem de Conflitos de Consumo para resolução alternativa de
              litígios de consumo, nos termos da legislação portuguesa aplicável.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Lei aplicável</h2>
            <p className="leading-relaxed text-muted-foreground">
              Os presentes termos são regidos pela legislação brasileira, sem prejuízo das disposições imperativas de
              proteção do consumidor português aplicáveis aos consumidores residentes em Portugal.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white mt-16 py-8 px-4 text-center text-sm space-y-1">
        <p className="text-white/80">© 2026 Versia Garden. Todos os direitos reservados.</p>
        <p className="text-white/60 text-xs">
          Operado por: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13
        </p>
        <p className="text-white/60 text-xs">
          Avenida Girassol, 29.156-572, Cariacica, ES, Brasil |{" "}
          <a href="mailto:info@versiagarden.com" className="hover:text-white/80 transition-colors">
            info@versiagarden.com
          </a>
        </p>
      </footer>
    </div>
  )
}
