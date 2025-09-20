import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to apply background and shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for menu items
  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    }),
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  // Nav links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Destination", href: "#destination" },
    { name: "Hidden Gems", href: "#hiddengems" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#howitworks" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100"
          : "bg-white/80 backdrop-blur-lg border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3.5 px-6 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          YatraMitra
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-600 font-medium text-sm">
          {navLinks.map((item, index) => (
            <motion.li
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={listVariants}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <a
                href={item.href}
                className="relative transition text-gray-600 group-hover:text-blue-600"
              >
                {item.name}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          >
            <ul className="flex flex-col items-center py-6 space-y-5 text-gray-700 font-medium">
              {navLinks.map((item, index) => (
                <motion.li
                  key={item.name}
                  custom={index}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={item.href}
                    className="block text-lg hover:text-blue-600 transition"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
