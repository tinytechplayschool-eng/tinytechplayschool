import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { GraduationCap, Award, Binary, PenTool, MessageSquare, BookOpen, ArrowRight } from "lucide-react";

const academyPrograms = [
  {
    title: "School Tuitions",
    subtitle: "1st to 12th Grade",
    desc: "Personalized tutoring for CBSE, IGCSE, and State Board curriculums to build academic excellence and confidence.",
    icon: GraduationCap,
    color: "text-brand-purple bg-soft-purple/50 border-brand-purple/20",
    badge: "CBSE / IGCSE / State"
  },
  {
    title: "Abacus Academy",
    subtitle: "9 Comprehensive Levels",
    desc: "Scientific mental arithmetic program designed to boost concentration, memory power, and lightning-fast math skills.",
    icon: Binary,
    color: "text-brand-blue bg-soft-blue/50 border-brand-blue/20",
    badge: "9 Levels"
  },
  {
    title: "Olympiad Coaching",
    subtitle: "Exam Excellence",
    desc: "Rigorous training for international and national Olympiad exams in Mathematics, Science, and English.",
    icon: Award,
    color: "text-brand-orange bg-soft-orange/50 border-brand-orange/20",
    badge: "Exam Prep"
  },
  {
    title: "Phonics & Grammar",
    subtitle: "Early Literacy",
    desc: "Foundational reading, pronunciation, and grammar structure lessons to make children independent readers.",
    icon: BookOpen,
    color: "text-brand-green bg-soft-green/50 border-brand-green/20",
    badge: "Foundational"
  },
  {
    title: "Handwriting Improvement",
    subtitle: "Print & Cursive",
    desc: "Specialized training focusing on correct posture, pen grip, letter formation, neatness, and speed.",
    icon: PenTool,
    color: "text-brand-purple bg-soft-purple/50 border-brand-purple/20",
    badge: "Skill Building"
  },
  {
    title: "Spoken English",
    subtitle: "Confident Communication",
    desc: "Interactive vocabulary building, phonetics, sentence structuring, and public speaking confidence sessions.",
    icon: MessageSquare,
    color: "text-brand-pink bg-soft-pink/50 border-brand-pink/20",
    badge: "Interactive"
  }
];

export function AfterSchoolSection() {
  return (
    <section className="bg-card py-20 relative overflow-hidden" id="academy">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink text-white text-xs font-bold mb-4 uppercase tracking-wider">
            Junior Academy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            After-School & Tuitions
          </h2>
          <p className="text-foreground/70 text-lg">
            Empowering students with structured academic tuitions (Grades 1–12) and specialized skill development programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyPrograms.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-background border border-border rounded-3xl p-6 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl border ${p.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xl mb-1 text-foreground">{p.title}</h3>
                  <h4 className="text-xs font-semibold text-brand-orange mb-3">{p.subtitle}</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-4 bg-muted/50 rounded-2xl border border-border/80">
            <span className="text-sm font-medium text-foreground/85">
              Interested in our evening academy or tutoring programs?
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-pink text-white hover:bg-brand-pink/90 px-6 py-2.5 font-bold text-sm shadow-pop transition-all"
            >
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
