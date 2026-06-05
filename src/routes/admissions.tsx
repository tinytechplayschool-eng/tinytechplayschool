import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { AdmissionStepsSection } from "@/components/sections/AdmissionStepsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Tiny Tech Play school" },
      { name: "description", content: "Eligibility, documents, fees and admission details for Tiny Tech Play school." },
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
        title="Join the Tiny Tech family"
        subtitle="Simple steps, transparent fees, and a warm welcome from day one."
      />
      <AdmissionStepsSection />

      <section className="bg-soft-yellow py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-7 shadow-card">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-bold mb-4">ELIGIBILITY</span>
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
            <span className="inline-block px-3 py-1 rounded-full bg-brand-purple text-white text-xs font-bold mb-4">DOCUMENTS REQUIRED</span>
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
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold mb-4">FEES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Transparent, all-inclusive</h2>
            <p className="text-muted-foreground mt-2">Fees include materials, snacks, activities and field trips.</p>
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
