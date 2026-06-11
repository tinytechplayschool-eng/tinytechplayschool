import { useState } from "react";
import { motion } from "motion/react";
import { X, Play, Image as ImageIcon, Video, Award, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Real student photos from the public/WhatsApp photos directory
const whatsappPhotos = [
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.48.05%20AM%20(1).jpeg", alt: "Active Learning & Play", h: "h-72" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.48.05%20AM.jpeg", alt: "Fine Motor Skills Activity", h: "h-80" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.48.06%20AM%20(1).jpeg", alt: "Montessori Classroom Setup", h: "h-96" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.48.06%20AM%20(2).jpeg", alt: "Interactive Group Play", h: "h-64" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.48.06%20AM.jpeg", alt: "Sensory Development Toys", h: "h-80" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.48.07%20AM.jpeg", alt: "Montessori Practical Life Activities", h: "h-72" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.12%20AM%20(1).jpeg", alt: "Student Drawing & Crafting", h: "h-64" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.12%20AM.jpeg", alt: "Creative Arts Session", h: "h-96" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.13%20AM%20(1).jpeg", alt: "Group Circle Fun", h: "h-80" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.13%20AM.jpeg", alt: "Montessori Practical Exercises", h: "h-72" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.14%20AM%20(1).jpeg", alt: "Kids Hands-on Science", h: "h-64" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.14%20AM.jpeg", alt: "Alphabet Blocks & Spelling", h: "h-80" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.15%20AM%20(1).jpeg", alt: "Fine Motor Activity with Pegs", h: "h-96" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.15%20AM.jpeg", alt: "Creative Clay Sculpting", h: "h-72" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.16%20AM%20(1).jpeg", alt: "Storybook Reading Time", h: "h-64" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.16%20AM.jpeg", alt: "Learning Shapes & Colors", h: "h-80" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.17%20AM%20(1).jpeg", alt: "Classroom Board Work", h: "h-96" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.17%20AM%20(2).jpeg", alt: "Sharing & Socialization", h: "h-72" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.17%20AM.jpeg", alt: "Building Blocks Tower", h: "h-80" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Image%202026-06-01%20at%2010.49.18%20AM.jpeg", alt: "Morning Exercises & Yoga", h: "h-64" },
];

// Real student videos from the public/WhatsApp videos directory
const whatsappVideos = [
  { src: "/WhatsApp%20Video%202026-06-11%20at%2011.45.10%20AM.mp4", title: "Alphabet Writing & Interactive Learning" },
  { src: "/WhatsApp%20Video%202026-06-10%20at%2011.20.39%20PM.mp4", title: "Creative Learning & Fun Activities" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Video%202026-06-01%20at%2010.49.20%20AM%20(1).mp4", title: "Joyful Play & Interactions" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Video%202026-06-01%20at%2010.49.20%20AM.mp4", title: "Circle Time & Activity Sessions" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Video%202026-06-01%20at%2010.49.21%20AM%20(1).mp4", title: "Classroom Fun Activities" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Video%202026-06-01%20at%2010.49.21%20AM%20(2).mp4", title: "Student Movement & Play" },
  { src: "/WhatsApp%20Unknown%202026-06-01%20at%2010.51.09%20AM/WhatsApp%20Video%202026-06-01%20at%2010.49.21%20AM.mp4", title: "Montessori Practical Exercises" },
];

// Banners/Posters from public/banner directory
const schoolBanners = [
  { src: "/banner/Banner%20Padma%20(1)-1.png", alt: "Admissions & Teacher Training Academy Poster", desc: "Montessori Teacher Training and Advanced Montessori & Primary Education approved by Govt. of India." },
  { src: "/banner/6x4%20-%201%20copy%20(2).jpg.jpeg", alt: "CSC Tiny Tech Pre School Admissions Banner", desc: "Admissions open for Playgroup, Nursery, LKG, UKG, and Day Care. Contact +91-08124378478." },
  { src: "/banner/pamplet%20design%20ppt%20(3).png", alt: "CSC Tiny Tech Academy Pamphlet", desc: "Special evening classes including Olympiad coaching, Abacus, Handwriting, Phonics, Spoken English, and Tuitions." },
  { src: "/banner/WhatsApp%20Image%202026-06-01%20at%2010.48.07%20AM%20(1).jpeg", alt: "Special Event and Programs Poster", desc: "Details of extracurricular activities and specialized programs." },
];

