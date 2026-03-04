"use client"

import { Sprout, Leaf, FlaskConical, Shield, Smartphone, Trophy } from "lucide-react"

const items = [
  {
    icon: Sprout,
    title: "40 Heritage Hibiscus Seeds",
    subtitle: "Non-GMO · Pre-Activated · +80% Germination",
    description:
      "Hand-selected heritage varieties with zero dormancy. While ordinary seeds sleep for weeks, ours wake up the moment they touch soil. First sprouts in 7 days — that's not marketing, that's botany.",
  },
  {
    icon: Leaf,
    title: "Exclusive Germination Substrate",
    subtitle: "Formulated for Hibiscus · pH 6.5–6.8",
    description:
      "Not store-bought soil. A proprietary blend engineered specifically for hibiscus germination — perfect moisture retention, ideal drainage, precise acidity. Your seeds don't adapt to the soil. The soil adapts to them.",
  },
  {
    icon: FlaskConical,
    title: "Versia Bloom Accelerator",
    subtitle: "Professional-Grade Formula",
    description:
      "The difference between 'it grew' and 'it's breathtaking.' Our fertilizer accelerates root development and triggers abundant flowering — turning healthy plants into show-stopping displays of color.",
  },
  {
    icon: Shield,
    title: "Protective Fungicide",
    subtitle: "Early-Stage Disease Shield",
    description:
      "Seedlings are most vulnerable in their first weeks. Our fungicide creates an invisible barrier against the diseases that kill 90% of amateur growing attempts. Protection your plants deserve from day one.",
  },
  {
    icon: Smartphone,
    title: "Versia Garden App",
    subtitle: "Video Lessons · Daily Reminders · Progress Tracking",
    description:
      "Your personal botanist — on call 24/7, never impatient, always precise. Step-by-step video lessons from germination to first bloom. You'll never wonder 'what do I do now?' again.",
  },
]

export function GerminationSection() {
  const scrollToProduct = () => {
    const el = document.getElementById("product-section")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 text-balance">
          Everything You Need to Make Spring 2026 the Most Beautiful You&apos;ve Ever Grown
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mt-4 mb-12 text-pretty">
          This isn&apos;t a packet of seeds and a prayer. This is a complete professional growing system — five precision elements, each selected by our botanists to guarantee one thing: your success. Open the box, follow the steps, and watch your garden transform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                <span className="block text-xs text-emerald-600 font-medium uppercase tracking-wide mt-1">
                  {item.subtitle}
                </span>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-emerald-50 rounded-xl p-6 mt-10 text-center">
          <div className="flex justify-center mb-2">
            <Trophy className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />
          </div>
          <h4 className="font-bold text-emerald-800 uppercase tracking-wider text-sm">
            The Versia Guarantee
          </h4>
          <p className="text-gray-700 text-base mt-2 max-w-2xl mx-auto">
            Plant with confidence: if less than 80% of your seeds germinate within 21 days using our system, we replace them — free. No forms, no excuses. Just new seeds at your door.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-500 italic mb-4">
            &ldquo;Spring 2026 won&apos;t wait. Your kit is ready. Are you?&rdquo;
          </p>
          <button
            onClick={scrollToProduct}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Start Growing — Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}
