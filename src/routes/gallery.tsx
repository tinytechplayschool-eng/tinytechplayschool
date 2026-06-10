import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Best Play School in Guduvancheri | CSC Tiny Tech Pre School" },
      { name: "description", content: "Photos and videos from the best preschool in Guduvancheri. See our play school classrooms, activity based learning sessions, day care centre, and nursery school activities at CSC Tiny Tech near Guduvancheri Railway Station." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="GALLERY"
        title="A peek into our colorful days"
        gradient="bg-gradient-hero"
      />
      <GallerySection />
    </PageLayout>
  );
}
