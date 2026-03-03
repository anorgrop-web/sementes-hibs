import Link from "next/link"
import Image from "next/image"
import { FooterUS } from "@/components/us/footer"

export const metadata = {
  title: "Privacy Policy | Versia Garden",
  description: "Our privacy policy for Versia Garden.",
}

export default function PrivacyPolicyPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Versia Garden (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your
                privacy. This policy explains how we collect, use, store, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                <li>
                  <span className="font-medium text-foreground">When you place an order:</span> Full name, email, phone
                  number, shipping and billing address, payment information (processed by Stripe — we do not store card
                  details).
                </li>
                <li>
                  <span className="font-medium text-foreground">Automatically when visiting:</span> IP address, browser
                  type, pages visited, referring website, device type.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Process and fulfill orders.</li>
                <li>Send order confirmation and shipping updates.</li>
                <li>Provide customer support.</li>
                <li>Improve our website and services.</li>
                <li>Send marketing communications (only if you opted in).</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Payment Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All payments are processed securely through Stripe. We never see or store your full card number. More
                info:{" "}
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
              <h2 className="text-xl font-semibold mb-3">5. Cookies and Tracking</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
                <li>
                  <span className="font-medium text-foreground">Facebook Pixel:</span> Advertising measurement. Opt out
                  via Facebook ad settings.
                </li>
                <li>
                  <span className="font-medium text-foreground">Google Analytics:</span> Anonymized website usage data.
                </li>
                <li>
                  <span className="font-medium text-foreground">Essential cookies:</span> Required for cart and
                  checkout.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You can disable non-essential cookies through browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We share data only with: Stripe (payments), shipping partner
                (name and address for fulfillment), Facebook/Meta (anonymized purchase data via Pixel), Google
                (anonymized analytics).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Order data: 5 years (tax/accounting).</li>
                <li>Marketing data: until you unsubscribe.</li>
                <li>Analytics: 26 months.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Your Rights (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to: access, correct, delete, restrict processing, port your data, and withdraw
                marketing consent. Contact{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>
                . Response within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                SSL/TLS encryption, Stripe PCI-DSS compliance, access controls on internal systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data may be transferred outside the EEA (Brazil, US). Appropriate safeguards are in place.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">{"11. Children's Privacy"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Not directed at under-16s. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Updates posted on this page with revised date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email:{" "}
                <a href="mailto:info@versiagarden.com" className="text-[#016630] hover:underline">
                  info@versiagarden.com
                </a>{" "}
                — Response time: within 30 days.
              </p>
            </section>

            <div className="border-t border-border pt-6 text-xs text-muted-foreground">
              Data Controller: Versia Garden | Operated by: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ:
              57.203.094/0001-13 | Avenida Girassol, 29.156-572, Cariacica, ES, Brazil
            </div>
          </div>
        </div>
      </main>

      <FooterUS />
    </div>
  )
}
