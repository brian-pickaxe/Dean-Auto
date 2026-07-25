"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch to schedule your appointment or ask any questions.
              We're here to help!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:deanautodetailers95@gmail.com"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                deanautodetailers95@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+17205323072"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                (720) 532-3072
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Service Area
              </h3>
              <p className="text-gray-600">
                Thornton, Westminster, Brighton, and North Denver suburbs
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Hours
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Monday - Friday</p>
                    <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Saturday</p>
                    <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Sunday</p>
                    <p className="text-gray-600">By Appointment</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  We offer flexible scheduling to accommodate your needs.
                  Contact us to discuss custom appointment times.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

