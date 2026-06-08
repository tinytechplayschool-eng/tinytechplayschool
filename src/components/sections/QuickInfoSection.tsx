import { motion } from "motion/react";
import { BadgeCheck, Baby, Clock, Sun, GraduationCap } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "Admissions Open", desc: "2026–27 Batch", color: "bg-soft-blue text-brand-blue" },
  { icon: Baby, title: "Age Groups", desc: "1.5 – 6 Years", color: "bg-soft-pink text-brand-pink" },
  { icon: Clock, title: "School Timings", desc: "8:30 AM – 1:00 PM", color: "bg-soft-yellow text-brand-orange" },
  { icon: Sun, title: "Day Care", desc: "Till 6:30 PM", color: "bg-soft-orange text-brand-orange" },
  { icon: GraduationCap, title: "Curriculum", desc: "IIT Delhi & NEP Aligned", color: "bg-soft-purple text-brand-purple" },
];

export function QuickInfoSection() {
  return (
    <section className="py-12 -mt-8 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card rounded-2xl p-4 text-center shadow-card hover:-translate-y-1 transition-transform"
            >
              <div className={`mx-auto h-12 w-12 rounded-xl grid place-items-center mb-2 ${it.color}`}>
                <it.icon className="h-6 w-6" />
              </div>
              <div className="font-bold text-sm">{it.title}</div>
              <div className="text-xs text-muted-foreground">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
