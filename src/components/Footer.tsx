import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/tiny.png" alt="Tiny Tech Logo" className="h-9 w-9 rounded-xl object-cover bg-white p-0.5" />
            <span className="font-display text-xl font-bold">Tiny Tech</span>
          </div>
          <p className="text-sm opacity-80">
            A happy place to learn, play & grow. Nurturing curious little minds and training educators.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-blue transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-pink transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-brand-yellow">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-brand-yellow">Programs</Link></li>
            <li><Link to="/facilities" className="hover:text-brand-yellow">Facilities</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-yellow">Gallery</Link></li>
            <li><Link to="/admissions" className="hover:text-brand-yellow">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">Contact</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+9108124378478" className="hover:text-brand-yellow transition-colors">+91-08124378478 (GUDUVANCHERY)</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:padmasanmugam@gmail.com" className="hover:text-brand-yellow transition-colors">padmasanmugam@gmail.com</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Tiny+Tech+play+school+Guduvancheri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-yellow transition-colors"
              >
                24, Rajaji Street, N.G.O Colony, Guduvancheri, Tamil Nadu, India<br />
                <span className="text-xs text-brand-yellow font-semibold">Near to railway station and bus stand</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">School Timings</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Mon – Fri: 8:30 AM – 1:00 PM</li>
            <li>Day Care: 8:00 AM – 6:30 PM</li>
            <li>Sat: 9:00 AM – 12:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs opacity-70 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Tiny Tech Pre School. All rights reserved.</p>
          <p>Made with ❤️ for little learners.</p>
        </div>
      </div>
    </footer>
  );
}
