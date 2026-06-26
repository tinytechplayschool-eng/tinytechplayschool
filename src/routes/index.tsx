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

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        {
          title:
            "Best Preschool in Guduvancheri — CSC Tiny Tech | Play School, Day Care & Kindergarten",
        },
        {
          name: "description",
          content:
            "CSC Tiny Tech is the best preschool for kids in Guduvancheri. Preschool admission 2026 open for Play Group, Nursery, Junior KG & Senior KG. Safe and secure day care for working parents. Montessori preschool near Guduvancheri Railway Station & SRM University. Activity based learning with IIT Delhi designed curriculum.",
        },
        {
          name: "keywords",
          content:
            "best preschool in guduvancheri, play school in guduvancheri, nursery school guduvancheri, day care centre guduvancheri, kindergarten guduvancheri, preschool admission guduvancheri 2026, playschool in vadakkupattu, preschool in vadakkupattu, day care in vadakkupattu, kindergarten in chennai, best playschool near me, preschool near SRM university, montessori preschool guduvancheri, play school near me, preschool near me, preschool education",
        },
        {
          property: "og:title",
          content:
            "Best Preschool in Guduvancheri — CSC Tiny Tech Pre School",
        },
        {
          property: "og:description",
          content:
            "Play school in Guduvancheri with IIT Delhi designed, NEP 2020 aligned curriculum. Nursery admission, kindergarten, affordable day care centre & Montessori teacher training.",
        },
        {
          property: "og:url",
          content: "https://www.tinytechplayschool.in/",
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
          href: "https://www.tinytechplayschool.in/",
        },
      ],
    }),
    component: Home,
  },
);

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
