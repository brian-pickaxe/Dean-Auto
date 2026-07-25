"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images - user will replace these
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Car after exterior wash and polish by Dean Auto mobile detailing in Thornton, Colorado",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Vehicle exterior detailing result - premium wash and protection in Westminster and North Denver",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Car interior after deep cleaning and sanitization - Dean Auto interior detailing in North Denver suburbs",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Professional hand wash and dry at your location - mobile car wash service by Dean Auto",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Paint polishing and correction - premium detailing in Thornton and Westminster by Dean Auto",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Graphene ceramic coating on car paint - long-lasting protection applied by Dean Auto in North Denver",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Explore our stunning transformations and see our detailing
            excellence.
          </p>
          <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 max-w-xl mx-auto">
            <strong>Tip for best results:</strong> Replace these placeholder images with your own before/after photos. Real job photos improve credibility and perform better in search and social sharing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

