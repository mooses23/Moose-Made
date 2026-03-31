import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MooseSilhouette } from "@/components/MooseLogo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "Process" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[hsl(210_35%_14%)] backdrop-blur-md border-white/10 py-3"
          : "bg-[hsl(210_35%_14%)] border-white/10 py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo lockup */}
        <Link to="/" className="flex items-center gap-3 z-50 relative group">
          <div className="flex items-center justify-center w-9 h-9 bg-accent/10 border border-accent/30 transition-all duration-300 group-hover:bg-accent/20">
            <MooseSilhouette size={24} color="hsl(34 85% 55%)" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-semibold text-lg tracking-tight text-white">
              Moose Made
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/40 font-medium mt-0.5 hidden sm:block">
              Craft Packaging Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Link to="/quote">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/85 rounded-none group border-0 h-9 px-5">
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[hsl(210_35%_11%)] z-40 flex flex-col pt-24 px-6 transition-transform duration-300 md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6 text-2xl font-serif">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors ${
                  pathname === link.href ? "text-accent" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors ${
                pathname === "/contact" ? "text-accent" : "text-white"
              }`}
            >
              Contact
            </Link>
            <div className="mt-8">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/85 rounded-none py-6 text-lg">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu footer stamp */}
          <div className="mt-auto pb-12">
            <div className="border-t border-white/10 pt-6 flex items-center gap-3">
              <MooseSilhouette size={28} color="hsl(34 85% 55%)" />
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 font-medium">Craft Packaging Studio</p>
                <p className="text-white/60 text-sm mt-0.5">Family-Owned &amp; Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
