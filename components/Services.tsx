"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Car, Sparkles, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Interior Detailing",
    href: "/services/interior",
    description:
      "Thorough cleaning for a fresh, new feel. Complete vacuuming, deep cleaning, and sanitization using Adam's Polishes premium interior care products for a comfortable driving experience.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Exterior Detailing",
    href: "/services/exterior",
    description:
      "Comprehensive wash, polish, and protection treatments using Adam's Polishes professional-grade products to restore your vehicle's shine and appearance.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    href: "/services/ceramic-coating",
    description:
      "Protect your paint with Adam's Graphene Ceramic Coating™ Advanced. Premium long-lasting protection that keeps your vehicle looking pristine for years.",
    color: "from-primary-500 to-primary-600",
  },
];

export default function Services() {
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience professional car detailing brought to your location with
            exceptional quality and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

