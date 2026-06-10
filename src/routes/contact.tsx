import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CSC Tiny Tech — Best Preschool in Guduvancheri | Preschool Admission 2026" },
      { name: "description", content: "Contact the best preschool in Guduvancheri for nursery admission, junior KG admission, day care enrolment, or Montessori teacher training. Visit us near SRM University and Guduvancheri Railway Station. Call, WhatsApp, or book a tour." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="We'd love to meet you"
        subtitle="Book a tour, ask a question, or just say hi — we're here."
        gradient="bg-gradient-fresh"
      />
      <ContactSection isContactPage={true} />
    </PageLayout>
  );
}
