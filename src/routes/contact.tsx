import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BrightSparks Playschool" },
      { name: "description", content: "Call, email, visit or WhatsApp us. Book a school tour anytime." },
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
      <ContactSection />
    </PageLayout>
  );
}
