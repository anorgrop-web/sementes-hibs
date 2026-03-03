import { Check, X } from 'lucide-react'

export function ComparisonSection() {
  const features = [
    "Pre-Activated Seeds — Sprout in 7 Days",
    "Exclusive Hibiscus Germination Substrate Included",
    "Professional Bloom Accelerator Fertilizer Included",
    "Protective Fungicide for Healthy Growth",
    "Step-by-Step Video App — Seed to Bloom",
    "Germination Guarantee (80%+ in 21 Days)",
    "24/7 Customer Support",
    "100% Secure Payment with SSL Encryption",
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="lg:max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Choose the Growing Hibiscus Kit by Versia Garden?
            </h2>
            <p className="text-muted-foreground">See why our complete system delivers results that loose seeds never could.</p>
          </div>

          <div className="flex-1 lg:max-w-xl">
            <div className="flex justify-end gap-0 mb-2 pr-1">
              <div className="w-24 text-center font-bold text-sm">Versia</div>
              <div className="w-24 text-center font-bold text-sm">Others</div>
            </div>

            <div className="flex flex-col gap-0 shadow-lg rounded-lg overflow-hidden">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div
                    className={`bg-[#2d5f4f] text-white p-4 font-medium text-sm md:text-base flex-1 ${
                      index === 0 ? "rounded-tl-lg" : ""
                    } ${index === features.length - 1 ? "rounded-bl-lg" : ""}`}
                  >
                    {feature}
                  </div>

                  <div className="w-24 bg-white p-4 flex items-center justify-center border-l border-gray-200">
                    <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                  </div>

                  <div
                    className={`w-24 bg-white p-4 flex items-center justify-center border-l border-gray-200 ${
                      index === 0 ? "rounded-tr-lg" : ""
                    } ${index === features.length - 1 ? "rounded-br-lg" : ""}`}
                  >
                    <X className="w-5 h-5 text-black" strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
