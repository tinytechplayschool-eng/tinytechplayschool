import { motion } from "motion/react";
import { Heart, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-soft-yellow py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow text-secondary-foreground text-xs font-bold mb-4">ABOUT OUR SCHOOL</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            A bright start for every little learner
          </h2>
          <p className="text-foreground/80 mb-4">
            At Tiny Tech, we believe every child is born curious. Our playful,
            Montessori-inspired environment turns that curiosity into a lifelong
            love of learning — through hands-on activities, stories, songs and lots
            of laughter.
          </p>
          <p className="text-foreground/80 mb-6">
            Our experienced teachers, child-safe campus and small class sizes mean
            your little one gets the attention and care they deserve, every single day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 gap-4">
          {[
            { icon: Lightbulb, color: "bg-brand-blue", title: "Our Vision", text: "To nurture confident, kind and creative children who love to learn." },
            { icon: Target, color: "bg-brand-orange", title: "Our Mission", text: "Provide a safe, joyful and stimulating space where every child can grow at their own pace." },
            { icon: Heart, color: "bg-brand-pink", title: "Our Approach", text: "Play-based + Montessori learning, blending freedom with structure and care." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 flex gap-4 shadow-card hover:-translate-y-1 transition-transform"
            >
              <div className={`${c.color} h-12 w-12 rounded-xl grid place-items-center text-white shrink-0`}>
                <c.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
