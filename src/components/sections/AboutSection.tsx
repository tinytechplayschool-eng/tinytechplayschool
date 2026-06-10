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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Best preschool for kids in Guduvancheri
          </h2>
          <p className="text-foreground/80 mb-4">
            CSC Tiny Tech is the best preschool in Guduvancheri, offering a play-based, brain-responsive curriculum developed in association with <strong>IIT Delhi</strong>. As a leading play school in Guduvancheri, we provide world-class, tech-integrated, and highly affordable early learning for nursery school, kindergarten, and day care programs.
          </p>
          <p className="text-foreground/80 mb-6">
            Our preschool with activity based learning in Guduvancheri leverages smart digital tools to create a dynamic educational environment. Conveniently located near SRM University and Guduvancheri Railway Station, we guide children through hands-on sensorial materials, engaging storytelling, and active play.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 gap-4">
          {[
            {
              icon: Lightbulb,
              color: "bg-brand-blue",
              title: "Our Vision",
              text: "To bridge the educational gap between metropolitan and rural communities by providing world-class, tech-integrated early learning.",
            },
            {
              icon: Target,
              color: "bg-brand-orange",
              title: "Our Mission",
              text: "Provide a joyful, stimulating, and affordable day care centre in Guduvancheri where children can grow at their own pace with safe and secure care for working parents.",
            },
            {
              icon: Heart,
              color: "bg-brand-pink",
              title: "Our Approach",
              text: "IIT Delhi designed curriculum, play-based & brain-responsive learning integrating smart digital tools and holistic developmental focus.",
            },
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
