import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Concept",
    desc: "Every project starts with a conversation about your idea. What are you trying to make? Who is it for? What constraints matter — budget, timeline, quantity? We listen carefully, ask the right questions, and define the product concept clearly before anything moves forward.",
    handles: "Scope definition, product brief, material direction, feasibility assessment."
  },
  {
    num: "02",
    title: "Design",
    desc: "Once the concept is defined, we move into visual and structural design. We develop the form, aesthetics, and function of the product — working iteratively with you until the direction is right. We generate renderings so you can see the product before a single tool is cut.",
    handles: "Industrial design, 3D visualization, design iteration, client review cycles."
  },
  {
    num: "03",
    title: "Engineering",
    desc: "Design intent becomes production reality here. We translate the approved design into precise technical specifications — tolerances, materials callouts, structural requirements, and production files that factories can actually work from. This stage prevents expensive errors downstream.",
    handles: "Technical drawings, dieline engineering, material specifications, production-ready files."
  },
  {
    num: "04",
    title: "Manufacturing",
    desc: "We identify and engage the right manufacturing partner for your product. We manage the factory relationship — sample approvals, production scheduling, and clear communication at every step. You get regular updates without being buried in operational details.",
    handles: "Supplier selection, sample production, production oversight, factory communication."
  },
  {
    num: "05",
    title: "Quality Control",
    desc: "Before your product ships, we run a thorough QC check against your approved specifications. We inspect for dimensional accuracy, finish quality, structural integrity, and any functional requirements. Problems get caught here — not when the order arrives at your door.",
    handles: "Pre-shipment inspection, defect identification, corrective action, approval sign-off."
  },
  {
    num: "06",
    title: "Delivery",
    desc: "With QC cleared, we coordinate shipping, customs clearance, and final-mile logistics to get your product exactly where it needs to go. We handle the freight complexity so you can focus on what comes next — selling, distributing, or launching.",
    handles: "Freight coordination, customs documentation, final-mile delivery, order tracking."
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
            Six stages. One execution partner. A clear path from your idea to a finished physical product — with no guesswork about what happens next.
          </p>
        </div>
      </section>

      {/* Stage Timeline */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl relative">
          <div className="absolute top-0 bottom-0 left-[27px] md:left-[39px] w-px bg-border z-0"></div>

          <div className="space-y-16">
            {stages.map((stage, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                key={index}
                className="relative z-10 flex gap-6 md:gap-12"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif text-xl md:text-2xl font-medium border-4 border-background">
                  {stage.num}
                </div>
                <div className="pt-2 md:pt-5 pb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-primary">{stage.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
                    {stage.desc}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "hsl(34 85% 38%)" }}>
                    <span className="uppercase tracking-wider text-xs text-muted-foreground mr-2">We handle:</span>
                    {stage.handles}
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
            <h3 className="text-2xl font-serif font-semibold mb-2">Ready to start at Stage 01?</h3>
            <p className="text-muted-foreground">Tell us about your idea — we'll take it from there.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-8 whitespace-nowrap">
              Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
