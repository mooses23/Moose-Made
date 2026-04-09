import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "What founders get wrong about physical product timelines",
    excerpt: "Design is only one piece of it. Engineering, tooling, sampling, production, and freight each add time — and most first-time founders discover this too late. Here's a realistic breakdown.",
    category: "Execution Guide",
    date: "Mar 18, 2024"
  },
  {
    title: "The hidden costs of overseas manufacturing",
    excerpt: "Unit cost is only one number. Freight, customs, tooling, quality failures, and communication delays can erode margins quickly. What to factor in before you commit to a supplier.",
    category: "Supply Chain",
    date: "Feb 5, 2024"
  },
  {
    title: "How to evaluate a manufacturer before you place an order",
    excerpt: "A factory's price sheet tells you almost nothing. What to look for — and what questions to ask — when vetting a production partner for the first time.",
    category: "Sourcing",
    date: "Jan 22, 2024"
  },
  {
    title: "When to prototype and when to go straight to production",
    excerpt: "Sampling costs money and time. So does fixing a production run that went wrong. Understanding when prototyping is essential — and when it's safe to skip — can save both.",
    category: "Manufacturing",
    date: "Dec 10, 2023"
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
            Practical insights on physical product development — manufacturing, sourcing, materials, and the execution side of bringing ideas to market.
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
