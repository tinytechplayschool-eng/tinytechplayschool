import { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Children playing music", h: "h-72" },
  { src: g2, alt: "Art class painting", h: "h-96" },
  { src: g3, alt: "Outdoor playground fun", h: "h-64" },
  { src: g4, alt: "School celebration day", h: "h-80" },
  { src: g5, alt: "Yoga session", h: "h-64" },
  { src: g6, alt: "Storytelling circle", h: "h-96" },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-soft-pink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-pink text-white text-xs font-bold mb-4">GALLERY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Little moments, big smiles</h2>
          <p className="text-foreground/70">A peek into the colorful days at Tiny Tech.</p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => setLightbox(i)}
              className={`mb-4 block w-full overflow-hidden rounded-2xl shadow-card group ${img.h} relative break-inside-avoid`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 bg-black/85 z-[60] grid place-items-center p-4 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={images[lightbox].src} alt={images[lightbox].alt} className="max-h-[90vh] max-w-full rounded-2xl shadow-pop" />
          </div>
        )}
      </div>
    </section>
  );
}
