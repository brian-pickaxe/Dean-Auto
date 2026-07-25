"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Dean Auto</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Your trusted mobile detailing experts serving the North Denver
              suburbs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dean Auto was founded with a simple mission: to bring
                professional-grade car detailing services directly to your
                location. We understand that your time is valuable, and we
                believe that maintaining your vehicle shouldn't require
                disrupting your schedule.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With years of experience in automotive detailing and a passion for
                perfection, our team is dedicated to delivering exceptional
                results that exceed your expectations. We use only premium
                products and proven techniques to ensure your vehicle receives
                the care it deserves.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a quick interior refresh or a complete
                ceramic coating treatment, we're here to make your car look and
                feel like new.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Quality Guaranteed
                    </h4>
                    <p className="text-gray-600">
                      We stand behind our work with a satisfaction guarantee. If
                      you're not happy, we'll make it right.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Experienced Team
                    </h4>
                    <p className="text-gray-600">
                      Our detailers are trained professionals with years of
                      experience in automotive care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Flexible Scheduling
                    </h4>
                    <p className="text-gray-600">
                      We work around your schedule. Book at a time that's
                      convenient for you.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Our Service Area
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We proudly serve the North Denver suburbs, bringing our mobile
              detailing services directly to you. Our primary service areas
              include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <span className="text-gray-900 font-semibold">Thornton</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <span className="text-gray-900 font-semibold">Westminster</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <span className="text-gray-900 font-semibold">Brighton</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <span className="text-gray-900 font-semibold">
                  Northglenn & Surrounding Areas
                </span>
              </div>
            </div>
            <p className="text-gray-600">
              Don't see your area listed? Contact us to see if we can service
              your location!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

