import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Best Preschool in Guduvancheri | CSC Tiny Tech Play School" },
      { name: "description", content: "CSC Tiny Tech is the best preschool for kids in Guduvancheri. Learn about our IIT Delhi designed curriculum, Montessori preschool near Guduvancheri Railway Station, and our 15+ years of nurturing happy learners." },
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">A school built with love in Guduvancheri</h2>
            <p className="text-foreground/80 mb-3">
              CSC Tiny Tech Guduvancheri brings high-quality, tech-enabled, and play-based early childhood education to our community. As the best preschool for kids in Guduvancheri, our curriculum developed by CSC Academy in association with IIT Delhi bridges the educational gap with a world-class, NEP 2020-aligned learning experience. We offer nursery school, kindergarten, and affordable day care centre programs near SRM University and Guduvancheri Railway Station.
            </p>
            <p className="text-foreground/80">
              What hasn't changed is our heart — every child is known by name, every parent
              feels at home, and every day brings something to wonder about and explore.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-7 shadow-card">
            <h3 className="font-extrabold text-2xl mb-3">"Every child is a bright spark."</h3>
            <p className="text-foreground/80 mb-4">
              When we established our CSC Tiny Tech center in Guduvancheri, we promised parents one thing — your child will be
              nurtured, loved, and empowered with modern early learning tools. That promise is still the foundation of everything we do.
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
