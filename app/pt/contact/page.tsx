import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

export const metadata = {
  title: "Contacto | Versia Garden",
  description: "Contacte a equipa Versia Garden.",
}

export default function ContactPT() {
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Contacto</h1>
        <p className="text-muted-foreground mb-10">Tem alguma questão? Estamos aqui para ajudar.</p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 flex flex-col items-center text-center gap-4">
          <div className="bg-primary/10 rounded-full p-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Envie-nos um e-mail</h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            A nossa equipa está disponível para responder a todas as suas questões sobre encomendas, envios ou
            produtos.
          </p>
          <a
            href="mailto:info@versiagarden.com"
            className="text-primary font-semibold hover:underline text-lg"
          >
            info@versiagarden.com
          </a>
          <p className="text-sm text-muted-foreground">Tempo de resposta: no prazo de 24 a 48 horas.</p>
        </div>
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
