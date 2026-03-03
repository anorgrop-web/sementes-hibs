import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/es/footer"

export const metadata = {
  title: "Política de Reembolso | Versia Garden",
  description: "Nuestra política de reembolso para los productos de Versia Garden.",
}

export default function ReembolsoPolicyPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">{"Política de Reembolso"}</h1>
          <p className="text-sm text-muted-foreground mb-8">{"Última actualización: Marzo 2026"}</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">{"1. Nuestra Garantía"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"En Versia Garden, queremos que esté completamente satisfecho con su compra. Dado que vendemos plantas vivas, comprendemos la importancia de que su pedido llegue en perfectas condiciones. Si las plantas llegan dañadas, muertas o en mal estado, nos comprometemos a resolver el problema."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"2. Plazo de Reembolso de 14 Días"}</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {"Dispone de 14 días desde la fecha de entrega para solicitar un reembolso o sustitución, de acuerdo con la Ley General para la Defensa de los Consumidores y Usuarios (Real Decreto Legislativo 1/2007) y la Directiva Europea 2011/83/UE sobre derechos de los consumidores."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">{"Para tener derecho al reembolso:"}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Debe contactarnos dentro de los 14 días siguientes a la recepción de su pedido."}</li>
                <li>{"Debe aportar evidencia fotográfica del problema (plantas dañadas, artículos incorrectos, etc.)."}</li>
                <li>{"Las plantas no deben haber sido trasplantadas ni modificadas significativamente desde su estado de entrega."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"3. Cómo Solicitar un Reembolso"}</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                {"Le rogamos que nos contacte en "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {" indicando:"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Su número de pedido o la dirección de correo electrónico utilizada en el momento de la compra."}</li>
                <li>{"Una breve descripción del problema."}</li>
                <li>{"Fotos que muestren el estado de las plantas a su llegada."}</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {"Revisaremos su solicitud en un plazo de 48 horas y le responderemos con una solución."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"4. Opciones de Reembolso"}</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                {"Dependiendo de la situación, podemos ofrecer:"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Reembolso completo al método de pago original."}</li>
                <li>{"Envío de sustitución sin coste adicional."}</li>
                <li>{"Reembolso parcial si solo una parte del pedido resultó dañada."}</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {"Los reembolsos se procesan en un plazo de 5–10 días hábiles tras su aprobación. El tiempo hasta que aparezca en su extracto depende de su banco o entidad emisora de la tarjeta."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"5. Artículos No Reembolsables"}</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  {"Plantas muertas por cuidados inadecuados tras la entrega (p. ej., riego excesivo, exposición a heladas, luz solar inadecuada)."}
                </li>
                <li>
                  {"Productos digitales, incluida la suscripción al Curso de Jardinería en Vídeo, una vez que se haya accedido al contenido. Si no ha accedido al curso, puede ejercer el derecho de desistimiento en un plazo de 14 días para obtener el reembolso completo."}
                </li>
                <li>{"Pedidos en los que hayan transcurrido más de 14 días desde la entrega."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"6. Reembolsos Tardíos o No Recibidos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Si ha recibido confirmación de reembolso pero no lo ha recibido en un plazo de 10 días hábiles, le rogamos que compruebe primero con su banco o entidad emisora de la tarjeta de crédito. Si el problema persiste, contáctenos en "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {"."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"7. Cambios"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Actualmente no ofrecemos cambios directos. Si desea un producto diferente, le pedimos que solicite el reembolso y realice un nuevo pedido."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"8. Contacto"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Email: "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {" — Tiempo de respuesta: en un plazo de 48 horas."}
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
