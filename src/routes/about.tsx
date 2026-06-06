import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tiny Tech Play school" },
      { name: "description", content: "Our story, mission, vision and the wonderful teachers behind Tiny Tech Play school." },
    ],
  }),
  component: AboutPage,
});

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
              Tiny Tech Play school opened its colorful doors with a commitment to providing
              high-quality early childhood education using a CBSE curriculum with the Montessori method of teaching. Today, we welcome
              children each year across our Playgroup, Nursery, KG, and Day Care programs.
            </p>
            <p className="text-foreground/80">
              What hasn't changed is our heart — every child is known by name, every parent
              feels at home, and every day brings something to wonder about and explore.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-7 shadow-card">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-xs font-bold mb-4">FOUNDER'S MESSAGE</span>
            <h3 className="font-extrabold text-2xl mb-3">"Every child is a bright spark."</h3>
            <p className="text-foreground/80 mb-4">
              When we started Tiny Tech Play school, we promised parents one thing — your child will be
              nurtured and loved here. That promise is still the foundation of everything we do.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <div className="h-12 w-12 rounded-full bg-gradient-sunshine grid place-items-center font-extrabold text-secondary-foreground">PS</div>
              <div>
                <div className="font-bold">Padma Sanmugam</div>
                <div className="text-xs text-muted-foreground">Founder & Principal</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
