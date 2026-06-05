import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import playgroup from "@/assets/program-playgroup.jpg";
import nursery from "@/assets/program-nursery.jpg";
import juniorKg from "@/assets/program-junior-kg.jpg";
import seniorKg from "@/assets/program-senior-kg.jpg";
import daycare from "@/assets/program-daycare.jpg";

const programs = [
  { name: "Play Group", age: "1.5 – 2.5 yrs", color: "bg-brand-pink", soft: "bg-soft-pink", img: playgroup, desc: "Sensory play, songs and gentle social skills in a cozy first classroom." },
  { name: "Nursery", age: "2.5 – 3.5 yrs", color: "bg-brand-purple", soft: "bg-soft-purple", img: nursery, desc: "Montessori materials, fine motor work and confident self-care routines." },
  { name: "Junior KG", age: "3.5 – 4.5 yrs", color: "bg-brand-blue", soft: "bg-soft-blue", img: juniorKg, desc: "Pre-reading, phonics, numbers and creative storytelling adventures." },
  { name: "Senior KG", age: "4.5 – 5.5 yrs", color: "bg-brand-orange", soft: "bg-soft-orange", img: seniorKg, desc: "Reading, writing and school readiness with confidence and joy." },
  { name: "Day Care", age: "1.5 – 6 yrs", color: "bg-brand-green", soft: "bg-soft-green", img: daycare, desc: "Safe extended care with meals, nap-time and engaging activities." },
];

export function ProgramsSection() {
  return (
    <section className="bg-soft-purple py-20" id="programs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-xs font-bold mb-4">OUR PROGRAMS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">A perfect program for every age</h2>
          <p className="text-foreground/70">From tiny toddlers to confident kindergartners — we have a joyful learning journey for every child.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-3xl overflow-hidden shadow-card hover:-translate-y-2 transition-transform"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
                <span className={`absolute top-3 left-3 ${p.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>{p.age}</span>
              </div>
              <div className={`p-5 ${p.soft}`}>
                <h3 className="font-extrabold text-xl mb-1">{p.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{p.desc}</p>
                <Link to="/programs" className={`inline-flex items-center gap-1 text-sm font-bold text-foreground hover:gap-2 transition-all`}>
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teacher Training Academy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-fresh text-white rounded-3xl p-8 md:p-12 shadow-card flex flex-col md:flex-row gap-8 items-center justify-between border border-white/20"
        >
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/25 text-xs font-bold uppercase tracking-wider">
              Teacher Training Academy
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Govt. of India Approved Diploma Courses
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              We offer government-approved <strong>Advanced Diploma in Montessori Teacher Training</strong> and <strong>Advanced Diploma in Montessori and Primary Education</strong>. Build a rewarding career in education.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/programs"
              hash="teacher-training"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-blue hover:text-brand-blue/90 px-6 py-3 font-bold text-sm shadow-pop hover:scale-105 transition-all text-center"
            >
              View Diploma Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
