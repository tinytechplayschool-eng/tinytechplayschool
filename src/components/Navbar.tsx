import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/tiny.png" alt="Tiny Tech Logo" className="h-9 w-9 rounded-xl object-cover shadow-pop group-hover:scale-110 transition-transform shrink-0" />
          <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1.5">
            <span className="font-display text-lg sm:text-xl font-bold whitespace-nowrap">
              Tiny Tech <span className="text-brand-orange">Pre School</span>
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-bold whitespace-nowrap">
              @ Guduvancheri (Near Railway Station)
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-semibold rounded-full text-foreground/80 hover:text-primary hover:bg-soft-blue transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold rounded-full text-primary bg-soft-blue" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-sunshine px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-pop hover:scale-105 transition-transform"
          >
            Enquire Now
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg font-semibold hover:bg-soft-blue hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-sunshine px-5 py-2.5 font-bold text-secondary-foreground"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
