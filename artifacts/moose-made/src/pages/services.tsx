import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PenTool, Box, Layers, Globe, CheckSquare, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Design Support",
    description: "Whether you have a finished AI mockup or just a rough idea, we help translate your vision into a print-ready file. Typography, color matching (Pantone/CMYK), finish selection — we've got you covered.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Dieline Creation",
    description: "The foundation of great packaging. We engineer custom structural dielines that look beautiful, protect your product, and are built to run efficiently on the factory floor.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Supplier Sourcing",
    description: "Skip the cold calls. We tap our vetted network of global and domestic manufacturers to match your specs, volume, and budget — and negotiate on your behalf.",
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Manufacturing Oversight",
    description: "We stay involved through the whole production run — reviewing samples, checking quality, and making sure what comes off the line matches what you approved.",
  },
  {
    icon: <CheckSquare className="w-8 h-8" />,
    title: "Sampling & Prototyping",
    description: "Before anything goes into full production, you'll hold a real prototype in your hands. Test the fit, the feel, and the finish before committing to a full run.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fulfillment & Logistics",
    description: "We handle freight, customs, and warehousing so you don't have to. Your packaging arrives at your co-packer, warehouse, or retail location safely and on schedule.",
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
            <span className="text-accent italic font-light">do for you</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From your first spark of an idea to finished packaging in your hands — we handle the whole journey. No need to deal with factories, logistics, or guesswork on your own.
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
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Features Highlight */}
      <section className="mt-32 bg-secondary border-y border-border/50 py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Moose Tech</span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">Built with smart tools</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We've built our own AI tools so the boring, repetitive stuff gets done fast — and we can spend more time actually helping you.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { t: "AI Intake Assistant", d: "Turns your product details into a clear technical packaging brief." },
              { t: "Dieline Generator", d: "Creates preliminary structural patterns in minutes, not days." },
              { t: "Supplier Matching", d: "Finds the right factory for your spec automatically." },
              { t: "Quote Pre-Estimator", d: "Ballpark pricing based on real market data, upfront." },
              { t: "Mockup Preview", d: "Generate photorealistic 3D visuals from your flat artwork." }
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
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Got a project in mind?</h2>
        <p className="text-muted-foreground text-lg mb-8">Just reach out — we love a good conversation about packaging.</p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-10 text-base">
            Let's Talk
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
