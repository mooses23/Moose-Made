import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Lightbulb, Settings, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MooseSilhouette } from "@/components/MooseLogo";

import imgDhaviStand from "@assets/54618137-eed2-4ad1-903e-db0e609cdc76_1774933109680.jpeg";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[92vh] flex items-center border-b border-border/40"
        style={{
          background: "linear-gradient(135deg, hsl(38 30% 96%) 0%, hsl(35 28% 92%) 40%, hsl(210 20% 93%) 100%)"
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23704214' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Warm amber glow — upper left */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 20% 20%, hsla(34,80%,50%,0.07) 0%, transparent 60%)" }}
        />

        {/* Deep navy glow — lower right */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 80% 80%, hsla(210,35%,14%,0.06) 0%, transparent 60%)" }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="max-w-2xl"
            >
              {/* Brand badge */}
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-accent/30 bg-accent/8 text-xs font-semibold uppercase tracking-widest mb-8" style={{ backgroundColor: "hsla(34,85%,38%,0.08)" }}>
                <MooseSilhouette size={14} color="hsl(34 85% 38%)" />
                <span style={{ color: "hsl(34 85% 30%)" }}>Concept-to-Doorstep Execution</span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-serif font-semibold leading-[1.08] mb-6"
                style={{ color: "hsl(210 35% 14%)" }}
              >
                From idea to<br />
                <span
                  className="italic font-light"
                  style={{ color: "hsl(34 85% 38%)" }}
                >
                  real product
                </span><br />
                in your hands.
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl mb-3 leading-relaxed max-w-lg font-medium"
                style={{ color: "hsl(210 35% 14%)" }}
              >
                We solve execution. You focus on your brand.
              </motion.p>

              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg mb-10 leading-relaxed max-w-lg"
                style={{ color: "hsl(30 12% 42%)" }}
              >
                Moose Made is a full-service physical product execution partner — handling concept direction, engineering, manufacturing, quality control, and delivery so you don't have to navigate it alone.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-none h-14 px-8 text-base font-semibold group"
                    style={{ background: "hsl(210 35% 14%)", color: "hsl(38 30% 96%)" }}
                  >
                    Start a Conversation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-none h-14 px-8 text-base bg-transparent hover:bg-white/60"
                    style={{ borderColor: "hsl(30 20% 70%)", color: "hsl(210 35% 14%)" }}
                  >
                    See Our Work
                  </Button>
                </Link>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                variants={fadeIn}
                className="mt-10 flex items-center gap-6 border-t pt-6"
                style={{ borderColor: "hsl(30 20% 80%)" }}
              >
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold" style={{ color: "hsl(210 35% 14%)" }}>200+</span>
                  <span className="text-xs uppercase tracking-wider mt-0.5" style={{ color: "hsl(30 12% 50%)" }}>Brands Served</span>
                </div>
                <div className="w-px h-10" style={{ background: "hsl(30 20% 80%)" }} />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold" style={{ color: "hsl(210 35% 14%)" }}>6 Stage</span>
                  <span className="text-xs uppercase tracking-wider mt-0.5" style={{ color: "hsl(30 12% 50%)" }}>Proven Process</span>
                </div>
                <div className="w-px h-10" style={{ background: "hsl(30 20% 80%)" }} />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold" style={{ color: "hsl(210 35% 14%)" }}>End-to-End</span>
                  <span className="text-xs uppercase tracking-wider mt-0.5" style={{ color: "hsl(30 12% 50%)" }}>Full Execution</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[680px] w-full p-8"
              style={{ background: "hsl(35 20% 91%)" }}
            >
              {/* Corner frame accent */}
              <div
                className="absolute inset-4 z-20 pointer-events-none"
                style={{ border: "1px solid hsl(34 85% 38% / 0.25)" }}
              />
              {/* Amber corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 z-30 border-t-2 border-l-2" style={{ borderColor: "hsl(34 85% 38%)" }} />
              <div className="absolute top-4 right-4 w-6 h-6 z-30 border-t-2 border-r-2" style={{ borderColor: "hsl(34 85% 38%)" }} />
              <div className="absolute bottom-4 left-4 w-6 h-6 z-30 border-b-2 border-l-2" style={{ borderColor: "hsl(34 85% 38%)" }} />
              <div className="absolute bottom-4 right-4 w-6 h-6 z-30 border-b-2 border-r-2" style={{ borderColor: "hsl(34 85% 38%)" }} />

              <img
                src={imgDhaviStand}
                alt="D'Havi Artisanal Product"
                className="w-full h-full object-cover shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />

              {/* Case study callout */}
              <div
                className="absolute bottom-10 left-10 z-30 p-5 max-w-xs shadow-xl"
                style={{ background: "hsl(210 35% 14%)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "hsl(34 85% 55%)" }}>
                  Featured Work
                </p>
                <h3 className="font-serif text-xl font-semibold mb-2 text-white">D'Havi Artisanal</h3>
                <Link
                  to="/work/dhavi-spelt-bagels"
                  className="text-sm font-medium flex items-center transition-colors hover:opacity-80"
                  style={{ color: "hsl(34 85% 55%)" }}
                >
                  Read Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 border-b border-border" style={{ background: "hsl(210 35% 14%)" }}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-widest mb-8 font-medium" style={{ color: "hsl(34 85% 55%)" }}>
            Execution partner to emerging &amp; growing brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24" style={{ opacity: 0.5 }}>
            <span className="font-serif text-2xl font-bold text-white">D'Havi</span>
            <span className="font-sans text-xl font-bold tracking-tight text-white">OAK &amp; STONE</span>
            <span className="font-serif text-xl italic font-semibold text-white">Lumière</span>
            <span className="font-sans text-2xl font-black tracking-tighter text-white">ATELIER</span>
            <span className="font-serif text-xl text-white">Kith &amp; Kin</span>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 text-primary">
                We solve execution.<br/>So you don't have to.
              </h2>
              <p className="text-muted-foreground text-lg">
                Most founders know what they want to make. What stops them is the how — factories, materials, tooling, QC, freight. We handle all of it, end to end, from your first rough idea to the product landing at your door.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 mb-6" style={{ color: "hsl(34 85% 38%)" }} />,
                title: "You Don't Need to Know Factories",
                desc: "We speak the language of manufacturing — materials, tolerances, tooling costs, lead times. You bring the vision; we handle the complexity."
              },
              {
                icon: <Settings className="w-6 h-6 mb-6" style={{ color: "hsl(34 85% 38%)" }} />,
                title: "Full-Spectrum Execution",
                desc: "From concept direction and engineering to sourcing, production oversight, and quality control — one partner for the entire physical product journey."
              },
              {
                icon: <Package className="w-6 h-6 mb-6" style={{ color: "hsl(34 85% 38%)" }} />,
                title: "Concept to Doorstep",
                desc: "We coordinate every link in the chain: design, manufacturing, QC, customs, and final delivery — so nothing falls through the cracks."
              }
            ].map((prop, idx) => (
              <div
                key={idx}
                className="p-10 border bg-white hover:shadow-md transition-all duration-300"
                style={{ borderColor: "hsl(30 20% 85%)" }}
              >
                {prop.icon}
                <h3 className="text-xl font-serif font-semibold mb-4 text-primary">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24" style={{ background: "hsl(210 35% 14%)" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "hsl(34 85% 55%)" }}>Who We Work With</p>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 text-white">
                Built for people who are serious about making something real.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We work best with founders, independent creators, and small brands who have an idea and the conviction to bring it to market — but need a capable partner to handle the production side.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Founders & Entrepreneurs", desc: "Launching a first physical product and need a reliable execution partner from day one." },
                { label: "Independent Creators", desc: "Turning a loyal audience into a tangible product line — merchandise, consumables, custom goods." },
                { label: "Small & Growing Brands", desc: "Scaling up production or expanding into new product categories without building an internal supply chain team." },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 bg-white/5">
                  <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 text-primary">The 6-Stage Execution Journey</h2>
          <p className="text-muted-foreground text-lg mb-16">A clear, orchestrated process — from your first idea to a finished product at your door.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              "01. Concept", "02. Design", "03. Engineering",
              "04. Manufacturing", "05. Quality Control", "06. Delivery"
            ].map((step, i) => (
              <div
                key={i}
                className="py-6 px-4 border transition-colors text-sm font-medium tracking-wide hover:bg-secondary"
                style={{ borderColor: "hsl(30 20% 85%)" }}
              >
                {step}
              </div>
            ))}
          </div>

          <Link to="/how-it-works">
            <Button variant="link" className="font-medium text-base h-auto p-0 group hover:text-accent" style={{ color: "hsl(210 35% 14%)" }}>
              See how each stage works
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border/50 text-center relative" style={{ background: "hsl(38 30% 96%)" }}>
        {/* Decorative moose watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MooseSilhouette size={320} color="hsl(34 85% 38% / 0.05)" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border text-xs font-semibold uppercase tracking-widest mb-8" style={{ borderColor: "hsl(34 85% 38% / 0.35)", color: "hsl(34 85% 30%)", background: "hsla(34,85%,38%,0.07)" }}>
            <MooseSilhouette size={12} color="hsl(34 85% 38%)" />
            Idea to Product. Start to Finish.
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-8 max-w-3xl mx-auto leading-tight text-primary">
            Ready to turn your idea into a real physical product?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tell us what you're trying to make. We'll take it from there.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="rounded-none h-16 px-12 text-lg hover:opacity-90 transition-opacity"
              style={{ background: "hsl(210 35% 14%)", color: "hsl(38 30% 96%)" }}
            >
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
