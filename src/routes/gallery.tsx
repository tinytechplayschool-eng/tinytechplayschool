import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GallerySection } from "@/components/sections/GallerySection";

export const Route = createFileRoute("/gallery")(
  {
    head: () => ({
      meta: [
        {
          title:
            "Gallery — Best Play School in Guduvancheri | CSC Tiny Tech Pre School",
        },
        {
          name: "description",
          content:
            "Photos and videos from the best preschool in Guduvancheri. See our play school classrooms, activity based learning sessions, day care centre, and nursery school activities at CSC Tiny Tech near Guduvancheri Railway Station.",
        },
        {
          name: "keywords",
          content:
            "preschool gallery guduvancheri, play school photos guduvancheri, nursery school activities guduvancheri, day care photos guduvancheri, best preschool guduvancheri photos, playschool in vadakkupattu, preschool in vadakkupattu, kindergarten in chennai",
        },
        {
          property: "og:title",
          content:
            "Gallery — CSC Tiny Tech Pre School Guduvancheri",
        },
        {
          property: "og:description",
          content:
            "Explore photos and videos of our classrooms, activities, and happy little learners at CSC Tiny Tech — best preschool in Guduvancheri.",
        },
        {
          property: "og:url",
          content: "https://www.tinytechplayschool.in/gallery",
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
          href: "https://www.tinytechplayschool.in/gallery",
        },
      ],
    }),
    component: GalleryPage,
  },
);

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
