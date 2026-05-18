"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      let currentSection = "";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = link.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md shadow-sm border-b border-neutral-200 dark:border-neutral-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold tracking-tighter text-neutral-900 dark:text-white"
          >
            P
            <span className="text-blue-600 dark:text-blue-500">S.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/60"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            <div className="ml-3">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 bg-white/70 dark:bg-[#020617]/70 border border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-md transition-all"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 top-[72px] bg-black/10 dark:bg-black/30 backdrop-blur-[2px] md:hidden"
              />

              <motion.nav
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="md:hidden absolute top-full left-4 right-4 mt-4 rounded-3xl bg-white/95 dark:bg-[#020617]/95 border border-neutral-200 dark:border-neutral-800 shadow-2xl backdrop-blur-xl overflow-hidden"
              >
                <div className="p-3">
                  {navLinks.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-base font-medium transition-all cursor-pointer ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                              : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/70"
                          }`}
                        >
                          {item.name}
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}