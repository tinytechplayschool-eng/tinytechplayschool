import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — BrightSparks Playschool" },
      { name: "description", content: "Our story, mission, vision and the wonderful teachers behind BrightSparks." },
    ],
  }),
  component: AboutPage,
});

const teachers = [
  { name: "Ms. Anjali", role: "Head of School", years: "15+ years", color: "bg-soft-blue" },
  { name: "Ms. Priya", role: "Montessori Lead", years: "10 years", color: "bg-soft-pink" },
  { name: "Ms. Kavita", role: "Junior KG Teacher", years: "8 years", color: "bg-soft-yellow" },
  { name: "Ms. Reena", role: "Activity Coordinator", years: "6 years", color: "bg-soft-green" },
];

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ABOUT US"
        title="Where curiosity meets care"
        subtitle="15+ years of nurturing happy, confident little learners."
        gradient="bg-gradient-fresh"
      />
      <AboutSection />

      <section className="bg-soft-orange py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold mb-4">OUR STORY</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">A school built with love</h2>
            <p className="text-foreground/80 mb-3">
              BrightSparks opened its colorful doors in 2010 with one classroom, one teacher
              and twelve little learners. Today, we welcome over 500 children each year across
              our Playgroup, Nursery, KG and Day Care programs.
            </p>
            <p className="text-foreground/80">
              What hasn't changed is our heart — every child is known by name, every parent
              feels at home, and every day brings something to wonder about.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-7 shadow-card">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-xs font-bold mb-4">FOUNDER'S MESSAGE</span>
            <h3 className="font-extrabold text-2xl mb-3">"Every child is a bright spark."</h3>
            <p className="text-foreground/80 mb-4">
              When we started BrightSparks, we promised parents one thing — your child will be
              loved here. That promise is still the foundation of everything we do.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <div className="h-12 w-12 rounded-full bg-gradient-sunshine grid place-items-center font-extrabold text-secondary-foreground">AN</div>
              <div>
                <div className="font-bold">Anjali Nair</div>
                <div className="text-xs text-muted-foreground">Founder & Principal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-purple py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-xs font-bold mb-4">OUR TEACHERS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Loving, trained, trusted</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teachers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`${t.color} rounded-3xl p-6 text-center shadow-card hover:-translate-y-1 transition-transform`}
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-white grid place-items-center font-extrabold text-2xl mb-3">
                  {t.name.split(" ")[1]?.[0] ?? "T"}
                </div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-foreground/70">{t.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.years}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
