import Link from "next/link"
import Image from "next/image"
import { FooterUS } from "@/components/us/footer"

export const metadata = {
  title: "Refund Policy | Versia Garden",
  description: "Our refund policy for Versia Garden products.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <Link href="/us">
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

      {/* Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/us" className="text-sm text-[#016630] hover:underline mb-6 inline-block">
            &larr; Back to home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Our Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Versia Garden, we want you to be completely satisfied with your purchase. Because we sell live plants,
                we understand that the arrival condition of your order is critical. If your plants arrive damaged, dead,
                or in poor health, we are committed to making it right.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. 14-Day Refund Window</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have 14 days from the date of delivery to request a refund or replacement. This is in accordance
                with European consumer protection regulations (EU Directive 2011/83/EU on consumer rights) and FTC
                guidelines for US consumers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">To be eligible for a refund:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>You must contact us within 14 days of receiving your order.</li>
                <li>You must provide photographic evidence of the issue (damaged plants, incorrect items, etc.).</li>
                <li>The plants must not have been repotted or significantly altered from their delivered state.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Contact us at{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Your order number or the email address used at checkout.</li>
                <li>A brief description of the issue.</li>
                <li>Photos showing the condition of the plants upon arrival.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We will review your request within 48 hours and respond with a resolution.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Refund Options</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Depending on the situation, we may offer:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>A full refund to the original payment method.</li>
                <li>A replacement shipment at no additional cost.</li>
                <li>A partial refund if only part of the order was affected.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Refunds are processed within 5–10 business days after approval. The time for the refund to appear on
                your statement depends on your bank or card provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Non-Refundable Items</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>
                  Plants that have died due to improper care after delivery (e.g., overwatering, frost exposure,
                  incorrect sunlight).
                </li>
                <li>
                  Digital products, including the Master Gardening Video Course subscription, after the content has been
                  accessed. If you have not accessed the course, you may cancel within 14 days for a full refund.
                </li>
                <li>Orders where more than 14 days have passed since delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Late or Missing Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                If approved for a refund but not received within 10 business days, check with your bank or credit card
                company first. Then contact us at{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Exchanges</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not currently offer direct exchanges. If you would like a different product, please request a
                refund and place a new order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email:{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                — Response time: within 48 hours.
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              Versia Garden | Operated by: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 |
              Avenida Girassol, 29.156-572, Cariacica, ES, Brazil
            </div>
          </div>
        </div>
      </main>

      <FooterUS />
    </div>
  )
}
