import { motion } from "motion/react";
import { MessageCircleQuestion, School, FileText, PartyPopper } from "lucide-react";

const steps = [
  { icon: MessageCircleQuestion, title: "Enquiry", desc: "Fill the form or call us — we'll share program details.", color: "bg-brand-blue" },
  { icon: School, title: "School Visit", desc: "Tour the campus and meet our teachers.", color: "bg-brand-orange" },
  { icon: FileText, title: "Registration", desc: "Submit the form and documents.", color: "bg-brand-purple" },
  { icon: PartyPopper, title: "Admission", desc: "Welcome to the BrightSparks family!", color: "bg-brand-green" },
];

export function AdmissionStepsSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-xs font-bold mb-4">ADMISSION PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Just four simple steps</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-3xl border-2 border-border p-6 text-center hover:shadow-pop hover:-translate-y-1 transition-all bg-card"
            >
              <div className={`absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full ${s.color} text-white grid place-items-center font-extrabold shadow-pop`}>
                {i + 1}
              </div>
              <div className={`mx-auto mt-3 h-14 w-14 rounded-2xl grid place-items-center ${s.color} text-white mb-3`}>
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
