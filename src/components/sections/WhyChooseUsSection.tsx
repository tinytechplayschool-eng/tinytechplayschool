import { motion } from "motion/react";
import { Award, Smile, Shield, Sparkles, MessageCircle, UserCheck } from "lucide-react";

const features = [
  { icon: Award, title: "Experienced Teachers", desc: "Loving, trained early-childhood educators.", color: "bg-brand-blue" },
  { icon: Smile, title: "Child-Friendly Environment", desc: "Bright, joyful spaces kids love.", color: "bg-brand-pink" },
  { icon: Shield, title: "Safety & Security", desc: "CCTV, secure entry, trained staff.", color: "bg-brand-green" },
  { icon: Sparkles, title: "Montessori Learning", desc: "Hands-on, self-paced discovery.", color: "bg-brand-purple" },
  { icon: MessageCircle, title: "Parent Communication", desc: "Daily updates and open dialogue.", color: "bg-brand-orange" },
  { icon: UserCheck, title: "Individual Attention", desc: "Small class sizes, big care.", color: "bg-brand-yellow" },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold mb-4">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Six big reasons parents trust BrightSparks</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 bg-card border-2 border-border hover:border-transparent hover:shadow-pop transition-all hover:-translate-y-1"
            >
              <div className={`h-12 w-12 rounded-xl grid place-items-center ${f.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
