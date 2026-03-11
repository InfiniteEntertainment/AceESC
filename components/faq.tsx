"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does booking work?",
    answer: "Submit a Request a Ride form with your pickup details (date/time, pickup/drop-off, passengers, and any notes). We'll review availability and logistics, then get back to you within 1 hour to confirm your booking with the final details."
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes. We provide airport transfers in San Diego and surrounding areas, with a professional chauffeur and a late-model Cadillac Escalade for a smooth, discreet pickup and drop-off."
  },
  {
    question: "Is there an hourly minimum?",
    answer: "Yes. Our hourly chauffeur service has a 3-hour minimum."
  },
  {
    question: "Do you provide service outside San Diego?",
    answer: "Yes. In addition to San Diego service, we offer long-distance transfers throughout Southern California (availability-based)."
  },
  {
    question: "What vehicle do you use?",
    answer: "We operate a late-model Cadillac Escalade as our standard vehicle—clean, professionally maintained, and designed for a luxury, executive-ready ride."
  },
  {
    question: "How soon will I receive confirmation?",
    answer: "We will get back to you within 1 hour to confirm your booking after you submit your request."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium">
            Frequently asked
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
