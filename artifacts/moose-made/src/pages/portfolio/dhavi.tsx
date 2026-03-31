import { Link } from "wouter";
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
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
                D'Havi <br />
                <span className="text-accent italic font-light">Artisanal</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium spelt bagels required packaging that communicated heritage while functioning in modern retail environments.
              </p>
            </div>
            <div className="bg-secondary p-8 border border-border">
              <dl className="grid grid-cols-2 gap-y-6 text-sm">
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Client</dt>
                  <dd className="font-medium">D'Havi</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Format</dt>
                  <dd className="font-medium">Stand-up Resealable Pouch</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Finishes</dt>
                  <dd className="font-medium">Matte black, Clear window</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1 uppercase tracking-widest text-xs">Services</dt>
                  <dd className="font-medium">Dieline, Sourcing, Production</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="aspect-[16/9] bg-secondary border border-border overflow-hidden">
          <img src={img2} alt="D'Havi Spelt Bagels Packaging on counter" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              D'Havi produces high-quality artisanal spelt bagels. Their previous packaging felt generic and failed to justify the premium price point on retail shelves. The bagels themselves are beautiful and rustic, but were hidden behind opaque or poorly designed plastic.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              They needed a pouch that kept the product fresh, allowed the consumer to see the actual bagels, and visually communicated a "premium artisanal" aesthetic that stood out against brightly colored mass-market bread products.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              We engineered a heavy-gauge, matte black stand-up pouch. The deep black creates a stark, elegant contrast against the warm, golden-brown colors of the spelt bagels inside.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A carefully placed clear window allows the product to sell itself. We incorporated a deep burgundy-red accent band to anchor the design, paired with classic gold serif typography. A heavy-duty resealable zipper ensures the product remains fresh after opening.
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
            <img src={img3} alt="Back nutrition panel" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="bg-primary text-primary-foreground p-12 md:p-20">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-12 text-center">Structural Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-medium text-lg mb-2">High-Barrier Matte Film</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Protects against moisture and oxygen while providing a premium, non-reflective soft-touch feel in the hand.
              </p>
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-medium text-lg mb-2">Custom Die-Cut Window</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Strategically positioned to show the texture of the artisanal bagels without compromising structural integrity.
              </p>
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-medium text-lg mb-2">Heavy-Duty Gusset</h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Engineered bottom fold allows the heavy bagels to stand perfectly upright on retail shelves without toppling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 pt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Want results like this?</h2>
        <Link href="/quote">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-10 text-base">
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
