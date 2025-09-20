import React from "react";
import { motion } from "framer-motion";

// Single Destination Card
function DestinationCard({ image, name, price, days, tags, index }) {
  const tagColors = {
    Beaches: "bg-blue-200 text-blue-800",
    Nightlife: "bg-purple-200 text-purple-800",
    Nature: "bg-green-200 text-green-800",
    Heritage: "bg-yellow-200 text-yellow-800",
    History: "bg-red-200 text-red-800",
    Culture: "bg-pink-200 text-pink-800",
    Backwaters: "bg-teal-200 text-teal-800",
    Ayurveda: "bg-indigo-200 text-indigo-800",
    Wildlife: "bg-lime-200 text-lime-800",
    Hills: "bg-orange-200 text-orange-800",
    Adventure: "bg-fuchsia-200 text-fuchsia-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
    >
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-8">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <span>Rs {price}+</span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-6 4h6"
              />
            </svg>
            {days} days
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1 }}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                tagColors[tag] || "bg-gray-100 text-gray-800"
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Parent component
export default function PopularDestinations() {
  const destinations = [
    {
      image: "/images/Goa.jpeg",
      name: "Goa, India",
      price: "40,000",
      days: 5,
      tags: ["Beaches", "Nightlife", "Nature"],
    },
    {
      image: "/images/Jaipur.jpeg",
      name: "Jaipur, Rajasthan",
      price: "30,000",
      days: 4,
      tags: ["Heritage", "History", "Culture"],
    },
    {
      image: "/images/Kerala.jpeg",
      name: "Alleppey, Kerala",
      price: "55,000",
      days: 7,
      tags: ["Backwaters", "Ayurveda", "Wildlife"],
    },
    {
      image: "/images/Shimla.jpeg",
      name: "Shimla, Himachal",
      price: "28,000",
      days: 5,
      tags: ["Hills", "Adventure", "Nature"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-100 py-16 md:py-28">
      {/* Animated Blobs */}
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
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Indian Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} index={idx} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
