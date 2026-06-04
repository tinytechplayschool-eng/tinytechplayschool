import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-children.jpg";
import { Calendar, Sparkles } from "lucide-react";

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold backdrop-blur mb-5">
            <Sparkles className="h-4 w-4" /> Admissions Open 2026–27
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
            A Happy Place to <span className="text-brand-yellow">Learn</span>,{" "}
            <span className="text-brand-orange">Play</span> &{" "}
            <span className="text-brand-green">Grow</span>
          </h1>
          <p className="text-lg opacity-95 max-w-xl mb-8">
            Providing quality early childhood education in a safe, caring and
            inspiring environment — where every little spark shines bright.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-sunshine px-6 py-3 font-bold text-secondary-foreground shadow-pop hover:scale-105 transition-transform"
            >
              <Sparkles className="h-4 w-4" /> Enquire Now
            </Link>
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
              alt="Happy children learning and playing at BrightSparks Playschool"
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
              <div className="font-bold text-sm">Montessori + Play</div>
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
    </section>
  );
}
