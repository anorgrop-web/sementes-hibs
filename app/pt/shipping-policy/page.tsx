import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Envio | Versia Garden",
  description: "Política de envio da Versia Garden.",
}

export default function ShippingPolicyPT() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Política de Envio</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: Março 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">Opções de envio</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="text-left p-3 font-semibold border border-border">Modalidade</th>
                    <th className="text-left p-3 font-semibold border border-border">Prazo</th>
                    <th className="text-left p-3 font-semibold border border-border">Portes de envio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border text-muted-foreground">Padrão</td>
                    <td className="p-3 border border-border text-muted-foreground">7–10 dias úteis</td>
                    <td className="p-3 border border-border text-muted-foreground font-semibold text-primary">GRÁTIS</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border border-border text-muted-foreground">Expresso</td>
                    <td className="p-3 border border-border text-muted-foreground">3–4 dias úteis</td>
                    <td className="p-3 border border-border text-muted-foreground">14,55 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Processamento da encomenda</h2>
            <p className="leading-relaxed text-muted-foreground">
              As encomendas são processadas no prazo de 1 a 2 dias úteis. Receberá um e-mail de confirmação com o
              número de seguimento assim que a sua encomenda for despachada.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Direitos aduaneiros e impostos de importação</h2>
            <p className="leading-relaxed text-muted-foreground">
              Para entregas dentro da União Europeia, não são aplicados direitos aduaneiros nem impostos de importação
              adicionais. Para entregas fora da UE (nomeadamente para o Reino Unido ou Estados Unidos), os eventuais
              direitos aduaneiros e impostos são da responsabilidade do cliente e regem-se pela legislação do país de
              destino.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Encomenda não recebida</h2>
            <p className="leading-relaxed text-muted-foreground">
              Se não tiver recebido a sua encomenda no prazo indicado, contacte-nos em{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              . Estamos a trabalhar para resolver qualquer situação com a maior brevidade possível.
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
