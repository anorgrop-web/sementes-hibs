import { Star } from 'lucide-react'
import Image from "next/image"

export function OurStorySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/design-mode/Gemini_Generated_Image_bh8t6jbh8t6jbh8t.png"
                alt="Helena Viana, founder of Versia Garden, in greenhouse"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Story</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Versia Garden&apos;s story begins with the passion of our founder, botanist Helena Viana, for the transformative power of flowers. She saw that thousands of people dreamed of growing rare, exotic blooms but were held back by one thing: not knowing where to start. Random seeds from unknown sources. No guidance. No support. Her mission became clear: create a complete growing system that empowers anyone — regardless of experience — to grow something extraordinary from seed.
              </p>

              <p>
                From that mission, &apos;The Colour Awakening&apos; movement was born. Today, we are more than a store; we are your partner in the journey from seed to bloom. Every element of our Growing Kit — from the pre-activated seeds to the exclusive substrate to the app — exists to make your success inevitable. Join us, plant a seed, and watch your own story of colour unfold.
              </p>
            </div>

            {/* Trustpilot Rating */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a] p-1 flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                ))}
              </div>
              <span className="text-gray-700 font-medium">(19,329 Reviews)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-7xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/design-mode/a8e399fcfcf6a29c3ce0bd1ae5ff2900d1d38aa9.webp"
              alt="Hibiscus growth process"
              width={1200}
              height={600}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
