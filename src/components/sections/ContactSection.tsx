import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-soft-blue py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold mb-4">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">We'd love to hear from you</h2>
          <p className="text-foreground/70">Have a question or want to book a tour? Send us a message.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: "Call us", value: "+91 98765 43210", color: "bg-brand-green" },
                { icon: Mail, label: "Email", value: "hello@brightsparks.school", color: "bg-brand-orange" },
                { icon: MapPin, label: "Visit", value: "12 Garden Road, Bengaluru 560001", color: "bg-brand-pink" },
                { icon: Phone, label: "WhatsApp", value: "+91 98765 43210", color: "bg-brand-purple" },
              ].map((c) => (
                <div key={c.label} className="bg-card rounded-2xl p-4 shadow-card">
                  <div className={`h-10 w-10 rounded-xl ${c.color} text-white grid place-items-center mb-2`}>
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="font-bold text-sm">{c.value}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                title="School location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.4!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card rounded-3xl p-6 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" placeholder="Jane Doe" />
              <Field label="Phone" name="phone" placeholder="+91 98765 43210" />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <Field label="Child's Age" name="age" placeholder="e.g. 3 years" />
            <div>
              <label className="block text-sm font-semibold mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us a little about your child or what you'd like to know."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-hero text-white px-6 py-3 font-bold shadow-pop hover:scale-[1.02] transition-transform disabled:opacity-70"
            >
              {sent ? "Message sent! We'll reach out soon 💌" : (<><Send className="h-4 w-4" /> Send Enquiry</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
