import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", child: "Mother of Aarav (Nursery)", rating: 5, color: "bg-soft-blue", avatar: "PS",
    text: "BrightSparks feels like a second home for Aarav. The teachers know him, love him, and his growth in just six months has been incredible." },
  { name: "Rahul Verma", child: "Father of Anya (Jr. KG)", rating: 5, color: "bg-soft-yellow", avatar: "RV",
    text: "Beautifully organized, safe, and full of joy. Anya runs to school every morning — that says it all." },
  { name: "Meera Iyer", child: "Mother of Vihaan (Play Group)", rating: 5, color: "bg-soft-green", avatar: "MI",
    text: "Daily updates, lovely activities and warm staff. We trust BrightSparks completely with our little one." },
];

export function TestimonialsSection() {
  return (
    <section className="bg-soft-orange py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold mb-4">PARENTS LOVE US</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Words from our parents</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-3xl p-6 shadow-card hover:-translate-y-1 transition-transform"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-5">“{r.text}”</p>
              <div className="flex items-center gap-3">
                <div className={`h-12 w-12 rounded-full ${r.color} grid place-items-center font-extrabold text-foreground`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.child}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
