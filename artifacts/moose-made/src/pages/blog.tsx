import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Folding Carton vs. Corrugated: When to use which?",
    excerpt: "Understanding the structural differences, cost implications, and retail performance of the two most common paper-based packaging formats.",
    category: "Technical Guide",
    date: "Oct 12, 2023"
  },
  {
    title: "The hidden costs of overseas packaging manufacturing",
    excerpt: "Unit cost is only one piece of the puzzle. Freight, customs, tooling, and communication delays can quickly erode the savings of manufacturing abroad.",
    category: "Supply Chain",
    date: "Sep 28, 2023"
  },
  {
    title: "Designing for Unboxing: The psychological impact of friction",
    excerpt: "How the physical resistance of a box lid or the sound of tearing a seal affects a consumer's perception of product value.",
    category: "Design Theory",
    date: "Sep 15, 2023"
  },
  {
    title: "A primer on packaging finishes: Foil, Spot UV, and Embossing",
    excerpt: "A visual guide to premium finishes, how they are applied on the factory floor, and when to specify them on your dielines.",
    category: "Manufacturing",
    date: "Aug 30, 2023"
  }
];

export default function Blog() {
  return (
    <div className="bg-background pt-12 pb-24 min-h-screen">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            The <span className="text-accent italic font-light">Journal</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Technical guides, industry insights, and philosophical musings on the art of physical manufacturing.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="space-y-12">
          {articles.map((article, i) => (
            <article key={i} className="group border-b border-border pb-12">
              <div className="flex items-center gap-4 mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <span className="text-accent">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-primary group-hover:text-accent transition-colors cursor-pointer">
                {article.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {article.excerpt}
              </p>
              <div className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors cursor-pointer">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
