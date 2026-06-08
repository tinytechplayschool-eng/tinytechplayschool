import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickInfoSection } from "@/components/sections/QuickInfoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { AfterSchoolSection } from "@/components/sections/AfterSchoolSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { AdmissionStepsSection } from "@/components/sections/AdmissionStepsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CSC Tiny Tech Pre School — Guduvancheri | IIT Delhi Designed & NEP 2020 Aligned" },
      { name: "description", content: "Play-based, brain-responsive, and tech-enabled early childhood education designed by IIT Delhi. Admissions open for Playgroup, Nursery, and Kindergarten at Guduvancheri." },
      { property: "og:title", content: "CSC Tiny Tech Pre School" },
      { property: "og:description", content: "IIT Delhi-designed, NEP 2020 aligned early childhood education network." },
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
      <AfterSchoolSection />
      <WhyChooseUsSection />
      <GallerySection preview />
      <AdmissionStepsSection />
      <ContactSection />
    </PageLayout>
  );
}
