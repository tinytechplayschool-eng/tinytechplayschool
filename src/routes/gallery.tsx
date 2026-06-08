import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — CSC Tiny Tech Pre School" },
      { name: "description", content: "Photos and videos from a typical day at CSC Tiny Tech Pre School." },
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
