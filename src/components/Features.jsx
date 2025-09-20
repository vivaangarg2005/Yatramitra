import React from "react";
import { MapPin, IndianRupee, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion"; // Use framer-motion

export default function Features() {
  const features = [
    {
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      title: "Personalized Itinerary",
      desc: "Get a complete day-by-day plan tailored to your budget, preferences, and travel dates.",
    },
    {
      icon: <IndianRupee className="w-10 h-10 text-emerald-600" />,
      title: "Budget-Friendly Planning",
      desc: "Smart suggestions for hotels, food, and transport options that fit your budget.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-teal-600" />,
      title: "Sustainable Tourism",
      desc: "Explore offbeat, eco-conscious destinations and support local communities directly.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600" />,
      title: "Local Community Support",
      desc: "Promote remote/underutilized destinations and support local SMEs and artisans.",
    },
  ];

  // Animation variants for section elements
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-100 py-20"
    >
      {/* Background Blobs (Optional, for consistency with Hero) */}
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

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Title and Description */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={cardVariants}
          >
            Key Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            YatraMitra provides a seamless experience for travelers and empowers
            the tourism ecosystem.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              variants={cardVariants}
            >
              {/* Icon Container */}
              <div className="mb-4">
                <div className="p-4 bg-gray-100 rounded-full inline-block transition-all duration-300 group-hover:bg-blue-100">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
