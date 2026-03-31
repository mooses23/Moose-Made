import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-background pt-12 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Crafted with <span className="text-accent italic font-light">Intention</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that packaging is the physical handshake between a brand and its customer. It deserves the same obsessive attention to detail as the product inside it.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="prose prose-lg md:prose-xl prose-stone max-w-none font-serif text-primary/80 leading-relaxed mb-24">
          <p>
            Moose Made was born out of frustration. As founders and operators, we saw firsthand how difficult it was for emerging brands to navigate the opaque world of custom packaging. The industry was plagued by slow communication, hidden fees, and a lack of creative empathy.
          </p>
          <p>
            We built Moose Made to be the partner we wished we had. A firm that speaks the language of modern design, understands the rigorous demands of supply chain logistics, and treats every project like an art piece.
          </p>
          <p>
            We don't operate as brokers. We operate as your extended manufacturing arm—leveraging our network, our structural engineers, and our proprietary technology to turn your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 border border-border">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">Our Philosophy</h3>
            <p className="text-muted-foreground mb-4">
              Great packaging sits at the intersection of aesthetics and physics. It must be beautiful enough to stop someone in an aisle, but sturdy enough to survive a fulfillment center.
            </p>
            <p className="text-muted-foreground">
              We never compromise on either.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground p-10">
            <h3 className="text-2xl font-serif font-semibold mb-4">The Standard</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="border-b border-primary-foreground/10 pb-4">Absolute Transparency in Sourcing</li>
              <li className="border-b border-primary-foreground/10 pb-4">Obsessive Quality Control</li>
              <li className="border-b border-primary-foreground/10 pb-4">Sustainable & Forward-Thinking Materials</li>
              <li>Responsive, Direct Communication</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
