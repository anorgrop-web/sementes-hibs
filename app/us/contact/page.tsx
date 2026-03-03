import Link from "next/link"
import Image from "next/image"
import { FooterUS } from "@/components/us/footer"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Contact Us | Versia Garden",
  description: "Get in touch with Versia Garden.",
}

export default function ContactPage() {
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

          <h1 className="text-3xl font-bold text-foreground mb-2">Contact Us</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Have a question? We&apos;re here to help.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need help with your order, have a question about plant care, or just want to say hello —
              we&apos;d love to hear from you.
            </p>

            {/* Email CTA */}
            <div className="bg-[#F3F8F4] border border-[#016630]/20 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#016630]/10 flex-shrink-0">
                <Mail className="h-5 w-5 text-[#016630]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Email us</p>
                <a
                  href="mailto:info@versiagarden.com"
                  className="text-[#016630] hover:underline text-lg font-medium"
                >
                  info@versiagarden.com
                </a>
                <p className="text-sm text-muted-foreground mt-1">Response time: within 24–48 hours</p>
              </div>
            </div>

            <section>
              <h2 className="text-xl font-semibold mb-3">What to include in your message</h2>
              <p className="text-muted-foreground mb-2">For order inquiries:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                <li>Your order number or email used at checkout.</li>
                <li>Brief description of the issue.</li>
                <li>Photos if relevant.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Business Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p className="font-medium text-foreground">Versia Garden</p>
                <p>Operated by: 57.203.094 MARIA CLARA RODRIGUES LEITE</p>
                <p>CNPJ: 57.203.094/0001-13</p>
                <p>Avenida Girassol, 29.156-572, Cariacica, ES, Brazil</p>
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

      <FooterUS />
    </div>
  )
}
