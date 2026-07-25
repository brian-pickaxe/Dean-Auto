"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Graphene Ceramic Coating",
    description:
      "We use Adam's Graphene Ceramic Coating™ Advanced for superior protection. This premium coating provides 5+ years of protection with incredible hydrophobic properties.",
    category: "Ceramic Coating",
    link: "https://adamspolishes.com/products/graphene-ceramic-coating",
    image: "/images/product-adams-graphene.jpg",
    imageAlt: "Adam's Graphene Ceramic Coating bottle - premium ceramic coating used by Dean Auto for long-lasting paint protection",
  },
  {
    title: "Premium Polishes & Compounds",
    description:
      "Adam's Polishes premium polishing compounds and finishing polishes ensure a flawless, show-quality finish on every vehicle we detail.",
    category: "Polishing",
    link: "https://adamspolishes.com/products/adam-s-paint-finishing-polish",
    image: "/images/product-adams-polish.jpg",
    imageAlt: "Adam's Premium Polishes and Compounds - paint finishing polish used by Dean Auto for show-quality results",
  },
  {
    title: "Professional Wash Products",
    description:
      "We use Adam's Car Wash Shampoo and Ultra Foam Shampoo for safe, effective cleaning that preserves your vehicle's finish.",
    category: "Washing",
    link: "https://adamspolishes.com/products/car-shampoo",
    image: "/images/product-adams-shampoo.jpg",
    imageAlt: "Adam's Car Wash Shampoo - professional car wash product used by Dean Auto for safe exterior cleaning",
  },
  {
    title: "Interior Care Products",
    description:
      "Adam's interior cleaning and conditioning products keep your vehicle's interior looking and feeling like new with premium protection.",
    category: "Interior",
    link: "https://adamspolishes.com/products/adam-s-total-interior-detailer",
    image: "/images/product-adams-interior.jpg",
    imageAlt: "Adam's Interior Detailer - interior cleaning and conditioning product used by Dean Auto for vinyl, leather, and plastic",
  },
  {
    title: "Koch Chemie Protector Wax",
    description:
      "We use Koch Chemie Protector Wax for high-gloss shine, long-lasting water repellency, and protection on paint, chrome, and trim. It delivers a durable finish with a self-cleaning lotus effect.",
    category: "Protector Wax",
    link: "https://www.koch-chemie.com/en/products/protectorwax",
    image: "/images/product-koch-wax.jpg",
    imageAlt: "Koch Chemie Protector Wax bottle - protector wax used by Dean Auto for high-gloss exterior protection and water repellency",
  },
  {
    title: "P&S Xpress Interior Cleaner",
    description:
      "P&S Detail Products Xpress Interior Cleaner tackles stains, spills, and dirt on fabric, carpet, vinyl, and leather. We use it for effective, residue-free interior stain removal and cleaning.",
    category: "Stain Removal",
    link: "https://psdetailproducts.com/collections/interior-cleaners",
    image: "/images/product-ps-xpress.jpg",
    imageAlt: "P&S Xpress Interior Cleaner bottle - stain removal and interior cleaner used by Dean Auto for fabric, carpet, and upholstery",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Products We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            At Dean Auto, we use premium products from trusted brands including{" "}
            <a
              href="https://adamspolishes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Adam's Polishes
            </a>
            ,{" "}
            <a
              href="https://www.koch-chemie.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Koch Chemie
            </a>
            , and{" "}
            <a
              href="https://psdetailproducts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              P&S Detail Products
            </a>
            . Their formulations deliver exceptional results and long-lasting protection for your vehicle.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
            <Award className="w-5 h-5 text-primary-600" />
            <span className="text-sm text-gray-700 font-medium">
              Premium Professional-Grade Products
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-300 group overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 md:h-auto bg-gray-100 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded inline-block w-fit mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all mt-auto"
                  >
                    Learn more about this product
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://adamspolishes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Shop Adam's Polishes Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
