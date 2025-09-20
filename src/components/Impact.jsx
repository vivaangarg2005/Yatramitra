import React from "react";
import { Users, Briefcase, Leaf } from "lucide-react";
import { motion } from "motion/react";

export default function Impact() {
  const impacts = [
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Social Impact",
      desc: "Makes travel planning accessible for everyone, promotes cultural preservation, and empowers diverse communities.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      title: "Economic Impact",
      desc: "Boosts local businesses and rural tourism by diverting travelers to less crowded destinations, supporting SMEs.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-blue-600" />,
      title: "Environmental Impact",
      desc: "Reduces pressure on overcrowded sites, encourages eco-friendly transport, and spreads awareness of sustainable tourism.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 overflow-hidden">
      {/* Animated Blobs */}
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
          Impact & <span className="text-blue-600">Benefits</span>
        </motion.h2>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
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
              className="bg-blue-50 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
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
                {impact.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {impact.title}
              </h3>
              <p className="text-gray-600 text-sm">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
