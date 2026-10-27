"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = link.id;
        }
      });
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-[#0a0a0c]/95 backdrop-blur-md border-b-2 border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#0a0a0c] border-b-2 border-neutral-800"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo with Neo-Brutalist 3D Box ── */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center bg-indigo-600 text-white text-xs sm:text-sm font-black border-2 border-black shadow-[2px_2px_0px_0px_#ffffff] sm:shadow-[2.5px_2.5px_0px_0px_#ffffff] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
            PS
          </span>
          <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Peter Salah
          </span>
        </button>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer px-4 py-1.5 text-sm font-bold uppercase tracking-wide transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff]"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* ── Desktop CTA (Download CV) ── */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/Peter_Salah_Frontend.pdf"
            download
            className="neo-btn-primary px-4 py-2 text-xs uppercase tracking-wider font-black"
          >
            Download CV
            <Download size={14} className="stroke-[2.5]" />
          </a>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center bg-[#18181b] border-2 border-neutral-700 text-white shadow-[2px_2px_0px_0px_#6366f1] active:translate-y-0.5"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b-2 border-neutral-800 bg-[#0a0a0c] px-4 pb-6 pt-3 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer py-3 px-4 text-left text-sm font-bold uppercase tracking-wider border-2 ${
                    activeSection === item.id
                      ? "bg-indigo-600 text-white border-black shadow-[2px_2px_0px_0px_#ffffff]"
                      : "border-transparent text-neutral-300 hover:bg-neutral-800/80"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/Peter_Salah_Frontend.pdf"
                download
                className="neo-btn-primary mt-2 py-3 text-center text-sm font-black uppercase tracking-wider"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
