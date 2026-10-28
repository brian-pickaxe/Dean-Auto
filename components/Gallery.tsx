"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/images/work-1.jpg",
    alt: "Lifted black pickup with American Force wheels after exterior detailing in Thornton, Colorado",
  },
  {
    id: 3,
    src: "/images/work-3.jpg",
    alt: "Glossy Volkswagen side profile and wheel after paint polish and exterior detail",
  },
  {
    id: 4,
    src: "/images/work-4.jpg",
    alt: "Pickup truck foam wash in progress during mobile exterior detailing",
  },
  {
    id: 5,
    src: "/images/work-5.jpg",
    alt: "Close-up of mirror-finish metallic paint after polishing by Dean Auto",
  },
  {
    id: 6,
    src: "/images/work-6.jpg",
    alt: "Classic BMW 6 Series coupe with lights on after full exterior detailing",
  },
  {
    id: 7,
    src: "/images/work-7.jpg",
    alt: "Glossy black BMW 8 Series on driveway after professional detailing",
  },
  {
    id: 8,
    src: "/images/work-8.jpg",
    alt: "Pair of classic BMW coupes detailed for a show and Navy aircraft backdrop",
  },
  {
    id: 9,
    src: "/images/work-9.jpg",
    alt: "Dark gray Ram 1500 side profile after exterior wash and protection",
  },
  {
    id: 10,
    src: "/images/work-10.jpg",
    alt: "Black Audi Q5 front three-quarter after mobile detailing in North Denver",
  },
  {
    id: 11,
    src: "/images/work-11.jpg",
    alt: "Ford F-150 hood with clear coat failure before paint correction",
  },
  {
    id: 12,
    src: "/images/work-12.jpg",
    alt: "Ram 1500 front view after exterior detailing and finish work",
  },
  {
    id: 13,
    src: "/images/work-13.jpg",
    alt: "Black leather rear bench seats after deep interior cleaning",
  },
  {
    id: 14,
    src: "/images/work-14.jpg",
    alt: "Black Tesla Model Y rear three-quarter after exterior detailing",
  },
  {
    id: 15,
    src: "/images/work-15.jpg",
    alt: "Volkswagen Jetta GLI at night after exterior detailing and polish",
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real vehicles detailed by Dean Auto — interiors, exteriors, and paint
            that looks showroom-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
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
