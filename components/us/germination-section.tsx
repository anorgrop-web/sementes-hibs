import Image from "next/image"

export function GerminationSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              PRE-ACTIVATED SEEDS: LIFE IS ALREADY WAITING INSIDE
            </h2>

            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Most hibiscus seeds sit dormant for weeks before they even begin to wake up. Ours don&apos;t. We carefully prepare each seed to remove the dormancy barrier, so the moment it touches the substrate, germination begins immediately.
              </p>

              <p>
                Combined with our exclusive hibiscus germination substrate and the Versia Bloom Accelerator fertilizer, your seeds have everything they need to sprout in 7 days or less. And with the Versia Garden App guiding you through every step with video lessons, you&apos;ll know exactly what to do — and when to do it — from seed to spectacular bloom.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2 md:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/Versia/_prompt_professional_2k_202602241415.jpeg"
                alt="Germination tray with seedlings and hand opening lid"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
