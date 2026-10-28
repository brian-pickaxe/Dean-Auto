"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BookNowButton from "@/components/BookNowButton";

const pricingPlans = [
  {
    name: "Interior",
    price: "From $100",
    description: "Complete interior cleaning and refresh",
    note: "",
    image: "/images/interior-glistening-dash.jpg",
    features: [
      "Deep vacuuming",
      "Dashboard and console cleaning",
      "Seat cleaning and conditioning",
      "Interior window cleaning",
      "Door panels, vents, and trunk",
    ],
    popular: false,
  },
  {
    name: "Exterior",
    price: "From $100",
    description: "Hand wash, wheels, and exterior finish",
    note: "",
    image: "/images/work-1.jpg",
    features: [
      "Hand wash and dry",
      "Wheel and tire cleaning",
      "Trim dressing",
      "Exterior window cleaning",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "From $180",
    description: "Interior and exterior combined",
    note: "",
    image: "/images/work-4.jpg",
    features: [
      "Full interior detailing",
      "Full exterior detailing",
      "Best value for a complete refresh",
    ],
    popular: true,
  },
  {
    name: "Polish",
    price: "From $150",
    description: "Paint correction and polish",
    note: "Price varies based on paint condition.",
    image: "/images/work-5.jpg",
    features: [
      "Paint correction",
      "Machine polish",
      "Restored gloss and clarity",
    ],
    popular: false,
  },
  {
    name: "Ceramic Coating",
    price: "From $400",
    description: "Long-lasting paint protection",
    note: "",
    image: "/images/product-adams-graphene.jpg",
    features: [
      "Paint prep and coating",
      "Hydrophobic protection",
      "Enhanced gloss and durability",
    ],
    popular: false,
  },
];

const extraServices = [
  { name: "Engine Bay Detail", price: "$30" },
  { name: "Interior Polish", price: "$40" },
  { name: "Stain Removal", price: "$50" },
  { name: "Headlight Restoration", price: "$35" },
  { name: "Trim Restoration", price: "$40" },
  { name: "Glass Ceramic", price: "$12 / window" },
  { name: "Interior Ceramic", price: "$25 / seat" },
  { name: "Ceramic Wheels", price: "$75" },
];

export default function PricingPage() {
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
              Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all our mobile detailing services. Contact
              us for a custom quote based on your vehicle size and specific
              needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                  plan.popular
                    ? "border-primary-500 relative"
                    : "border-gray-200"
                }`}
              >
                <div
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${plan.image})` }}
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-slate-900/5" />
                </div>
                <div className="p-8">
                  {plan.popular && (
                    <div className="-mx-8 -mt-8 mb-4 bg-primary-600 px-4 py-2 text-center text-sm font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xl font-semibold text-primary-600 mb-2">
                    {plan.price}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  {plan.note ? (
                    <p className="mb-3 text-xs italic text-gray-500">{plan.note}</p>
                  ) : null}

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <BookNowButton
                    variant={plan.popular ? "primary" : "secondary"}
                    className="block w-full text-center py-3 px-6"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">
              Extra Services
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Add-ons available with any package.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {extraServices.map((extra) => (
                <div
                  key={extra.name}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <span className="font-semibold text-gray-800">{extra.name}</span>
                  <span className="font-bold text-primary-700 whitespace-nowrap">
                    {extra.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center">
            <BookNowButton variant="primary" className="px-8 py-3">
              Book Now
            </BookNowButton>
          </div>
        </div>
      </section>
    </div>
  );
}
