import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PenTool, Box, Layers, Globe, CheckSquare, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Design Support",
    description: "Whether you have a fully realized vision or just a rough idea, our team helps translate your brand identity into physical form. We assist with typography, color matching (Pantone/CMYK), finish selection, and ensuring your artwork is print-ready.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Dieline Creation",
    description: "The foundation of great packaging. We engineer custom structural dielines that look beautiful, protect your product, and are optimized for efficient manufacturing and assembly on the factory floor.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Supplier Sourcing",
    description: "Leverage our vetted network of global and domestic manufacturing partners. We match your specific material, volume, and quality requirements with the perfect facility, negotiating the best possible rates.",
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Manufacturing Oversight",
    description: "We don't just place the order and walk away. Our team manages the entire production run, reviewing pre-production samples, conducting quality control checks, and ensuring colors and finishes match the approved proofs.",
  },
  {
    icon: <CheckSquare className="w-8 h-8" />,
    title: "Sampling & Prototyping",
    description: "Before full production begins, we produce physical prototypes using correct materials and finishes. This allows you to test product fit, durability, and visual impact before committing to a massive run.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fulfillment & Logistics",
    description: "Navigating freight, customs, and warehousing can be daunting. We handle the logistics, delivering your finished packaging directly to your co-packer, warehouse, or retail locations safely and on schedule.",
  }
];

export default function Services() {
  return (
    <div className="bg-background pt-12 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            End-to-End <br />
            <span className="text-accent italic font-light">Capabilities</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From initial structural concept to final delivery at your warehouse, Moose Made provides a comprehensive suite of services designed to eliminate friction in custom packaging.
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
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">Powered by Artificial Intelligence</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We supplement our deep industry expertise with custom AI tools that speed up the mundane, giving us more time to focus on the creative.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { t: "AI Intake Assistant", d: "Translates raw product details into technical packaging specs." },
              { t: "Dieline Generator", d: "Instantly creates preliminary flat structural patterns." },
              { t: "Supplier Matching", d: "Algorithms pair your spec with vetted factories." },
              { t: "Quote Pre-Estimator", d: "Ballpark pricing models based on real market data." },
              { t: "Mockup Preview", d: "Generate rapid photorealistic 3D visuals of flats." }
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
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Have a specific project in mind?</h2>
        <Link to="/quote">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-10 text-base">
            Get a Detailed Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
