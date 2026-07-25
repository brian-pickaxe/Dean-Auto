"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    // In a real application, this would send data to a backend
    console.log("Booking submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Schedule Your Detailing Appointment
      </h2>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! We'll contact you shortly to confirm your appointment.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[\d\s\-\(\)]+$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="(720) 555-1234"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Service Type *
            </label>
            <select
              id="service"
              {...register("service", { required: "Please select a service" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              <option value="interior">Interior Detailing</option>
              <option value="exterior">Exterior Detailing</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="full">Full Service (Interior + Exterior)</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">
                {errors.service.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Please select a date" })}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Additional Notes
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Any special requests or vehicle details..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Submit Booking Request
        </button>
      </form>
    </motion.div>
  );
}

