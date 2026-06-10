import { motion } from "motion/react";
import { Monitor, Gamepad2, Trees, BookOpen, Palette, ShieldCheck, Bus, Heart } from "lucide-react";

const facilities = [
  { icon: Monitor, name: "Smart Classrooms", color: "bg-brand-blue" },
  { icon: Gamepad2, name: "Indoor Play Area", color: "bg-brand-pink" },
  { icon: Trees, name: "Outdoor Play Zone", color: "bg-brand-green" },
  { icon: BookOpen, name: "Library", color: "bg-brand-orange" },
  { icon: Palette, name: "Activity Room", color: "bg-brand-purple" },
  { icon: ShieldCheck, name: "CCTV Security", color: "bg-brand-blue" },
  { icon: Bus, name: "Transportation", color: "bg-brand-yellow" },
  { icon: Heart, name: "Day Care", color: "bg-brand-pink" },
];

export function FacilitiesSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Safe and secure preschool facilities in Guduvancheri
          </h2>
          <p className="text-foreground/70">
            Our campus near SRM University offers safe and secure day care for working parents, with CCTV-monitored classrooms, indoor &amp; outdoor play zones, and modern learning spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl p-5 border-2 border-border hover:border-transparent hover:shadow-pop transition-all hover:-translate-y-1 text-center bg-card"
            >
              <div
                className={`mx-auto h-14 w-14 rounded-2xl grid place-items-center ${f.color} text-white mb-3`}
              >
                <f.icon className="h-7 w-7" />
              </div>
              <div className="font-bold text-sm">{f.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
