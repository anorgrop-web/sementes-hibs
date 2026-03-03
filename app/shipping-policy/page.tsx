import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Shipping Policy | Versia Garden",
  description: "Our shipping policy for Versia Garden products.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
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
          <Link href="/" className="text-sm text-[#016630] hover:underline mb-6 inline-block">
            &larr; Back to home
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Shipping Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Where We Ship</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden ships to: United Kingdom, Italy, Spain, France, Portugal, Germany, and the United States.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Shipping Methods and Delivery Times</h2>
              <p className="text-muted-foreground font-medium mb-2">Standard Shipping:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2 mb-4">
                <li>Europe (UK, Italy, Spain, France, Portugal, Germany): 7–10 business days. FREE.</li>
                <li>United States: 10–15 business days. FREE.</li>
              </ul>
              <p className="text-muted-foreground font-medium mb-2">Express Shipping:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2 mb-4">
                <li>Europe: 3–4 business days. £14.55 / €14.55.</li>
                <li>United States: 5–7 business days. $14.55.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Delivery times are estimates calculated from the date of dispatch, not the date of order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Ship Live Plants</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Plants are shipped directly from our partner nursery in custom-designed, secure packaging:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Plants placed horizontally in long rectangular boxes.</li>
                <li>Corrugated cardboard dividers hold each pot securely.</li>
                <li>Foliage wrapped in clear protective plastic.</li>
                <li>Care instruction card included with every order.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Order Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orders are processed and dispatched within 1–3 business days. During peak seasons (spring), processing
                may take up to 5 business days. You will receive a confirmation email with tracking information once
                dispatched.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Tracking Your Order</h2>
              <p className="text-muted-foreground leading-relaxed">
                You will receive an email with tracking details once shipped. If you do not receive tracking information
                within 5 business days, contact us at{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Customs and Import Duties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Within the EU: no customs duties apply. For the US and UK: orders may be subject to local import duties
                or taxes — these are the customer&apos;s responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Delivery Issues</h2>
              <p className="text-muted-foreground leading-relaxed">
                If your order has not arrived within the estimated window, contact{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . We will investigate within 48 hours. If returned due to an incorrect address, we will contact you to
                arrange re-shipment (additional fees may apply).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email:{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              Versia Garden | Operated by: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 |
              Avenida Girassol, 29.156-572, Cariacica, ES, Brazil
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
