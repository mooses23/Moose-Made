import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Package, Truck, PenTool, Cpu, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import imgDhaviStand from "@assets/54618137-eed2-4ad1-903e-db0e609cdc76_1774933109680.jpeg";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-background border-b border-border/40">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 bg-border/50 border border-border text-xs font-medium uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Premium Fulfillment
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
                Uncompromising <br />
                <span className="text-accent italic font-light">packaging</span> for modern brands.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                We bridge the gap between creative vision and industrial reality. Concept, dieline, sourcing, and fulfillment—engineered for scale, crafted with intention.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-8 text-base">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-none h-14 px-8 text-base border-border bg-transparent hover:bg-secondary">
                    View Our Work
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full bg-secondary p-8"
            >
              <div className="absolute inset-0 border border-border m-4 z-20 pointer-events-none mix-blend-difference"></div>
              <img 
                src={imgDhaviStand} 
                alt="D'Havi Spelt Bagels Packaging" 
                className="w-full h-full object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 z-30 bg-white p-5 max-w-xs shadow-xl">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Featured Case Study</p>
                <h3 className="font-serif text-xl font-semibold mb-2">D'Havi Artisanal</h3>
                <Link href="/portfolio/dhavi-spelt-bagels" className="text-sm font-medium flex items-center text-accent hover:text-primary transition-colors">
                  Read Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 border-b border-border bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-medium">Trusted by emerging & established brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            <span className="font-serif text-2xl font-bold">D'Havi</span>
            <span className="font-sans text-xl font-bold tracking-tight">OAK & STONE</span>
            <span className="font-serif text-xl italic font-semibold">Lumière</span>
            <span className="font-sans text-2xl font-black tracking-tighter">ATELIER</span>
            <span className="font-serif text-xl">Kith & Kin</span>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 text-primary">Beyond printing. <br/>A full manufacturing partner.</h2>
              <p className="text-muted-foreground text-lg">We don't just put ink on paper. We engineer structural dielines, match you with vetted global suppliers, oversee quality control, and manage domestic fulfillment.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="w-6 h-6 text-accent mb-6" />,
                title: "Structural Design",
                desc: "Custom dielines engineered for durability, unboxing experience, and retail display optimization."
              },
              {
                icon: <Box className="w-6 h-6 text-accent mb-6" />,
                title: "Global Sourcing",
                desc: "Direct access to audited manufacturing facilities, ensuring premium materials at competitive scale."
              },
              {
                icon: <Truck className="w-6 h-6 text-accent mb-6" />,
                title: "Fulfillment & Logistics",
                desc: "From factory floor to your warehouse. We handle customs, freight, and final mile delivery."
              }
            ].map((prop, idx) => (
              <div key={idx} className="p-10 border border-border bg-white hover:border-accent transition-colors duration-300">
                {prop.icon}
                <h3 className="text-xl font-serif font-semibold mb-4">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI TECH PREVIEW */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-medium uppercase tracking-widest mb-8">
                <Cpu className="w-3 h-3" /> Proprietary Tech
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">Intelligence meets manufacturing.</h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
                We've built specialized AI tools to accelerate the packaging process, turning weeks of back-and-forth into minutes of precise generation.
              </p>
              
              <ul className="space-y-6">
                {[
                  "AI Dieline Assistant — Instant structural visualization.",
                  "Supplier Matching — Algorithmic factory pairing.",
                  "Quote Pre-Estimator — Real-time cost modeling."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-primary-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-[#1C1F26] border border-white/10 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <span className="text-xs uppercase text-white/50 font-mono">Module 01</span>
                    <span className="text-xs bg-white/10 px-2 py-1 text-white/70">Online</span>
                  </div>
                  <h4 className="font-serif text-lg mb-2">AI Packaging Intake Assistant</h4>
                  <p className="text-sm text-white/60 font-mono leading-relaxed">System interpreting product dimensions & weight... generating optimal structural brief.</p>
                </div>
                
                <div className="bg-[#1C1F26] border border-white/10 p-6 shadow-2xl opacity-75 translate-x-4">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <span className="text-xs uppercase text-white/50 font-mono">Module 05</span>
                    <span className="text-xs bg-white/10 px-2 py-1 text-white/70">Processing</span>
                  </div>
                  <h4 className="font-serif text-lg mb-2">Photorealistic Mockup Generator</h4>
                  <p className="text-sm text-white/60 font-mono leading-relaxed">Applying matte black texture & gold foil stamping to 3D mesh...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">Our 8-Step Process</h2>
          <p className="text-muted-foreground text-lg mb-16">A systematic approach from raw concept to finished goods in your warehouse.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "1. Discovery", "2. Strategy", "3. Design", "4. Dieline",
              "5. Sourcing", "6. Sampling", "7. Production", "8. Delivery"
            ].map((step, i) => (
              <div key={i} className="py-6 px-4 border border-border hover:bg-secondary transition-colors text-sm font-medium tracking-wide">
                {step}
              </div>
            ))}
          </div>
          
          <Link href="/how-it-works">
            <Button variant="link" className="text-primary hover:text-accent font-medium text-base h-auto p-0 group">
              Explore the full process 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary border-t border-border/50 text-center relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-8 max-w-3xl mx-auto leading-tight">Ready to elevate your product's presentation?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Get a detailed quote for your custom packaging project within 24 hours.</p>
          <Link href="/quote">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-16 px-12 text-lg">
              Start a Quote Request
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
