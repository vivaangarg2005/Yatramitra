import React from "react";
import { Search, Calendar, Map, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-blue-600" />,
      title: "Enter Preferences",
      desc: "Fill in your destination, budget, dates, and travel style.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-blue-600" />,
      title: "AI Creates Itinerary",
      desc: "Our AI instantly generates a day-by-day personalized plan.",
    },
    {
      icon: <Map className="w-10 h-10 text-blue-600" />,
      title: "Explore Hidden Gems",
      desc: "Get recommendations for offbeat places and local experiences.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      title: "Travel Stress-Free",
      desc: "Follow your smart itinerary and enjoy hassle-free travel.",
    },
  ];

  return (
    <section
      id="howitworks"
      className="relative overflow-hidden py-16 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-300 opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          How <span className="text-blue-600">YatraMitra</span> Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className="flex justify-center mb-4"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
