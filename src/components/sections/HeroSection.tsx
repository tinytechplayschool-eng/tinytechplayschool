import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-children.jpg";
import { Calendar, Sparkles, MessageCircle, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-brand-yellow/40 blur-2xl animate-blob" />
      <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-brand-pink/40 blur-2xl animate-blob" />
      <div className="absolute top-20 right-1/3 h-12 w-12 rounded-full bg-brand-orange animate-float-slow" />
      <div className="absolute bottom-24 left-1/4 h-8 w-8 rounded-lg bg-brand-green rotate-12 animate-float-slow" />
      <div className="absolute top-1/3 right-10 h-10 w-10 rounded-full bg-white/30 animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-3 mb-6">
            <span className="block text-brand-yellow text-2xl sm:text-3xl font-extrabold tracking-wide uppercase drop-shadow-sm">
              Tiny Tech Pre School
            </span>
            <div>
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-pink text-white text-sm font-extrabold shadow-pop animate-pulse border border-white/15">
                <Sparkles className="h-4 w-4 fill-white" /> Admissions Open 2026–27
              </span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
            A Happy Place to <span className="text-brand-yellow">Learn</span>,{" "}
            <span className="text-brand-orange">Play</span> &{" "}
            <span className="text-brand-green">Grow</span>
          </h1>
          <p className="text-lg opacity-95 max-w-xl mb-8">
            Following CBSE curriculum with Montessori method of teaching. Providing quality early childhood education in a safe, caring, and inspiring environment.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-sunshine px-6 py-3 font-bold text-secondary-foreground shadow-pop hover:scale-105 transition-transform"
            >
              <Sparkles className="h-4 w-4" /> Enquire Now
            </Link>
            <a
              href="https://wa.me/918124378478?text=Hi%20Tiny%20Tech%20Play%20school%2C%20I%27d%20like%20to%20know%20more%20about%20admissions."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white px-6 py-3 font-bold shadow-pop hover:scale-105 transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-white" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur px-6 py-3 font-bold border border-white/30 transition-colors"
            >
              <Calendar className="h-4 w-4" /> Book a School Tour
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "15+", l: "Years of Joy" },
              { n: "500+", l: "Happy Kids" },
              { n: "30+", l: "Trained Teachers" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/15 backdrop-blur p-3 text-center border border-white/20">
                <div className="text-2xl font-extrabold text-brand-yellow">{s.n}</div>
                <div className="text-xs opacity-90">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-pop ring-8 ring-white/20">
            <img
              src={heroImg}
              alt="Happy children learning and playing at Tiny Tech Pre School"
              width={1536}
              height={1152}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -left-4 bg-white text-foreground rounded-2xl shadow-card px-4 py-3 flex items-center gap-2"
          >
            <div className="h-10 w-10 rounded-full bg-soft-green grid place-items-center text-xl">🌱</div>
            <div>
              <div className="text-xs text-muted-foreground">Curriculum</div>
              <div className="font-bold text-sm">CBSE + Montessori</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-4 -right-4 bg-white text-foreground rounded-2xl shadow-card px-4 py-3 flex items-center gap-2"
          >
            <div className="h-10 w-10 rounded-full bg-soft-orange grid place-items-center text-xl">⭐</div>
            <div>
              <div className="text-xs text-muted-foreground">Rated</div>
              <div className="font-bold text-sm">4.9 / 5 by parents</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact & Location Strip */}
      <div className="relative z-20 border-t border-white/10 bg-black/20 backdrop-blur-md py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-white">
            <div className="h-10 w-10 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 border border-brand-yellow/30">
              <MapPin className="h-5 w-5 text-brand-yellow" />
            </div>
            <div>
              <div className="text-xs text-brand-yellow font-bold uppercase tracking-wider">Our Location</div>
              <p className="text-sm font-semibold text-white/95">
                24, Rajaji Street, N.G.O Colony, Guduvancheri (Near Railway Station)
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 border border-brand-green/30">
                <Phone className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <div className="text-xs text-brand-green font-bold uppercase tracking-wider">Helpline</div>
                <a href="tel:+9108124378478" className="text-sm font-extrabold text-white/95 hover:text-brand-yellow transition-colors">
                  +91-08124378478
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-sunshine text-secondary-foreground px-6 py-2.5 font-extrabold text-sm shadow-pop hover:scale-105 transition-transform"
            >
              <Sparkles className="h-4 w-4 fill-secondary-foreground animate-pulse" /> Admissions Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
