import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ContactSectionProps {
  isContactPage?: boolean;
}

export function ContactSection({ isContactPage = false }: ContactSectionProps) {
  const [sent, setSent] = useState(false);

  if (!isContactPage) {
    return (
      <section className="bg-soft-blue py-20 relative overflow-hidden" id="contact">
        {/* Decorative blobs */}
        <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-brand-pink/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-brand-blue/5 blur-2xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            Preschool admission Guduvancheri 2026 — Enquire now!
          </h2>
          <p className="text-foreground/70 text-base max-w-2xl mx-auto mb-10">
            Ready to join the best preschool in Guduvancheri? Have questions about nursery admission, junior KG admission, fees, or our day care centre? Get in touch today.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {/* Quick Contact Info */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">School Location & Contacts</span>
                <h3 className="font-extrabold text-2xl mb-4 text-foreground">CSC Tiny Tech Pre School</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-soft-pink text-brand-pink grid place-items-center shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Address</div>
                      <div className="text-sm font-semibold text-foreground">24, Rajaji Street, N.G.O Colony, Guduvancheri, Tamil Nadu, India</div>
                      <div className="text-xs text-muted-foreground mt-0.5">(Near SRM University, Railway Station & Bus Stand)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-soft-green text-brand-green grid place-items-center shrink-0 mt-0.5">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Admissions Helpline</div>
                      <a href="tel:+9108124378478" className="text-sm font-semibold text-foreground hover:text-brand-blue hover:underline">+91-08124378478</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-soft-orange text-brand-orange grid place-items-center shrink-0 mt-0.5">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email Address</div>
                      <a href="mailto:padmasanmugam@gmail.com" className="text-sm font-semibold text-foreground hover:text-brand-blue hover:underline">padmasanmugam@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-card rounded-3xl p-4 border border-border shadow-sm flex flex-col min-h-[300px] lg:min-h-0">
              <div className="w-full h-full min-h-[260px] lg:min-h-0 rounded-2xl overflow-hidden shadow-sm relative grow">
                <iframe
                  title="School location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.017231479134!2d80.05371257403064!3d12.842162917705021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f733118958a1%3A0xc9183d5c39a79f59!2sTiny%20Tech%20play%20school!5e0!3m2!1sen!2sin!4v1780665823067!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  className="absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Action Enquiry Box */}
            <div className="bg-gradient-fresh text-white rounded-3xl p-8 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider block mb-2">Quick Enquiry</span>
                <h3 className="font-extrabold text-2xl mb-3">Enquire Online</h3>
                <p className="text-white/95 text-sm leading-relaxed mb-6">
                  Fill out our quick online enquiry form on our contact page to request admission details, fee structures, or a campus tour.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-blue hover:bg-white/90 py-3.5 px-6 font-bold text-sm shadow-pop transition-transform hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4 text-brand-blue" /> Open Enquiry Form
                </Link>
                <a
                  href="https://wa.me/918124378478?text=Hi%20CSC%20Tiny%20Tech%20Pre%20School%2C%20I%27d%20like%20to%20know%20more%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white py-3.5 px-6 font-bold text-sm shadow-pop transition-transform hover:scale-[1.01]"
                >
                  <Phone className="h-4 w-4 fill-white shrink-0" /> Enquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-soft-blue py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Preschool admission Guduvancheri 2026 — Contact Us</h2>
          <p className="text-foreground/70">Contact the best preschool in Guduvancheri for nursery admission, junior KG admission, day care centre enrolment, or Montessori teacher training near SRM University.</p>
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
                { icon: Phone, label: "Call us", value: "+91-08124378478", color: "bg-brand-green", href: "tel:+9108124378478" },
                { icon: Mail, label: "Email", value: "padmasanmugam@gmail.com", color: "bg-brand-orange", href: "mailto:padmasanmugam@gmail.com" },
                { icon: MapPin, label: "Visit", value: "24, Rajaji Street, N.G.O Colony, Guduvancheri (Near Railway Station)", color: "bg-brand-pink", href: "https://www.google.com/maps/dir/?api=1&destination=Tiny+Tech+play+school+Guduvancheri" },
                { icon: Phone, label: "WhatsApp", value: "+91 81243 78478", color: "bg-brand-purple", href: "https://wa.me/918124378478?text=Hi%20CSC%20Tiny%20Tech%20Pre%20School%2C%20I%27d%20like%20to%20know%20more%20about%20admissions." },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-card rounded-2xl p-4 shadow-card flex flex-col justify-between hover:scale-[1.03] hover:shadow-pop transition-all border border-transparent hover:border-border cursor-pointer text-left"
                >
                  <div>
                    <div className={`h-10 w-10 rounded-xl ${c.color} text-white grid place-items-center mb-2`}>
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                  </div>
                  <div className="font-bold text-xs mt-2 leading-snug text-foreground">{c.value}</div>
                </a>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                title="School location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.017231479134!2d80.05371257403064!3d12.842162917705021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f733118958a1%3A0xc9183d5c39a79f59!2sTiny%20Tech%20play%20school!5e0!3m2!1sen!2sin!4v1780665823067!5m2!1sen!2sin"
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
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              const email = formData.get("email") as string;
              const age = formData.get("age") as string;
              const message = formData.get("message") as string;

              const text = `Hi CSC Tiny Tech Pre School, I'd like to submit an enquiry:
*Name:* ${name || "N/A"}
*Phone:* ${phone || "N/A"}
*Email:* ${email || "N/A"}
*Child's Age:* ${age || "N/A"}
*Message:* ${message || "N/A"}`;

              const whatsappUrl = `https://wa.me/918124378478?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, "_blank");
              setSent(true);
            }}
            className="bg-card rounded-3xl p-6 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" placeholder="Jane Doe" required />
              <Field label="Phone" name="phone" placeholder="+91 81243 78478" required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
            <Field label="Child's Age" name="age" placeholder="e.g. 3 years" required />
            <div>
              <label className="block text-sm font-semibold mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about your child or what you'd like to know."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-hero text-white px-6 py-3 font-bold shadow-pop hover:scale-[1.02] transition-transform disabled:opacity-70"
            >
              {sent ? "Opening WhatsApp... 💌" : (<><Send className="h-4 w-4" /> Send Enquiry via WhatsApp</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, ...props }: { label: string; name: string; type?: string; placeholder?: string; [key: string]: any }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        {...props}
      />
    </div>
  );
}
