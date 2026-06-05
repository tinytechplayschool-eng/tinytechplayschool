import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ProgramsSection } from "@/components/sections/ProgramsSection";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Tiny Tech Play school" },
      { name: "description", content: "Play Group, Nursery, Junior KG, Senior KG, Day Care, and Govt. of India approved Advanced Montessori Teacher Training Diploma courses." },
    ],
  }),
  component: ProgramsPage,
});

const details = [
  { name: "Play Group", age: "1.5 – 2.5 yrs", soft: "bg-soft-pink", color: "bg-brand-pink",
    points: ["Gentle separation from parent", "Sensory & messy play", "Songs, rhymes, story circles", "Toilet-training support"] },
  { name: "Nursery", age: "2.5 – 3.5 yrs", soft: "bg-soft-purple", color: "bg-brand-purple",
    points: ["Montessori practical-life", "Fine motor skills", "Pre-writing & shapes", "Independence & sharing"] },
  { name: "Junior KG", age: "3.5 – 4.5 yrs", soft: "bg-soft-blue", color: "bg-brand-blue",
    points: ["Phonics & early reading", "Numbers 1–20", "Creative art & craft", "Outdoor sports basics"] },
  { name: "Senior KG", age: "4.5 – 5.5 yrs", soft: "bg-soft-orange", color: "bg-brand-orange",
    points: ["Reading & writing", "Numbers up to 100", "School-readiness skills", "Public speaking & shows"] },
  { name: "Day Care", age: "1.5 – 6 yrs", soft: "bg-soft-green", color: "bg-brand-green",
    points: ["Safe extended care till 6:30 PM", "Healthy meals & nap-time", "Homework & enrichment", "Live CCTV for parents"] },
];

function ProgramsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="PROGRAMS"
        title="A joyful program for every age"
        subtitle="From toddlers to confident kindergartners — we have a path designed for them."
      />
      <ProgramsSection isProgramsPage={true} />

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-brand-yellow font-display text-sm font-bold shadow-sm">
              For kids:
            </span>
          </div>
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

      {/* Teacher Training Section */}
      <section className="bg-soft-blue py-20 relative overflow-hidden" id="teacher-training">
        <div className="absolute top-10 -right-20 h-72 w-72 rounded-full bg-brand-yellow/30 blur-2xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1.5 rounded-full bg-brand-blue text-white text-xs font-bold mb-4 tracking-wider uppercase">Teacher Training Academy</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Govt. of India Approved Diploma Courses</h2>
            <p className="text-foreground/70">Empowering aspiring educators with professional diplomas in early childhood education. Build a rewarding career with our government-approved certifications.</p>
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
