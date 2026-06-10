import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AdmissionStepsSection } from "@/components/sections/AdmissionStepsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Preschool Admission Guduvancheri 2026 — Nursery, Junior KG & Day Care | CSC Tiny Tech" },
      { name: "description", content: "Preschool admission Guduvancheri 2026 open! Nursery admission, junior KG admission, and affordable day care centre in Guduvancheri. Transparent fees, simple steps at CSC Tiny Tech — best preschool near SRM University & Guduvancheri Railway Station." },
    ],
  }),
  component: AdmissionsPage,
});

const documents = [
  "Child's birth certificate",
  "2 recent passport-size photos",
  "Parent's ID proof (Aadhar / PAN)",
  "Address proof",
  "Immunization record",
];
const fees = [
  { name: "Play Group", admission: "₹10,000", quarterly: "₹18,000", color: "bg-soft-pink" },
  { name: "Nursery", admission: "₹12,000", quarterly: "₹22,000", color: "bg-soft-purple" },
  { name: "Junior KG", admission: "₹14,000", quarterly: "₹26,000", color: "bg-soft-blue" },
  { name: "Senior KG", admission: "₹14,000", quarterly: "₹28,000", color: "bg-soft-orange" },
  { name: "Day Care add-on", admission: "—", quarterly: "₹15,000", color: "bg-soft-green" },
];

function AdmissionsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ADMISSIONS 2026–27"
        title="Preschool admission Guduvancheri 2026"
        subtitle="Nursery admission, junior KG admission, and day care enrolment — simple steps, transparent fees, and a warm welcome from day one."
      />
      <AdmissionStepsSection />

      <section className="bg-soft-yellow py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-7 shadow-card">
            <h2 className="text-2xl font-extrabold mb-4">Who can apply?</h2>
            <ul className="space-y-2 text-sm">
              <li>• <b>Play Group</b> — 1.5 to 2.5 years on 1 June 2026</li>
              <li>• <b>Nursery</b> — 2.5 to 3.5 years</li>
              <li>• <b>Junior KG</b> — 3.5 to 4.5 years</li>
              <li>• <b>Senior KG</b> — 4.5 to 5.5 years</li>
              <li>• <b>Day Care</b> — open to all enrolled children</li>
            </ul>
          </div>
          <div className="bg-card rounded-3xl p-7 shadow-card">
            <h2 className="text-2xl font-extrabold mb-4">Bring these along</h2>
            <ul className="space-y-2 text-sm">
              {documents.map((d) => (
                <li key={d} className="flex gap-2"><span className="h-5 w-5 rounded-full bg-brand-purple text-white grid place-items-center text-xs">✓</span> {d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Affordable & transparent fee structure</h2>
            <p className="text-muted-foreground mt-2">Affordable day care centre in Guduvancheri — fees include materials, snacks, activities and field trips.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {fees.map((f) => (
              <div key={f.name} className={`${f.color} rounded-2xl p-5 text-center shadow-card`}>
                <div className="font-extrabold">{f.name}</div>
                <div className="mt-3 text-xs text-muted-foreground">Admission</div>
                <div className="font-bold">{f.admission}</div>
                <div className="mt-2 text-xs text-muted-foreground">Quarterly</div>
                <div className="font-bold">{f.quarterly}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </PageLayout>
  );
}
