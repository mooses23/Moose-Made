import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "We Chat",
    desc: "Everything starts with a conversation. Tell us about your product, your brand, and what you're hoping to create. No intake forms or corporate jargon — just a real talk.",
  },
  {
    num: "02",
    title: "Packaging Strategy",
    desc: "We recommend the right structure, materials, and finishes for your goals and budget. We'll walk you through the pros and cons so you can make an informed decision.",
  },
  {
    num: "03",
    title: "Design & Mockups",
    desc: "If you already have an AI mockup or artwork, great — we'll work with it. If not, we help apply your brand to the structure and generate photorealistic 3D visuals so you can see it before anything is made.",
  },
  {
    num: "04",
    title: "Dieline Creation",
    desc: "We engineer precise, production-ready dielines — the structural blueprints for the factory. These ensure perfect folds, closures, and an excellent unboxing experience.",
  },
  {
    num: "05",
    title: "Supplier Sourcing",
    desc: "Using our network, we match your project to the right manufacturer. We handle bids, negotiations, and capability checks so you get the best quality at the best price.",
  },
  {
    num: "06",
    title: "Sampling & Refinement",
    desc: "Before anything goes into mass production, you'll hold a real prototype. Check the fit, the finish, and the feel — and ask for changes until it's exactly right.",
  },
  {
    num: "07",
    title: "Production",
    desc: "Once you're happy with the sample, we kick off full production. We stay in close contact with the factory and keep you updated throughout the run.",
  },
  {
    num: "08",
    title: "Delivery",
    desc: "Your finished packaging ships directly to wherever you need it — your warehouse, co-packer, or retail location. We handle freight and customs so you don't have to.",
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-background pt-12 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            The <span className="text-accent italic font-light">Process</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No guesswork, no surprises. Just a clear, friendly 8-step process from first conversation to finished packaging at your door.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl relative">
          <div className="absolute top-0 bottom-0 left-[27px] md:left-[39px] w-px bg-border z-0"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                key={index} 
                className="relative z-10 flex gap-6 md:gap-12"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl md:text-2xl font-medium border-4 border-background">
                  {step.num}
                </div>
                <div className="pt-2 md:pt-5 pb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-primary">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 mt-24">
        <div className="bg-secondary p-12 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-2">Ready to start with step 01?</h3>
            <p className="text-muted-foreground">Just reach out — we'll take it from there.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-8 whitespace-nowrap">
              Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