export function GallerySection({ preview = false }: { preview?: boolean }) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "banners">("photos");
  const [lightbox, setLightbox] = useState<{ type: "photo" | "banner"; src: string; alt: string } | null>(null);

  // If preview mode, show only first 6 photos
  const displayPhotos = preview ? whatsappPhotos.slice(0, 6) : whatsappPhotos;

  return (
    <section className="bg-soft-pink py-20" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Best play school in Guduvancheri in photos & videos</h2>
          <p className="text-foreground/70">A real look into activity based learning, play school classrooms, day care centre, and Montessori teacher training sessions at CSC Tiny Tech near Guduvancheri Railway Station.</p>
        </div>

        {/* Tab Controls (Only shown on full page) */}
        {!preview && (
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {[
              { id: "photos", label: "School Photos", icon: ImageIcon, color: "bg-brand-pink" },
              { id: "videos", label: "Activity Videos", icon: Video, color: "bg-brand-purple" },
              { id: "banners", label: "Posters & Banners", icon: Award, color: "bg-brand-orange" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all border border-border ${
                  activeTab === tab.id
                    ? `${tab.color} text-white border-transparent scale-105`
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Tab Contents */}
        {activeTab === "photos" && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayPhotos.map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightbox({ type: "photo", src: img.src, alt: img.alt })}
                  className="w-full overflow-hidden aspect-[4/3] rounded-2xl shadow-card group relative border border-border bg-card"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-bold text-left">{img.alt}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* View Full Gallery Button for Home Page Preview */}
            {preview && (
              <div className="text-center mt-12">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-sunshine text-secondary-foreground px-8 py-3.5 font-bold shadow-pop hover:scale-105 transition-transform"
                >
                  View Full Gallery (Photos, Videos & Banners) <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && !preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whatsappVideos.map((v, i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border flex flex-col justify-between">
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <video
                    src={v.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain bg-black"
                  />
                </div>
                <div className="p-4 bg-soft-purple/30 flex-grow flex items-center">
                  <h4 className="font-extrabold text-sm flex items-center gap-2 text-brand-purple">
                    <Play className="h-4 w-4 fill-brand-purple shrink-0" /> 
                    <span>{v.title}</span>
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "banners" && !preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {schoolBanners.map((b, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl overflow-hidden shadow-card border border-border flex flex-col justify-between hover:scale-[1.01] transition-transform"
              >
                <button
                  onClick={() => setLightbox({ type: "banner", src: b.src, alt: b.alt })}
                  className="w-full overflow-hidden aspect-square relative bg-white flex items-center justify-center p-4 block group border-b border-border"
                >
                  <img src={b.src} alt={b.alt} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                    <span className="bg-white/95 text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-md">Click to Zoom</span>
                  </div>
                </button>
                <div className="p-5 bg-soft-orange/30 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-brand-orange text-md mb-1">{b.alt}</h4>
                    <p className="text-xs text-foreground/80 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Lightbox Modal */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-[100] grid place-items-center p-4 sm:p-8 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors z-[110]"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative max-h-[85vh] max-w-[95vw] sm:max-w-[80vw] overflow-auto rounded-2xl shadow-pop flex flex-col items-center justify-center bg-transparent">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
              />
              <div className="mt-4 text-center max-w-xl text-white">
                <h3 className="font-bold text-lg">{lightbox.alt}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
