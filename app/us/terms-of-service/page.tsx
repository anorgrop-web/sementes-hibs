import Link from "next/link"
import Image from "next/image"
import { FooterUS } from "@/components/us/footer"

export const metadata = {
  title: "Terms of Service | Versia Garden",
  description: "Terms of service for Versia Garden.",
}

export default function TermsOfServicePage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms govern your use of versiagarden.com and purchases made through it. By accessing or
                ordering, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. About Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden — Legal name: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13 |
                Avenida Girassol, 29.156-572, Cariacica, ES, Brazil |{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                We sell live hibiscus starter plants and digital products (video courses). Product images are
                representative. Natural variation in color, size, and shape is expected and does not constitute a
                defect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Ordering and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By ordering you confirm: you are 18+ or have parental consent, information provided is accurate, you
                authorize the payment charge. Prices displayed in the store&apos;s currency (EUR, GBP, or USD). We may
                change prices but not on placed orders. Payments via Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Subscriptions and Digital Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Master Gardening Video Course is a subscription. Free trial provided as indicated at purchase. After
                trial, automatic charge. Cancel anytime via{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . Cancellation stops future charges but does not refund previous ones.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                See our{" "}
                <Link href="/us/shipping-policy" className="text-[#016630] hover:underline">
                  Shipping Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Refunds and Returns</h2>
              <p className="text-muted-foreground leading-relaxed">
                See our{" "}
                <Link href="/us/refund-policy" className="text-[#016630] hover:underline">
                  Refund Policy
                </Link>{" "}
                for 14-day refund window details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content (text, images, logos, videos, course materials) is property of Versia Garden. No
                reproduction without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Not liable for indirect/consequential damages. Total liability limited to the amount paid for the
                specific order. Not responsible for plant health after delivery if care instructions not followed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Not liable for delays due to circumstances beyond reasonable control (natural disasters, pandemics,
                postal strikes, customs delays, government actions).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                Governed by the laws of Brazil. For EU customers, mandatory consumer protection laws of your country
                also apply where they provide greater protection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Contact{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                first. EU residents may use the European ODR platform:{" "}
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
              <h2 className="text-xl font-semibold mb-3">13. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms. Changes posted with updated date. Continued use constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">14. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision is unenforceable, remaining provisions continue in full effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">15. Contact Us</h2>
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

      <FooterUS />
    </div>
  )
}
