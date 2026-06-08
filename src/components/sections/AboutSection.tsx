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
            Providing a world-class start for every little learner
          </h2>
          <p className="text-foreground/80 mb-4">
            At CSC Tiny Tech, we believe every child deserves the best start in life. Our innovative pre-school network provides a play-based, brain-responsive curriculum developed in association with <strong>IIT Delhi</strong>. We bridge the educational gap by offering a world-class, tech-integrated, and highly affordable early learning experience.
          </p>
          <p className="text-foreground/80 mb-6">
            Our curriculum leverages smart digital tools to create a dynamic and interactive educational environment. Through hands-on sensorial materials, engaging storytelling, and active play, we guide children on a journey of discovery and holistic growth.
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
              text: "Provide a joyful, stimulating, and highly affordable early learning space where children can grow at their own pace.",
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
