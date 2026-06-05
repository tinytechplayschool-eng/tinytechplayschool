import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickInfoSection } from "@/components/sections/QuickInfoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AdmissionStepsSection } from "@/components/sections/AdmissionStepsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiny Tech Play school — Learn, Play & Grow" },
      { name: "description", content: "Vibrant playschool & Montessori with experienced teachers, safe facilities, day care and transportation. Admissions open." },
      { property: "og:title", content: "Tiny Tech Play school" },
      { property: "og:description", content: "A happy place to learn, play & grow." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <QuickInfoSection />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionStepsSection />
      <ContactSection />
    </PageLayout>
  );
}
