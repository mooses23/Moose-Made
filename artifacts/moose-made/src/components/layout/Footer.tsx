import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
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
              Got a mockup you made with AI? Let's bring it to life.
            </h3>
            <p className="text-primary-foreground/60 mb-8 max-w-md text-sm leading-relaxed">
              We're a small team that loves turning creative ideas into real, physical packaging. Just reach out — we'll figure it out together.
            </p>
            <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:text-white transition-colors group">
              Get in touch
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
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-medium text-sm tracking-wider uppercase mb-6 text-primary-foreground/40">Reach Out</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 opacity-60" />
                <a href="mailto:hello@moose-made.com" className="hover:text-accent transition-colors">hello@moose-made.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 opacity-60" />
                <a href="mailto:hello@moose-made.com" className="hover:text-accent transition-colors">hello@moose-made.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 opacity-60 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="mailto:hello@moose-made.com" className="hover:text-accent transition-colors">hello@moose-made.com</a>
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
