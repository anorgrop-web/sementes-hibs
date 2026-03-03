import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/es/footer"

export const metadata = {
  title: "Política de Privacidad | Versia Garden",
  description: "Política de privacidad de Versia Garden.",
}

export default function PrivacidadPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">{"Política de Privacidad"}</h1>
          <p className="text-sm text-muted-foreground mb-8">{"Última actualización: Marzo 2026"}</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">{"1. Introducción"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Versia Garden se compromete a proteger su privacidad. La presente política explica cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales de conformidad con el Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"2. Información que Recopilamos"}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                <li>
                  <span className="font-medium text-foreground">{"Cuando realiza un pedido:"}</span>
                  {" nombre completo, correo electrónico, número de teléfono, dirección de envío y facturación, información de pago (procesada por Stripe — no almacenamos los datos de su tarjeta)."}
                </li>
                <li>
                  <span className="font-medium text-foreground">{"Automáticamente al navegar:"}</span>
                  {" dirección IP, tipo de navegador, páginas visitadas, sitio de procedencia, tipo de dispositivo."}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"3. Cómo Utilizamos sus Datos"}</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Procesar y gestionar pedidos."}</li>
                <li>{"Enviar confirmaciones de pedido y actualizaciones de envío."}</li>
                <li>{"Prestar servicio de atención al cliente."}</li>
                <li>{"Mejorar nuestro sitio web y servicios."}</li>
                <li>{"Enviar comunicaciones de marketing (solo si ha dado su consentimiento)."}</li>
                <li>{"Cumplir con las obligaciones legales."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"4. Procesamiento de Pagos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Todos los pagos se procesan de forma segura a través de Stripe. No vemos ni almacenamos su número de tarjeta completo. Más información: "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#016630] hover:underline"
                >
                  https://stripe.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"5. Cookies y Rastreo"}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                <li>
                  <span className="font-medium text-foreground">{"Facebook Pixel:"}</span>
                  {" medición publicitaria. Puede desactivarlo a través de la configuración de anuncios de Facebook."}
                </li>
                <li>
                  <span className="font-medium text-foreground">{"Google Analytics:"}</span>
                  {" datos anónimos sobre el uso del sitio."}
                </li>
                <li>
                  <span className="font-medium text-foreground">{"Cookies esenciales:"}</span>
                  {" necesarias para el funcionamiento del carrito y el proceso de pago."}
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {"Puede desactivar las cookies no esenciales a través de la configuración de su navegador."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"6. Compartición de Datos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"No vendemos sus datos personales. Compartimos datos únicamente con: Stripe (pagos), socio logístico (nombre y dirección para la entrega), Facebook/Meta (datos anónimos mediante Pixel), Google (analítica anónima)."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"7. Conservación de Datos"}</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Datos de pedidos: 5 años (obligaciones fiscales y contables)."}</li>
                <li>{"Datos de marketing: hasta que retire su consentimiento."}</li>
                <li>{"Analítica: 26 meses."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"8. Sus Derechos (RGPD)"}</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                {"Como interesado, usted tiene derecho a:"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>{"Acceder a sus datos personales."}</li>
                <li>{"Rectificar datos inexactos o incompletos."}</li>
                <li>{"Solicitar la supresión («derecho al olvido»)."}</li>
                <li>{"Limitar el tratamiento."}</li>
                <li>{"Solicitar la portabilidad de sus datos."}</li>
                <li>{"Retirar el consentimiento al marketing en cualquier momento."}</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {"Para ejercer sus derechos, le rogamos que nos contacte en "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {". Responderemos en un plazo de 30 días."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"9. Seguridad de los Datos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Cifrado SSL/TLS, cumplimiento PCI-DSS de Stripe, controles de acceso en los sistemas internos."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"10. Transferencias Internacionales de Datos"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Los datos pueden transferirse fuera del EEE (Brasil, EE. UU.). Se han adoptado las salvaguardas adecuadas."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"11. Privacidad de Menores"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Nuestro sitio no está dirigido a menores de 16 años. No recopilamos conscientemente datos de menores."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"12. Cambios en esta Política"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Las actualizaciones se publicarán en esta página con la fecha de revisión actualizada."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"13. Contacto"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {"Email: "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                {" — Tiempo de respuesta: en un plazo de 30 días."}
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              {"Responsable del tratamiento: Versia Garden | Operado por: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 | Avenida Girassol, 29.156-572, Cariacica, ES, Brasil"}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
