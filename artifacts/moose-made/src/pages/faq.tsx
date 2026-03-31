import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General & Process",
    questions: [
      {
        q: "What makes Moose Made different from a standard print shop?",
        a: "A print shop simply puts ink on paper you provide. Moose Made is an end-to-end packaging manufacturing partner. We engineer the physical structure (dielines), match the spec to the ideal global factory, oversee quality control during mass production, and handle the freight and logistics to get it to your door. We manage the complexity of physical supply chains."
      },
      {
        q: "Do you design the artwork for the packaging?",
        a: "While our primary focus is structural engineering and manufacturing, we do offer design support services. If you have an existing brand identity, we can help adapt it to the 3D structure. If you need full conceptual branding from scratch, we have a network of top-tier branding agencies we partner with."
      },
      {
        q: "What is your typical turnaround time?",
        a: "Timelines vary drastically based on complexity, material, and volume. A general rule of thumb: Structural design and sampling takes 2-4 weeks. Mass production takes 3-6 weeks. Freight and delivery (if overseas) can add 3-5 weeks. We will provide a precise timeline estimate during the discovery phase of your specific project."
      }
    ]
  },
  {
    category: "Manufacturing & Minimums",
    questions: [
      {
        q: "What are your Minimum Order Quantities (MOQs)?",
        a: "Our MOQs depend on the type of packaging. For fully custom corrugated mailers or folding cartons, minimums typically start around 1,000 to 2,500 units to be economically viable. For flexible pouches or highly specialized rigid boxes, it may be 5,000+. We pride ourselves on finding solutions for emerging brands, so please reach out even if you're unsure."
      },
      {
        q: "Where is your packaging manufactured?",
        a: "We are manufacturer-agnostic. We maintain a vetted network of partner facilities globally — spanning Asia, Europe, and beyond. We recommend the facility that best balances your requirements for quality, budget, and lead time."
      },
      {
        q: "Do you offer eco-friendly or sustainable materials?",
        a: "Absolutely. Sustainability is a core pillar. We offer a wide range of options including FSC-certified papers, post-consumer recycled (PCR) content, soy-based inks, and compostable films. We can consult on the most impactful sustainable choices that still meet your structural needs."
      }
    ]
  },
  {
    category: "Pricing & Quotes",
    questions: [
      {
        q: "How much does custom packaging cost?",
        a: "Pricing is highly variable based on structure, material, finish (foil, embossing, spot UV), and volume. Generally, unit costs decrease significantly as volume increases. The best way to get an accurate number is to fill out our Quote Request form."
      },
      {
        q: "Do I have to pay for prototypes or samples?",
        a: "Yes. Producing a physical, custom prototype requires setting up machinery and custom tooling. We charge a one-time sampling fee to cover this. However, this fee is often credited back toward your mass production invoice if you proceed with the order."
      }
    ]
  }
];

export default function Faq() {
  return (
    <div className="bg-background pt-12 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Frequently Asked <span className="text-accent italic font-light">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Clarity in complex processes. If you don't see your question answered here, our team is always available to help.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        {faqs.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-serif font-semibold mb-6 text-primary border-b border-border pb-4">{category.category}</h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, i) => (
                <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-lg hover:text-accent transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-6 md:px-12 mt-24">
        <div className="bg-secondary p-12 border border-border text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-8">We're happy to discuss the specifics of your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12 px-8">
                Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
