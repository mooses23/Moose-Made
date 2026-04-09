import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="bg-background pt-12 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Ideas are easy.<br />
            <span className="text-accent italic font-light">Execution is hard.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Moose Made exists to solve execution — not just design. We're the partner between a great idea and a real physical product in the world.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="prose prose-lg md:prose-xl prose-stone max-w-none font-serif text-primary/80 leading-relaxed mb-24">
          <p>
            Moose Made was built out of a specific frustration: too many people with good ideas couldn't find a single partner who understood both the creative and the operational sides of making a physical product.
          </p>
          <p>
            They'd find design agencies that couldn't talk to factories. Sourcing brokers who didn't understand design intent. Freight forwarders who showed up only at the end. Everyone operated in their lane — and founders were left to coordinate the whole thing themselves.
          </p>
          <p>
            We built Moose Made to be something different: a calm, capable team that understands the entire arc — from the first sketch to the finished product sitting in someone's hands. We know how factories think, how materials behave, how logistics works, and how to communicate all of it clearly to the people who have to make the decisions. You shouldn't need to become a supply chain expert to bring a product to life. That's our job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 border border-border">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">Our Philosophy</h3>
            <p className="text-muted-foreground mb-4">
              The best execution is invisible. When we do our job right, the product shows up exactly as planned, on time, at the right quality — and the client barely had to think about manufacturing at all.
            </p>
            <p className="text-muted-foreground">
              That kind of reliability isn't accidental. It comes from deep knowledge of the process, honest communication, and never overpromising what we can deliver.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground p-10">
            <h3 className="text-2xl font-serif font-semibold mb-4">What We Stand For</h3>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="border-b border-primary-foreground/10 pb-4">Full transparency across every stage of production</li>
              <li className="border-b border-primary-foreground/10 pb-4">Quality control that catches problems before they ship</li>
              <li className="border-b border-primary-foreground/10 pb-4">Honest timelines and clear communication throughout</li>
              <li>Execution as a craft — not a commodity service</li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary p-12 border border-border mb-24">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">What Makes Us Different</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-primary">We're not a broker</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Brokers hand off work and collect margins. We stay involved at every stage — from concept through QC — and we're accountable for the outcome.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">We're not an agency</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Agencies design beautiful things. We design things that can actually be built — on budget, at scale, with real manufacturing constraints factored in from the start.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">We understand both sides</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We speak the language of founders and the language of factories. That translation layer is where most physical product projects break down — and where we add the most value.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">Have something you're trying to make?</h3>
          <p className="text-muted-foreground mb-8">Tell us about it. We're genuinely good at this.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-10 text-base">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
