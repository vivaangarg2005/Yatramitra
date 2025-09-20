import React from "react";
import { motion } from "motion/react";

// Single Hidden Gem Card
function HiddenGemCard({ image, name, price, days, tags, index }) {
  const tagColors = {
    Mountains: "bg-blue-200 text-blue-800",
    Tribes: "bg-green-200 text-green-800",
    "Music Festival": "bg-purple-200 text-purple-800",
    Monastery: "bg-yellow-200 text-yellow-800",
    Snow: "bg-sky-200 text-sky-800",
    Adventure: "bg-red-200 text-red-800",
    Island: "bg-teal-200 text-teal-800",
    Culture: "bg-pink-200 text-pink-800",
    Nature: "bg-lime-200 text-lime-800",
    Valley: "bg-indigo-200 text-indigo-800",
    Trekking: "bg-orange-200 text-orange-800",
    Flowers: "bg-fuchsia-200 text-fuchsia-800",
    Hills: "bg-emerald-200 text-emerald-800",
    Meadows: "bg-amber-200 text-amber-800",
    Village: "bg-rose-200 text-rose-800",
    Beaches: "bg-cyan-200 text-cyan-800",
    Spirituality: "bg-violet-200 text-violet-800",
    Relaxation: "bg-gray-200 text-gray-800",
    Heritage: "bg-yellow-300 text-yellow-900",
    Ruins: "bg-orange-200 text-orange-800",
    River: "bg-blue-100 text-blue-700",
    Waterfalls: "bg-cyan-200 text-cyan-800",
    Scenic: "bg-lime-300 text-lime-900",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 140,
        damping: 18,
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-200"
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
export default function HiddenGems() {
  const gems = [
    {
      image: "/images/Laitlum.jpg",
      name: "Laitlum, Meghalaya",
      price: "38,000",
      days: 6,
      tags: ["Valley", "Waterfalls", "Scenic"],
    },
    {
      image: "/images/Hampi.jpg",
      name: "Hampi, Karnataka",
      price: "40,000",
      days: 5,
      tags: ["Heritage", "Ruins", "River"],
    },
    {
      image: "/images/Laitmawsiang.jpg",
      name: "Laitmawsiang, Meghalaya",
      price: "30,000",
      days: 5,
      tags: ["Hills", "Village", "Waterfalls", "Scenic"],
    },
    {
      image: "/images/DzukouValley.jpeg",
      name: "Dzukou Valley, Nagaland",
      price: "34,000",
      days: 6,
      tags: ["Valley", "Trekking", "Flowers"],
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
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

      <div className="container relative z-10 mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Hidden Gems of India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gems.map((gem, idx) => (
            <HiddenGemCard key={idx} index={idx} {...gem} />
          ))}
        </div>
      </div>
    </section>
  );
}
