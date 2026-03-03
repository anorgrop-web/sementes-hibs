import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Reembolso | Versia Garden",
  description: "Política de reembolso da Versia Garden.",
}

export default function RefundPolicyPT() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Política de Reembolso</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: Março 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">A nossa garantia</h2>
            <p className="leading-relaxed text-muted-foreground">
              Na Versia Garden, queremos que fique completamente satisfeito com a sua compra. Se, por qualquer motivo,
              não estiver satisfeito, comprometemo-nos a encontrar uma solução rápida e justa.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Prazo de reembolso de 14 dias</h2>
            <p className="leading-relaxed text-muted-foreground">
              Tem 14 dias a contar da data de entrega para solicitar um reembolso ou substituição, em conformidade com
              o Decreto-Lei n.º 24/2014 e a Diretiva Europeia 2011/83/UE relativa aos direitos dos consumidores. Este
              direito de livre resolução aplica-se sem necessidade de justificação.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Como solicitar um reembolso</h2>
            <p className="leading-relaxed text-muted-foreground mb-3">
              Contacte-nos em{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>{" "}
              com as seguintes informações:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Número da encomenda</li>
              <li>Descrição detalhada do problema</li>
              <li>Fotografias que ilustrem o problema (se aplicável)</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground mt-3">
              A nossa equipa responderá no prazo de 24 a 48 horas úteis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Artigos não reembolsáveis</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Plantas que morreram por cuidados inadequados após a entrega</li>
              <li>Produtos digitais já acedidos ou descarregados</li>
              <li>Encomendas para as quais o prazo de 14 dias já expirou</li>
              <li>Artigos danificados por utilização incorreta</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Prazo de processamento</h2>
            <p className="leading-relaxed text-muted-foreground">
              Após aprovação do reembolso, o montante será creditado no seu cartão de crédito ou método de pagamento
              original no prazo de 5 a 10 dias úteis, dependendo da sua instituição bancária.
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
