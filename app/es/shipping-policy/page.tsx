import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/es/footer"

export const metadata = {
  title: "Política de Envío | Versia Garden",
  description: "Nuestra política de envío para los productos de Versia Garden.",
}

export default function EnvioPolicyPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">{"Política de Envío"}</h1>
          <p className="text-sm text-muted-foreground mb-8">{"Última actualización: Marzo 2026"}</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">{"1. Países de Destino"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Versia Garden realiza envíos a: Reino Unido, Italia, España, Francia, Portugal, Alemania y Estados Unidos."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"2. Métodos de Envío y Plazos de Entrega"}</h2>
              <p className="text-muted-foreground font-medium mb-2">{"Envío Estándar:"}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2 mb-4">
                <li>{"Europa (UK, Italia, España, Francia, Portugal, Alemania): 7–10 días hábiles. GRATIS."}</li>
                <li>{"Estados Unidos: 10–15 días hábiles. GRATIS."}</li>
              </ul>
              <p className="text-muted-foreground font-medium mb-2">{"Envío Express:"}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2 mb-4">
                <li>{"Europa: 3–4 días hábiles. €14,55."}</li>
                <li>{"Estados Unidos: 5–7 días hábiles. $14,55."}</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                {"Los plazos de entrega son estimados y se calculan a partir de la fecha de envío, no de la fecha del pedido."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"3. Cómo Enviamos Plantas Vivas"}</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                {"Las plantas se envían directamente desde nuestro vivero asociado en embalajes seguros y diseñados específicamente para ello:"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Plantas colocadas horizontalmente en cajas rectangulares alargadas."}</li>
                <li>{"Separadores de cartón ondulado mantienen cada maceta firmemente sujeta."}</li>
                <li>{"El follaje se envuelve en plástico protector transparente."}</li>
                <li>{"Se incluye una tarjeta con instrucciones de cuidado en cada pedido."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"4. Procesamiento del Pedido"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Los pedidos se procesan y envían en un plazo de 1–3 días hábiles. Durante las temporadas de mayor demanda (primavera), el procesamiento puede tardar hasta 5 días hábiles. Recibirá un correo electrónico de confirmación con la información de seguimiento una vez que el pedido haya sido enviado."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"5. Seguimiento de su Pedido"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Recibirá un correo electrónico con los detalles de seguimiento tras el envío. Si no recibe la información de seguimiento en un plazo de 5 días hábiles, le rogamos que nos contacte en "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {"."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"6. Aduanas e Impuestos de Importación"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Dentro de la UE no se aplican aranceles aduaneros. Para pedidos con destino a EE. UU. y Reino Unido, pueden aplicarse impuestos de importación locales — estos son responsabilidad del cliente."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"7. Problemas con la Entrega"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Si su pedido no ha llegado dentro del plazo estimado, le rogamos que contacte con "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {". Realizaremos las comprobaciones oportunas en un plazo de 48 horas. Si el paquete fuera devuelto por una dirección incorrecta, nos pondremos en contacto con usted para organizar un nuevo envío (pueden aplicarse cargos adicionales)."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"8. Contacto"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Email: "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              {"Versia Garden | Operado por: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 | Avenida Girassol, 29.156-572, Cariacica, ES, Brasil"}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
