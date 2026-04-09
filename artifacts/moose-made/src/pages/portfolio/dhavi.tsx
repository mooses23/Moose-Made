import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@assets/IMG_1670_1774933091203.jpeg";
import img2 from "@assets/54618137-eed2-4ad1-903e-db0e609cdc76_1774933109680.jpeg";
import img3 from "@assets/19f3a956-feb5-468a-9279-217eb9da882e_1774933109680.jpeg";
import img4 from "@assets/c2545932-cc1d-420d-9ffe-e196480cb910_1774933109680.jpeg";
import img5 from "@assets/a035fa4e-4f86-4845-8778-d85e5e02d216_1774933109680.jpeg";
import img6 from "@assets/9deb99e9-d52e-4c2e-ace5-0e10ea649416_1774933109680.jpeg";

export default function PortfolioDhavi() {
  return (
    <div className="bg-background pb-24">
      {/* Hero Header */}
      <section className="pt-12 pb-16 border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <Link to="/work" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "hsl(34 85% 38%)" }}>Food &amp; Beverage — Flexible Packaging</p>
              <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
                D'Havi <br />
                <span className="text-accent italic font-light">Artisanal</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A premium artisanal product was losing shelf credibility behind packaging that didn't match its quality. We rebuilt that presentation from scratch — engineering, sourcing, and producing a pouch that lets the product speak for itself.
              </p>
            </div>
            <div className="bg-secondary p-8 border border-border">
              <dl className="grid grid-cols-2 gap-y-6 text-sm">
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Client</dt>
                  <dd className="font-medium">D'Havi</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Product Format</dt>
                  <dd className="font-medium">Stand-up Resealable Pouch</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Category</dt>
                  <dd className="font-medium">Food &amp; Beverage</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Stages Handled</dt>
                  <dd className="font-medium">Design, Engineering, Sourcing, Production, QC</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="aspect-[16/9] bg-secondary border border-border overflow-hidden">
          <img src={img2} alt="D'Havi Artisanal product on counter" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">The Execution Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              D'Havi produces high-quality artisanal spelt bagels. Their previous packaging felt generic and failed to communicate the premium price point on retail shelves. The product itself was exceptional — but buyers couldn't see that from the outside.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              They needed more than a design refresh. They needed a complete product packaging execution: the right structure, the right materials, a supplier who could deliver on quality, and production oversight to make sure it arrived as intended.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">What We Built</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              We engineered a heavy-gauge, matte black stand-up pouch. The deep black creates a stark, elegant contrast against the warm, golden-brown colors of the spelt bagels inside. A strategically placed clear window allows the product to sell itself.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We sourced a supplier with the capability to execute the matte film specification at the required volume, managed sampling and approval rounds, and oversaw the production run to ensure consistency across every unit.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-square bg-secondary border border-border overflow-hidden">
            <img src={img1} alt="Front flat lay" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-secondary border border-border overflow-hidden">
            <img src={img4} alt="Clear window detail" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-secondary border border-border overflow-hidden">
            <img src={img6} alt="Side profile" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-secondary border border-border overflow-hidden">
            <img src={img3} alt="Back panel" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Key Details */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="bg-primary text-primary-foreground p-12 md:p-20">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-12 text-center">Engineering Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-medium text-lg mb-2">High-Barrier Matte Film</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Protects against moisture and oxygen while delivering a premium, non-reflective soft-touch feel in the hand.
              </p>
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-medium text-lg mb-2">Custom Die-Cut Window</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Strategically positioned to showcase the texture of the artisanal product without compromising structural integrity.
              </p>
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-medium text-lg mb-2">Heavy-Duty Gusset</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Engineered bottom fold allows the product to stand perfectly upright on retail shelves without toppling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 pt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Have a product that needs this kind of execution?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Tell us what you're making. We'll tell you how we'd approach it.</p>
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
