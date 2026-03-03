import { Flower2 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Sprouts in 7 Days, Not Months",
      description: "Our seeds arrive pre-activated — no dormancy period, no waiting game. Plant them in the exclusive substrate, and you'll see the first green shoots breaking through within a week.",
    },
    {
      title: "A Complete System That Does the Thinking for You",
      description: "Substrate, fertilizer, fungicide, seeds, and app — every element is chosen to work together. No guesswork, no extra trips to the garden center, no YouTube rabbit holes.",
    },
    {
      title: "Watch the Entire Journey Unfold",
      description: "From the first tiny sprout to the first spectacular bloom — there's nothing quite like knowing you grew it yourself. This is gardening at its most rewarding.",
    },
    {
      title: "Colors That Light Up Any Space",
      description: "Rare double-petal hibiscus in vivid reds, pinks, purples, and yellows. Whether it's a balcony, a patio, or a full garden — these flowers become the centerpiece.",
    },
  ]

  return (
    <section className="bg-background py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <iframe
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78%] h-[177.78%] min-w-full min-h-full"
                src="https://www.youtube.com/embed/EbRDLkSlS0M?autoplay=1&mute=1&loop=1&playlist=EbRDLkSlS0M&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1"
                title="Versia Garden Product Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                loading="eager"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            From a Tiny Seed to a Garden That Takes Your Breath Away — In Your Hands, On Your Terms.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Most people think growing rare hibiscus from seed is hard. It&apos;s not — when you have the right system. Our Growing Kit gives you pre-activated seeds that sprout in 7 days, an exclusive substrate, professional-grade fertilizer, and a step-by-step video app that walks you through every single stage. You don&apos;t need experience. You don&apos;t need luck. You just need to open the box.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Growers Love This Kit</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 text-emerald-600">
                    <Flower2 className="w-full h-full" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
