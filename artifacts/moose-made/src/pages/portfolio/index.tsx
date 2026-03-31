import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgDhaviFront from "@assets/IMG_1670_1774933091203.jpeg";

// Generated images
import p1 from "@/assets/portfolio-lumiere.png";
import p2 from "@/assets/portfolio-oakstone.png";
import p3 from "@/assets/portfolio-atelier.png";

const projects = [
  {
    id: "dhavi-spelt-bagels",
    title: "D'Havi Artisanal",
    category: "Food & Beverage • Flexible Pouch",
    image: imgDhaviFront,
    featured: true
  },
  {
    id: "lumiere-candles",
    title: "Lumière Botanicals",
    category: "Home Goods • Rigid Box",
    image: p1,
    featured: false
  },
  {
    id: "oak-stone-skincare",
    title: "Oak & Stone",
    category: "Health & Beauty • Folding Carton",
    image: p2,
    featured: false
  },
  {
    id: "atelier-coffee",
    title: "Atelier Roasters",
    category: "Food & Beverage • Flexible Pouch",
    image: p3,
    featured: false
  }
];

export default function Portfolio() {
  return (
    <div className="bg-background pt-12 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Selected <span className="text-accent italic font-light">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated selection of packaging projects engineered and manufactured by Moose Made.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <Link 
              key={project.id} 
              to={project.id === "dhavi-spelt-bagels" ? `/portfolio/${project.id}` : "#"}
              className={`group block ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden bg-secondary border border-border">
                {project.featured && (
                  <div className="absolute top-6 left-6 z-20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    Featured Case Study
                  </div>
                )}
                <div className={`aspect-[4/3] ${project.featured ? 'md:aspect-[21/9]' : ''} overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay for better text contrast if needed, but keeping it clean here */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground tracking-wide uppercase">{project.category}</p>
                </div>
                {project.id === "dhavi-spelt-bagels" && (
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
