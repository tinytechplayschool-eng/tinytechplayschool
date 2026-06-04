import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ProgramsSection } from "@/components/sections/ProgramsSection";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — BrightSparks Playschool" },
      { name: "description", content: "Play Group, Nursery, Junior KG, Senior KG and Day Care programs designed for joyful learning." },
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
      <ProgramsSection />

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
    </PageLayout>
  );
}
