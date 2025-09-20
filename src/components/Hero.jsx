import React, { useState } from "react";
import { MapPin, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [days, setDays] = useState(7);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 12 },
    },
  };

  const pulseVariants = {
    scale: [1, 1.02, 1],
    boxShadow: [
      "0 4px 6px rgba(0, 0, 0, 0.1)",
      "0 8px 12px rgba(99, 102, 241, 0.4)",
      "0 4px 6px rgba(0, 0, 0, 0.1)",
    ],
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-100 py-16 md:py-28"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-green-300 opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto flex flex-col-reverse items-center px-6 md:flex-row md:items-center md:justify-between">
        {/* Left Section */}
        <motion.div
          className="flex-1 text-center md:text-left md:max-w-2xl mt-12 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              YatraMitra
            </span>
            : India’s Smart Tourism Companion
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="mt-6 text-lg text-gray-700 md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Personalized, budget-friendly, and eco-conscious trip planning in
            one trusted app. Empowering governments with tourism insights and
            supporting local communities.
          </motion.p>

          {/* Form */}
          <motion.div
            className="mt-10 w-full rounded-2xl bg-white/60 border border-gray-200 p-6 shadow-2xl backdrop-blur-md md:max-w-md"
            variants={itemVariants}
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div className="relative" variants={itemVariants}>
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Destination"
                    aria-label="Destination"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </motion.div>
                <motion.div className="relative" variants={itemVariants}>
                  <IndianRupee className="absolute left-3 top-3.5 h-5 w-5 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Budget (₹)"
                    aria-label="Budget"
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </motion.div>
              </div>

              {/* Trip Duration */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-semibold text-gray-700 flex justify-between">
                  <span>Trip Duration (days)</span>
                  <span className="font-bold text-blue-600">{days} days</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-lg bg-gray-200 h-2 accent-blue-600 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>15</span>
                  <span>30</span>
                </div>
              </motion.div>

              {/* Button */}
              <motion.button
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg focus:outline-none"
                aria-label="Start Planning"
                variants={itemVariants}
                animate={pulseVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Planning
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="relative mt-12 flex flex-1 justify-center md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 12,
            delay: 0.8,
          }}
        >
          <img
            src="/images/Image.png"
            alt="Tourists planning trip on digital map"
            className="w-full max-w-2xl rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
