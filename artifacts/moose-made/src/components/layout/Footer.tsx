import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "@assets/F182B37E-7A36-4C46-BA4D-1AC7557158A2_1774933167810.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-8 block">
              <img 
                src={logo} 
                alt="Moose Made Logo" 
                className="h-12 w-auto invert opacity-90" 
              />
            </Link>
            <h3 className="text-2xl font-serif mb-6 leading-tight max-w-md">
              High-trust, industrial-premium packaging solutions for modern brands.
            </h3>
            <p className="text-primary-foreground/60 mb-8 max-w-md text-sm leading-relaxed">
              We manage the complexity of structural design, dieline creation, global sourcing, and fulfillment so you can focus on building your brand.
            </p>
            <Link to="/quote" className="inline-flex items-center text-accent font-medium hover:text-white transition-colors group">
              Start your packaging project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary-foreground/40">Company</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary-foreground/40">Resources</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li><Link to="/how-it-works" className="hover:text-accent transition-colors">How it Works</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-accent transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary-foreground/40">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 opacity-60" />
                <span>hello@moose-made.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 opacity-60" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
                <span>123 Industrial Way<br/>Suite 400<br/>Brooklyn, NY 11201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Moose Made. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
