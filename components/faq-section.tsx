import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How quickly will the seeds sprout?</AccordionTrigger>
            <AccordionContent>
              Our seeds are pre-activated — they arrive with no dormancy period. When planted in the included exclusive substrate and kept in the right conditions, you should see the first sprouts breaking through within{" "}
              <strong>7 days</strong>. The Versia Garden App will guide you through optimal conditions for the fastest germination.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do I need any gardening experience?</AccordionTrigger>
            <AccordionContent>
              None at all. The Growing Kit includes everything you need, and the Versia Garden App provides step-by-step video lessons that cover the entire journey — from planting your seeds to enjoying your first spectacular bloom. Think of it as having a personal botanist in your pocket.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What if my seeds don&apos;t germinate?</AccordionTrigger>
            <AccordionContent>
              We guarantee at least <strong>80% germination within 21 days</strong> when using the included substrate and following the app instructions. If your results fall below this, we&apos;ll send you replacement seeds at no cost. Your success matters more to us than anything.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long until I see the first flowers?</AccordionTrigger>
            <AccordionContent>
              Hibiscus typically begin to bloom within <strong>4 to 6 months</strong> from germination, depending on conditions. The included Versia Bloom Accelerator fertilizer is specifically formulated to promote faster, more abundant flowering. The app tracks your progress and lets you know what to expect at every stage.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I start the kit indoors?</AccordionTrigger>
            <AccordionContent>
              Absolutely. In fact, starting indoors is ideal. The seeds and substrate work perfectly on a sunny windowsill, conservatory, or any bright spot. Once your plants are established and the weather is warm enough, you can transplant them outdoors. The app will tell you exactly when and how.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is the hibiscus a perennial plant?</AccordionTrigger>
            <AccordionContent>
              Yes. Once established, hibiscus is a perennial that blooms spectacularly from <strong>late spring through autumn</strong>. In warmer climates, it can bloom nearly year-round. In cooler regions, simply bring your potted plant indoors before the first frost.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
