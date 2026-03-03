import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/es/footer"

export const metadata = {
  title: "Términos y Condiciones | Versia Garden",
  description: "Términos y condiciones de Versia Garden.",
}

export default function TerminosCondicionesPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">{"Términos y Condiciones"}</h1>
          <p className="text-sm text-muted-foreground mb-8">{"Última actualización: Marzo 2026"}</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">{"1. Introducción"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Los presentes Términos y Condiciones regulan el uso del sitio versiagarden.com y las compras realizadas a través del mismo. Al acceder al sitio o realizar un pedido, usted acepta íntegramente estos Términos."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"2. Quiénes Somos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Versia Garden — Razón social: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 | Avenida Girassol, 29.156-572, Cariacica, ES, Brasil | "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"3. Productos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Vendemos plantas de hibisco vivas y productos digitales (videocursos). Las imágenes de los productos son orientativas. La variación natural de color, tamaño y forma es esperada y no constituye un defecto."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"4. Pedidos y Pagos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Al realizar un pedido, usted confirma que: tiene al menos 18 años o cuenta con el consentimiento de sus padres o tutores, que la información proporcionada es exacta, y que autoriza el cargo del pago. Los precios se muestran en la moneda de la tienda (EUR, GBP o USD). Los pagos se procesan a través de Stripe."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"5. Suscripciones y Productos Digitales"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"El Curso de Jardinería en Vídeo es una suscripción. Se ofrece un período de prueba gratuito según se indique en el momento de la compra. Tras el período de prueba, la renovación se realiza de forma automática. Puede cancelar en cualquier momento escribiendo a "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {". La cancelación detiene los cargos futuros pero no da derecho a reembolso de los ya realizados."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"6. Envío y Entrega"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Consulte nuestra "}
                <Link href="/es/shipping-policy" className="text-[#016630] hover:underline">
                  {"Política de Envío"}
                </Link>
                {"."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"7. Reembolsos y Devoluciones"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Consulte nuestra "}
                <Link href="/es/refund-policy" className="text-[#016630] hover:underline">
                  {"Política de Reembolso"}
                </Link>
                {" para más detalles sobre el plazo de reembolso de 14 días. Los consumidores residentes en España se benefician de las protecciones adicionales previstas en la Ley General para la Defensa de los Consumidores y Usuarios (Real Decreto Legislativo 1/2007)."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"8. Propiedad Intelectual"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Todos los contenidos (textos, imágenes, logotipos, vídeos, materiales del curso) son propiedad de Versia Garden. Queda prohibida cualquier reproducción sin autorización escrita."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"9. Limitación de Responsabilidad"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"No somos responsables de daños indirectos o consecuentes. La responsabilidad total se limita al importe pagado por el pedido en cuestión. No somos responsables de la salud de las plantas tras la entrega si no se siguen las instrucciones de cuidado."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"10. Fuerza Mayor"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"No somos responsables de los retrasos causados por circunstancias ajenas a nuestro control razonable (desastres naturales, pandemias, huelgas postales, retrasos aduaneros, acciones gubernamentales)."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"11. Ley Aplicable"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Los presentes Términos se rigen por la legislación brasileña. Para los consumidores residentes en España, se aplican asimismo las normas imperativas de protección al consumidor español en la medida en que ofrezcan una mayor protección."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"12. Resolución de Disputas"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Le rogamos que nos contacte primero en "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {". Los consumidores de la UE pueden utilizar la plataforma ODR de la Comisión Europea: "}
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
              <h2 className="text-xl font-semibold mb-3">{"13. Modificaciones"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Podemos actualizar estos Términos. Los cambios se publicarán con la fecha actualizada. El uso continuado del sitio implica la aceptación de los nuevos Términos."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"14. Divisibilidad"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Si alguna disposición resultara inaplicable, las restantes disposiciones continuarán en plena vigencia."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"15. Contacto"}</h2>
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
