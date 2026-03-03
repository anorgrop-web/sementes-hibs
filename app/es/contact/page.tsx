import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/es/footer"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Contacto | Versia Garden",
  description: "Contacta con Versia Garden.",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <Link href="/es">
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
          <Link href="/es" className="text-sm text-[#016630] hover:underline mb-6 inline-block">
            &larr; Volver al inicio
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Contacto</h1>
          <p className="text-sm text-muted-foreground mb-8">{"Última actualización: Marzo 2026"}</p>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"¿Tiene alguna pregunta? Estamos aquí para ayudarle."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Ya sea para resolver una duda sobre su pedido, obtener información sobre el cuidado de las plantas, o simplemente saludarnos, estaremos encantados de escucharle."}
            </p>

            <div className="bg-[#F3F8F4] border border-[#016630]/20 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#016630]/10 flex-shrink-0">
                <Mail className="h-5 w-5 text-[#016630]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{"Escríbanos"}</p>
                <a
                  href="mailto:info@versiagarden.com"
                  className="text-[#016630] hover:underline text-lg font-medium"
                >
                  info@versiagarden.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">{"Tiempo de respuesta: en un plazo de 24–48 horas."}</p>
              </div>
            </div>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"Qué incluir en su mensaje"}</h2>
              <p className="text-muted-foreground mb-2">{"Para consultas sobre pedidos:"}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Su número de pedido o el correo electrónico utilizado en el proceso de compra."}</li>
                <li>{"Breve descripción del problema."}</li>
                <li>{"Fotos si resultan pertinentes."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"Información de la Empresa"}</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p className="font-medium text-foreground">Versia Garden</p>
                <p>{"Operado por: 57.203.094 MARIA CLARA RODRIGUES LEITE"}</p>
                <p>{"CNPJ: 57.203.094/0001-13"}</p>
                <p>{"Avenida Girassol, 29.156-572, Cariacica, ES, Brasil"}</p>
                <p>
                  <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                    info@versiagarden.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
