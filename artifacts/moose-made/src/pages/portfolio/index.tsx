import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgDhaviFront from "@assets/IMG_1670_1774933091203.jpeg";

import p1 from "@/assets/portfolio-lumiere.png";
import p2 from "@/assets/portfolio-oakstone.png";
import p3 from "@/assets/portfolio-atelier.png";

const projects = [
  {
    id: "dhavi-spelt-bagels",
    title: "D'Havi Artisanal",
    category: "Food & Beverage",
    problem: "A premium product hidden behind generic packaging that failed to justify its price point.",
    image: imgDhaviFront,
    featured: true,
    linkable: true,
  },
  {
    id: "lumiere-candles",
    title: "Lumière Botanicals",
    category: "Home Goods",
    problem: "An independent brand needing a scalable, retail-ready product presentation.",
    image: p1,
    featured: false,
    linkable: false,
  },
  {
    id: "oak-stone-skincare",
    title: "Oak & Stone",
    category: "Health & Beauty",
    problem: "A formulator transitioning from private label to owned-brand product line.",
    image: p2,
    featured: false,
    linkable: false,
  },
  {
    id: "atelier-coffee",
    title: "Atelier Roasters",
    category: "Food & Beverage",
    problem: "A specialty roaster needing consistent, shelf-stable packaging across a growing SKU range.",
    image: p3,
    featured: false,
    linkable: false,
  }
];

export default function Work() {
  return (
    <div className="bg-background pt-12 pb-24">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Case <span className="text-accent italic font-light">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each project here started with a real execution challenge — a product that needed to exist and a client who couldn't navigate the path alone. This is what it looks like when we solve that together.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => {
            const cardContent = (
              <>
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
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{project.category}</p>
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">{project.problem}</p>
                  </div>
                  {project.linkable && (
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all shrink-0 ml-4">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </>
            );

            if (project.linkable) {
              return (
                <Link
                  key={project.id}
                  to={`/work/${project.id}`}
                  className={`group block ${project.featured ? 'md:col-span-2' : ''}`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={project.id}
                className={`group block ${project.featured ? 'md:col-span-2' : ''}`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
