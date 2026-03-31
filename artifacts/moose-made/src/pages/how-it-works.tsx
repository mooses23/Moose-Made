import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Intake",
    desc: "We begin by understanding your product, your brand, and your constraints. We collect details on dimensions, weight, fulfillment environment, and budget.",
  },
  {
    num: "02",
    title: "Packaging Strategy",
    desc: "We recommend structural formats, materials, and finish options that align with your goals, weighing the pros and cons of different manufacturing approaches.",
  },
  {
    num: "03",
    title: "Design & Mockups",
    desc: "If needed, we assist with applying your artwork to the structure, providing 3D photorealistic mockups so you can visualize the final product before any physical materials are cut.",
  },
  {
    num: "04",
    title: "Dieline Creation",
    desc: "We engineer precise, production-ready dielines. These files act as the architectural blueprints for the factory floor, ensuring perfect folds and closures.",
  },
  {
    num: "05",
    title: "Supplier Sourcing",
    desc: "Using our network, we match your project to the ideal facility. We solicit bids, compare capabilities, and secure the most competitive pricing without sacrificing quality.",
  },
  {
    num: "06",
    title: "Sampling & Refinement",
    desc: "We produce physical prototypes. You review the unprinted structure for fit and function, and printed proofs for color accuracy and finish quality (e.g., foil, embossing).",
  },
  {
    num: "07",
    title: "Production Oversight",
    desc: "Once approved, full production begins. We manage communication, timeline tracking, and quality control checks during the manufacturing process.",
  },
  {
    num: "08",
    title: "Delivery & Fulfillment",
    desc: "We handle the logistics of getting the finished packaging from the factory floor to your warehouse or co-packer, managing freight and customs clearance.",
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
            A rigorous 8-step methodology designed to eliminate surprises, control costs, and deliver exceptional physical products.
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
            <h3 className="text-2xl font-serif font-semibold mb-2">Ready to start step 01?</h3>
            <p className="text-muted-foreground">Submit your project details and we'll get back to you within 24 hours.</p>
          </div>
          <Link to="/quote">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-8 whitespace-nowrap">
              Begin Discovery <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
