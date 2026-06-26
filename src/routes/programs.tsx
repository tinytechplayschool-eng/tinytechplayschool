import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AfterSchoolSection } from "@/components/sections/AfterSchoolSection";

export const Route = createFileRoute("/programs")(
  {
    head: () => ({
      meta: [
        {
          title:
            "Play School & Nursery School Programs in Guduvancheri | Montessori Teacher Training",
        },
        {
          name: "description",
          content:
            "Play school, nursery school, kindergarten in Guduvancheri with IIT Delhi curriculum. Government approved Montessori teacher training course, abacus classes, spoken English classes, and CBSE tuition centre at CSC Tiny Tech Guduvancheri.",
        },
        {
          name: "keywords",
          content:
            "play school programs guduvancheri, nursery school guduvancheri, kindergarten guduvancheri, montessori teacher training guduvancheri, abacus classes guduvancheri, spoken english classes guduvancheri, CBSE tuition centre guduvancheri, preschool in vadakkupattu, kindergarten in chennai, IIT Delhi curriculum preschool, NEP 2020 preschool, activity based learning guduvancheri, preschool teacher vacancy, cbse 10th tuition centre near me, preschool education",
        },
        {
          property: "og:title",
          content:
            "Play School & Nursery Programs — CSC Tiny Tech Guduvancheri",
        },
        {
          property: "og:description",
          content:
            "Play Group, Nursery, Junior KG, Senior KG, Day Care & Montessori Teacher Training with IIT Delhi designed curriculum at CSC Tiny Tech Guduvancheri.",
        },
        {
          property: "og:url",
          content: "https://www.tinytechplayschool.in/programs",
        },
        {
          property: "og:image",
          content: "https://www.tinytechplayschool.in/tiny.png",
        },
        { property: "og:type", content: "website" },
      ],
      links: [
        {
          rel: "canonical",
          href: "https://www.tinytechplayschool.in/programs",
        },
      ],
    }),
    component: ProgramsPage,
  },
);

const details = [
  { name: "Play Group", age: "1.5 – 2.5 yrs", soft: "bg-soft-pink", color: "bg-brand-pink",
    points: ["IIT Delhi-aligned play framework", "Sensory & messy play activities", "Interactive digital storytelling & puppet shows", "Social interaction & separation transition"] },
  { name: "Nursery", age: "2.5 – 3.5 yrs", soft: "bg-soft-purple", color: "bg-brand-purple",
    points: ["Brain-responsive learning games", "Introduction to smart digital tools", "Fine motor & cognitive development", "Practical life skills & independence"] },
  { name: "Junior KG", age: "3.5 – 4.5 yrs", soft: "bg-soft-blue", color: "bg-brand-blue",
    points: ["Phonics & early reading with digital tools", "Numbers, logic & brain puzzles", "IIT Delhi play-based learning methods", "Holistic development (social & physical)"] },
  { name: "Senior KG", age: "4.5 – 5.5 yrs", soft: "bg-soft-orange", color: "bg-brand-orange",
    points: ["Advanced literacy, writing & numeracy", "Problem-solving & school readiness", "Creative puppet theater & public speaking", "NEP 2020 aligned milestone checks"] },
  { name: "Day Care", age: "1.5 – 6 yrs", soft: "bg-soft-green", color: "bg-brand-green",
    points: ["Safe extended care till 6:30 PM", "Healthy meals & nap-time", "Homework & enrichment", "Live CCTV for parents"] },
];

function ProgramsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="PROGRAMS"
        title="Play school, nursery & kindergarten in Guduvancheri"
        subtitle="Featuring a play-based, brain-responsive, and tech-enabled curriculum designed by IIT Delhi. Preschool with activity based learning, Montessori teacher training, and government approved diploma courses."
      />
      <ProgramsSection isProgramsPage={true} />

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {details.map((p, i) => (
            <div key={p.name} className={`${p.soft} rounded-3xl p-7 grid md:grid-cols-3 gap-6 items-start`}>
              <div className="md:col-span-1">
                <span className={`inline-block px-3 py-1 rounded-full ${p.color} text-white text-xs font-bold mb-3`}>STEP {i + 1}</span>
                <h3 className="text-2xl font-extrabold">{p.name}</h3>
                <p className="text-sm text-foreground/70">{p.age}</p>
              </div>
              <ul className="md:col-span-2 grid sm:grid-cols-2 gap-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 bg-card rounded-xl p-3 shadow-card">
                    <span className={`h-6 w-6 rounded-full ${p.color} text-white grid place-items-center text-xs font-extrabold shrink-0`}>✓</span>
                    <span className="text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <AfterSchoolSection />

      {/* Teacher Training Section */}
      <section className="bg-soft-blue py-20 relative overflow-hidden" id="teacher-training">
        <div className="absolute top-10 -right-20 h-72 w-72 rounded-full bg-brand-yellow/30 blur-2xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Government Approved Montessori Teacher Training in Guduvancheri</h2>
            <p className="text-foreground/70">Government approved Montessori teacher training course in Guduvancheri. Empowering aspiring educators with professional diplomas in early childhood education. Build a rewarding career with our certified courses.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-card border-2 border-brand-blue/10 relative overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                Govt Approved
              </div>
              <div>
                <span className="text-4xl mb-4 block">🎓</span>
                <h3 className="text-2xl font-extrabold mb-3 text-brand-blue">Advanced Diploma in Montessori Teacher Training</h3>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  A comprehensive program designed to master the Montessori method, covering child psychology, Montessori apparatus training, curriculum planning, and classroom management techniques.
                </p>
                <div className="space-y-2 mb-8">
                  {[
                    "Approved by Government of India",
                    "Hands-on training with Montessori materials",
                    "Deep dive into Child Psychology & Development",
                    "Practical teaching practice & internship support",
                    "Global career opportunities in Montessori schools"
                  ].map((pt) => (
                    <div key={pt} className="flex gap-2 items-center text-sm">
                      <span className="h-5 w-5 rounded-full bg-brand-blue text-white grid place-items-center text-xs font-bold shrink-0">✓</span>
                      <span className="text-foreground/90">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="w-full inline-flex items-center justify-center rounded-full bg-brand-blue text-white py-3 font-bold text-sm shadow-pop hover:bg-brand-blue/90 transition-colors">
                Enquire for Admission
              </Link>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-card border-2 border-brand-purple/10 relative overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div className="absolute top-0 right-0 bg-brand-purple text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                Govt Approved
              </div>
              <div>
                <span className="text-4xl mb-4 block">👩‍🏫</span>
                <h3 className="text-2xl font-extrabold mb-3 text-brand-purple">Advanced Diploma in Primary and Pre-primary Education</h3>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  An advanced course covering the pedagogy and curriculum of both pre-primary and primary education. Perfect for teaching children from preschool up to primary grade levels.
                </p>
                <div className="space-y-2 mb-8">
                  {[
                    "Approved by Government of India",
                    "Covers pre-primary & primary school curriculum",
                    "Lesson planning & teaching methodology guidelines",
                    "Classroom organization & child guidance techniques",
                    "High-demand certification for nursery & primary teachers"
                  ].map((pt) => (
                    <div key={pt} className="flex gap-2 items-center text-sm">
                      <span className="h-5 w-5 rounded-full bg-brand-purple text-white grid place-items-center text-xs font-bold shrink-0">✓</span>
                      <span className="text-foreground/90">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="w-full inline-flex items-center justify-center rounded-full bg-brand-purple text-white py-3 font-bold text-sm shadow-pop hover:bg-brand-purple/90 transition-colors">
                Enquire for Admission
              </Link>
            </div>
          </div>
          
          <div className="mt-12 bg-white/60 backdrop-blur rounded-2xl p-6 border border-border text-center max-w-3xl mx-auto shadow-sm">
            <span className="text-lg font-bold text-foreground block mb-1">🇮🇳 Approved by Government of India</span>
            <p className="text-sm text-foreground/70">Our diplomas are recognized, giving you a valid and high-value qualification to teach locally and internationally.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
