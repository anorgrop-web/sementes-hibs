import Link from "next/link"

export function Footer() {
  const policyLinks = [
    { label: "Refund Policy", href: "/us/refund-policy" },
    { label: "Shipping", href: "/us/shipping-policy" },
    { label: "Privacy Policy", href: "/us/privacy-policy" },
    { label: "Terms of Service", href: "/us/terms-of-service" },
    { label: "Contact", href: "/us/contact" },
  ]

  const paymentMethods = [
    { name: "American Express", icon: "💳" },
    { name: "Apple Pay", icon: "🍎" },
    { name: "Google Pay", icon: "G" },
    { name: "Mastercard", icon: "💳" },
    { name: "Shop Pay", icon: "S" },
    { name: "Visa", icon: "💳" },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Policy Links Section */}
        <div className="mb-8">
          <nav className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-x-8 md:gap-y-3">
            {policyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white hover:text-white/80 transition-colors text-sm md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Payment Methods */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="bg-white rounded px-2 py-1 flex items-center justify-center min-w-[40px] h-[26px]"
              title={method.name}
            >
              <span className="text-xs font-semibold text-gray-700">{method.icon}</span>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center space-y-1">
          <p className="text-sm text-white/80">© 2026 Versia Garden. All rights reserved.</p>
          <p className="text-xs text-white/60">
            Operated by: 57.203.094 MARIA CLARA RODRIGUES LEITE | CNPJ: 57.203.094/0001-13
          </p>
          <p className="text-xs text-white/60">
            Avenida Girassol, 29.156-572, Cariacica, ES, Brazil |{" "}
            <a href="mailto:info@versiagarden.com" className="hover:text-white/80 transition-colors">
              info@versiagarden.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
