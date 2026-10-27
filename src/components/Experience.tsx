"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Freelance Front-End Developer",
    company: "Freelance / Client Engagements",
    period: "2025 — Present",
    highlights: [
      "Designed and developed full-stack responsive web applications using React, Next.js, TypeScript, Tailwind CSS, and REST APIs for real-world clients.",
      "Engineered comprehensive e-commerce flows (catalog, dynamic filtering, persistent cart, checkout, and online payment integrations).",
      "Built multi-tier educational and LMS platforms featuring Arabic RTL interfaces, protected video pages, quizzes, and Google authentication.",
      "Implemented clean client architecture with TanStack React Query, Axios interceptors, reusable UI libraries, and organized service layers.",
    ],
  },
  {
    role: "Front-End Practice & Specialized Building",
    company: "Production Projects & Open Source",
    period: "2025",
    highlights: [
      "Mastered Next.js App Router patterns, server-side rendering, client component boundaries, and performance optimization.",
      "Structured reusable design systems with Tailwind CSS, custom hooks, and Context API for zero-lag state propagation.",
      "Built production-ready portfolio case studies adhering to accessibility, mobile-first design, and clean code principles.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center sm:text-left"
        >
          <div className="inline-block bg-indigo-600 text-white font-black text-xs sm:text-sm px-3.5 py-1.5 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff] uppercase tracking-wider mb-3 sm:mb-4">
            Career Timeline // Practical Experience
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            Work &amp; Experience
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Hands-on front-end development delivering high-impact, bug-free applications for clients and production environments.
          </p>
        </motion.div>

        {/* ── Experience Cards ── */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#121215] border-2 border-neutral-700/80 hover:border-neutral-300 p-5 sm:p-8 lg:p-10 shadow-[4px_4px_0px_0px_#6366f1] sm:shadow-[5px_5px_0px_0px_#6366f1] hover:shadow-[7px_7px_0px_0px_#818cf8] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-base font-bold text-neutral-400">
                    {exp.company}
                  </div>
                </div>

                <div className="self-start sm:self-auto bg-indigo-600 text-white font-black text-xs sm:text-sm px-3.5 py-1 border border-black shadow-[2px_2px_0px_0px_#ffffff]">
                  {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 sm:space-y-3">
                {exp.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-base text-neutral-300 leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-indigo-400 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
