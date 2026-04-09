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
    category: "What Moose Made Does",
    questions: [
      {
        q: "What kinds of products does Moose Made work on?",
        a: "We work across the broad spectrum of physical consumer products — food and beverage, beauty and personal care, home goods, custom accessories, consumer electronics accessories, and more. If your product has a form factor that can be designed, engineered, and manufactured, we can likely help. Reach out and describe what you're making — we'll tell you honestly if it's a fit."
      },
      {
        q: "Are you a design agency, a sourcing broker, or something else?",
        a: "We're none of those, exactly. Moose Made is a physical product execution partner. We handle the full journey — concept direction, product design, engineering, supplier sourcing, manufacturing oversight, quality control, and logistics. Design agencies design. Brokers source. We do both and everything in between, staying involved and accountable through every stage."
      },
      {
        q: "What makes Moose Made different from just hiring a manufacturer directly?",
        a: "Going direct to a manufacturer requires you to know exactly what you want, speak the technical language of production, manage quality control, and coordinate logistics — all while running your business. Moose Made acts as your execution layer. We translate your vision into what factories need, manage the relationship, catch problems before they ship, and handle delivery. You stay focused on your product and your customers."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "What if I only have a rough idea — can I still reach out?",
        a: "Yes. That's actually one of the best times to talk to us. A rough idea, a sketch, a reference product, or even just a problem you're trying to solve is enough to start a conversation. We help clients clarify and define their product concept before anything moves into design or production. You don't need a polished brief."
      },
      {
        q: "What information do you need to give me a sense of scope or cost?",
        a: "The more context the better, but at a minimum it helps to know: what type of product you're making, a rough sense of quantity, any material or functional requirements, and your target timeline. Our intake form asks for this — or you can just email us a description. We'll follow up with any gaps."
      },
      {
        q: "How long does a typical project take from start to finish?",
        a: "It depends heavily on the product complexity, material sourcing, and manufacturing location. A general range: concept and design can take 2–6 weeks. Engineering and sampling add 3–6 weeks. Production adds 4–8 weeks. Freight adds 2–5 weeks depending on origin. We'll give you a realistic timeline specific to your project before any work begins."
      }
    ]
  },
  {
    category: "Manufacturing & Minimums",
    questions: [
      {
        q: "What are your minimum order quantities?",
        a: "Minimums vary significantly by product type and manufacturing method. Some products can be viable at a few hundred units; others require thousands to be economically feasible. We don't have a universal MOQ — instead, we scope each project individually and find the approach that makes sense for your stage and volume. If you're unsure whether your quantity works, just ask."
      },
      {
        q: "Where are products manufactured?",
        a: "We're manufacturer-agnostic and maintain a vetted network of production partners globally. We recommend the facility that best balances your specific requirements: quality standards, capability, lead time, and cost. Depending on the product, that might be domestic or international production."
      },
      {
        q: "Do you offer sustainable or eco-conscious material options?",
        a: "Yes. We can source and specify a range of sustainable materials depending on your product category — recycled content, bio-based materials, FSC-certified substrates, and more. We'll advise on what options are practical for your product and what the tradeoffs are in cost and availability."
      }
    ]
  },
  {
    category: "Pricing & Process",
    questions: [
      {
        q: "How does pricing work?",
        a: "Pricing depends on product complexity, materials, manufacturing process, and quantity. We don't publish fixed pricing because each project is genuinely different. After an initial conversation, we'll put together a project scope with a clear cost estimate before any work begins. There are no hidden fees — we're transparent about what things cost and why."
      },
      {
        q: "What does the client need to provide at the start?",
        a: "At minimum: a description of what you want to make, any reference products or visuals that capture the direction, your target quantity range, and your timeline. If you have existing brand assets (logo, colors, style guidelines), share those too. Everything else — specifications, engineering, supplier selection — is our job."
      },
      {
        q: "Do I pay for prototypes or samples?",
        a: "Yes. Physical samples require tooling, material setup, and factory time — all of which have real costs. We charge a sampling fee that covers this. In most cases, the sampling cost is applied as a credit toward your production invoice if you proceed. We'll be clear about this upfront."
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
            Common questions from people in the early stages of bringing a physical product to life. If yours isn't here, just reach out.
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
          <p className="text-muted-foreground mb-8">We're happy to talk through the specifics of your project — no pressure, no pitch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12 px-8">
                Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
