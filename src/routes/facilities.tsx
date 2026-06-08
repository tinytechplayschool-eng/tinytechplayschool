import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { ShieldCheck, Camera, HeartPulse, Lock } from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — CSC Tiny Tech Pre School" },
      { name: "description", content: "Smart classrooms, indoor & outdoor play, library, activity rooms, CCTV, transportation and day care." },
    ],
  }),
  component: FacilitiesPage,
});

const safety = [
  { icon: Camera, title: "24/7 CCTV", desc: "Every classroom, hallway and play area is monitored." },
  { icon: Lock, title: "Secure Entry", desc: "ID-verified pickup and biometric staff access." },
  { icon: HeartPulse, title: "On-call Doctor", desc: "First-aid kit and pediatric consult on call." },
  { icon: ShieldCheck, title: "Safe Transport", desc: "GPS-tracked buses with trained female attendants." },
];

function FacilitiesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="FACILITIES"
        title="Safe spaces designed for little wonders"
        gradient="bg-gradient-sunshine"
      />
      <FacilitiesSection />

      <section className="bg-soft-green py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold mb-4">SAFETY FIRST</span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Your child's safety is our promise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {safety.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-6 text-center shadow-card hover:-translate-y-1 transition-transform">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-fresh text-white grid place-items-center mb-3">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="font-bold mb-1">{s.title}</div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
