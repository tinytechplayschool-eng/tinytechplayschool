import { motion } from "motion/react";

const activities = [
  { emoji: "🤺", name: "Silambam", color: "bg-soft-green" },
  { emoji: "🥋", name: "Karate", color: "bg-soft-pink" },
  { emoji: "🎨", name: "Drawing", color: "bg-soft-blue" },
  { emoji: "🔤", name: "Phonics", color: "bg-soft-orange" },
  { emoji: "✍️", name: "Handwriting", color: "bg-soft-purple" },
  { emoji: "🧮", name: "Abacus", color: "bg-soft-yellow" },
  { emoji: "🪩", name: "Western Dance", color: "bg-soft-pink" },
  { emoji: "💃", name: "Bharathanatiyam", color: "bg-soft-purple" },
  { emoji: "🎤", name: "Vocal Music", color: "bg-soft-yellow" },
  { emoji: "🧘", name: "Yoga", color: "bg-soft-blue" },
  { emoji: "📖", name: "Story Telling", color: "bg-soft-orange" },
  { emoji: "⚽", name: "Outdoor Play", color: "bg-soft-green" },
];

export function ActivitiesSection() {
  return (
    <section className="bg-soft-green py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold mb-4">FUN ACTIVITIES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Learning that feels like play</h2>
          <p className="text-foreground/70">A week at Tiny Tech is packed with discovery, movement, music and imagination.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`${a.color} rounded-2xl p-5 text-center hover:scale-105 hover:rotate-1 transition-transform cursor-default shadow-card`}
            >
              <div className="text-5xl mb-2">{a.emoji}</div>
              <div className="font-bold text-sm">{a.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
