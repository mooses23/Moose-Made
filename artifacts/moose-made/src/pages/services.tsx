import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, PenTool, Wrench, Globe, CheckSquare, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Concept Direction",
    description: "You don't need a finished brief to start. We help you translate a raw idea — a sketch, a reference, a description — into a clear product concept with defined materials, form, and function. We ask the right questions so nothing gets lost in translation.",
    clientBenefit: "You're spared from guessing what factories need to know."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Product Design & Engineering",
    description: "We take your concept from visual to buildable. That means industrial design, structural engineering, tolerance specifications, and production-ready technical files. Whether it's a consumer good, custom accessory, or specialty item — we design for how it will actually be made.",
    clientBenefit: "You're spared from dealing with CAD files, specs, and engineering back-and-forth."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Materials & Supplier Sourcing",
    description: "We tap our vetted network of global manufacturing partners to match your product to the right facility. We evaluate based on material capability, quality standards, lead times, and cost — then negotiate on your behalf. You never have to cold-call a factory.",
    clientBenefit: "You're spared from navigating opaque supplier markets."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Manufacturing Coordination",
    description: "Once production starts, we stay in it. We communicate directly with the factory, review progress, flag issues before they become problems, and make sure the final output matches what was approved. You're kept informed without being buried in details.",
    clientBenefit: "You're spared from managing cross-timezone factory relationships."
  },
  {
    icon: <CheckSquare className="w-8 h-8" />,
    title: "Quality Control",
    description: "Before anything ships, we run thorough QC checks against your approved samples. Dimensions, finishes, functionality, packaging integrity — all verified. We catch problems at the factory, not when the pallet arrives at your door.",
    clientBenefit: "You're spared from costly returns and last-minute surprises."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Packaging & Logistics",
    description: "We design and source retail and shipping packaging for your product, then coordinate the full logistics chain — freight, customs clearance, and final-mile delivery to your warehouse, 3PL, or fulfillment center. The paperwork, the handoffs, the tracking — all handled.",
    clientBenefit: "You're spared from learning freight forwarding and retail packaging on the job."
  }
];

export default function Services() {
  return (
    <div className="bg-background pt-12 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            What we <br />
            <span className="text-accent italic font-light">handle for you</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From your first rough idea to a finished product in your hands — we manage every stage of the physical product journey. You bring the vision. We handle the execution.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className="bg-white p-10 border border-border hover:border-primary transition-colors group"
            >
              <div className="text-accent mb-8 bg-secondary w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-sm font-medium border-t border-border pt-4 mt-4" style={{ color: "hsl(34 85% 38%)" }}>
                {service.clientBenefit}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process efficiency note */}
      <section className="mt-32 bg-secondary border-y border-border/50 py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">Orchestration, not just services</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Most of the friction in physical product development comes from managing handoffs between disconnected vendors. We don't just offer services — we run the entire operation as a coordinated whole, so nothing gets lost between stages.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { t: "Single Point of Contact", d: "One partner across concept, design, manufacturing, QC, and delivery. No juggling vendors." },
              { t: "Transparent Progress", d: "You always know where your project stands — no black-box updates or chasing emails." },
              { t: "Built for Smaller Volume", d: "We work with brands that aren't yet at massive scale. We find solutions where others won't." },
            ].map((feature, i) => (
              <div key={i} className="bg-background p-6 border border-border">
                <h4 className="font-medium mb-2">{feature.t}</h4>
                <p className="text-sm text-muted-foreground">{feature.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-12 mt-32 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Have a product you're trying to make?</h2>
        <p className="text-muted-foreground text-lg mb-8">Tell us what you're building. We'll tell you how we can help.</p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-10 text-base">
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
