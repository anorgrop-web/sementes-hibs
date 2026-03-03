import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Privacidade | Versia Garden",
  description: "Política de privacidade da Versia Garden.",
}

export default function PrivacyPolicyPT() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: Março 2026</p>

        <section className="space-y-8 text-foreground">
          <div>
            <h2 className="text-xl font-semibold mb-3">Responsável pelo tratamento</h2>
            <p className="leading-relaxed text-muted-foreground">
              O responsável pelo tratamento dos seus dados pessoais é: 57.203.094 MARIA CLARA RODRIGUES LEITE, nome
              comercial Versia Garden, com sede em Avenida Girassol, 29.156-572, Cariacica, ES, Brasil. Contacto:{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Base legal</h2>
            <p className="leading-relaxed text-muted-foreground">
              O tratamento dos seus dados é realizado em conformidade com o Regulamento Geral sobre a Proteção de Dados
              (RGPD — Regulamento UE 2016/679) e a Lei n.º 58/2019, que assegura a execução do RGPD na ordem jurídica
              nacional portuguesa.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Dados recolhidos</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Dados de identidade: nome, apelido</li>
              <li>Dados de contacto: morada, endereço de e-mail, telemóvel</li>
              <li>Dados de transação: detalhes da encomenda, histórico de compras</li>
              <li>Dados de pagamento: tratados de forma segura pela Stripe (não armazenados pela Versia Garden)</li>
              <li>Dados de navegação: endereço IP, tipo de browser, páginas consultadas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Finalidades do tratamento</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Processamento e entrega das suas encomendas</li>
              <li>Comunicação relativa à sua encomenda</li>
              <li>Melhoria dos nossos serviços e do nosso site</li>
              <li>Cumprimento das nossas obrigações legais e fiscais</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Os seus direitos</h2>
            <p className="leading-relaxed text-muted-foreground mb-3">
              Nos termos do RGPD, dispõe dos seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Direito de acesso aos seus dados pessoais</li>
              <li>Direito de retificação de dados inexatos</li>
              <li>Direito ao apagamento («direito a ser esquecido»)</li>
              <li>Direito à limitação do tratamento</li>
              <li>Direito à portabilidade dos dados</li>
              <li>Direito de oposição ao tratamento</li>
              <li>Direito de retirar o seu consentimento a qualquer momento</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground mt-3">
              Para exercer estes direitos, contacte-nos em{" "}
              <a href="mailto:info@versiagarden.com" className="text-primary hover:underline">
                info@versiagarden.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Reclamação junto da CNPD</h2>
            <p className="leading-relaxed text-muted-foreground">
              Pode igualmente apresentar uma reclamação junto da CNPD (Comissão Nacional de Proteção de Dados):{" "}
              <a
                href="https://www.cnpd.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.cnpd.pt
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Conservação dos dados</h2>
            <p className="leading-relaxed text-muted-foreground">
              Os seus dados pessoais são conservados pelo período necessário à execução do contrato e, após o seu
              término, em conformidade com as obrigações legais aplicáveis (geralmente 3 a 5 anos).
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
