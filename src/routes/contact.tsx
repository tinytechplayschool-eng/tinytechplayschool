import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")(
  {
    head: () => ({
      meta: [
        {
          title:
            "Contact CSC Tiny Tech — Best Preschool in Guduvancheri | Preschool Admission 2026",
        },
        {
          name: "description",
          content:
            "Contact the best preschool in Guduvancheri for nursery admission, junior KG admission, day care enrolment, or Montessori teacher training. Visit us near SRM University and Guduvancheri Railway Station. Call, WhatsApp, or book a tour.",
        },
        {
          name: "keywords",
          content:
            "contact preschool guduvancheri, preschool phone number guduvancheri, book a tour preschool guduvancheri, preschool admission enquiry guduvancheri, day care in vadakkupattu, playschool in vadakkupattu, best playschool near me, CSC tiny tech contact, preschool near SRM university",
        },
        {
          property: "og:title",
          content:
            "Contact Us — CSC Tiny Tech Pre School Guduvancheri",
        },
        {
          property: "og:description",
          content:
            "Get in touch with CSC Tiny Tech — the best preschool in Guduvancheri. Call, WhatsApp, or visit us for admission enquiries.",
        },
        {
          property: "og:url",
          content: "https://www.tinytechplayschool.in/contact",
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
          href: "https://www.tinytechplayschool.in/contact",
        },
      ],
    }),
    component: ContactPage,
  },
);

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
