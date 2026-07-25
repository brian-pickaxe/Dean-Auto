"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Mobile Detailing Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Dean Auto, we provide high-quality car detailing services at
              your convenience. Our team ensures your vehicle looks its best
              with premium products from{" "}
              <a
                href="https://adamspolishes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Adam's Polishes
              </a>{" "}
              and professional techniques, right at your doorstep.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Serving Thornton, Westminster, Brighton, and surrounding North Denver
              suburbs, we are dedicated to delivering exceptional results with
              a focus on customer satisfaction and attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Convenient Mobile Service
                </h3>
                <p className="text-gray-600">
                  We come to you, saving you time and hassle. No need to leave
                  your home or office.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium Products Used
                </h3>
                <p className="text-gray-600">
                  We use premium products from{" "}
                  <a
                    href="https://adamspolishes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Adam's Polishes
                  </a>
                  ,{" "}
                  <a
                    href="https://www.koch-chemie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Koch Chemie
                  </a>
                  , and{" "}
                  <a
                    href="https://psdetailproducts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    P&S Detail Products
                  </a>{" "}
                  to ensure your vehicle gets the best treatment with industry-leading formulations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Eco-Friendly Products
                </h3>
                <p className="text-gray-600">
                  Safe detailing with environmentally conscious products for
                  your peace of mind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

