"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Freelance Front-End Developer",
    company: "Freelance / Client Projects",
    period: "2025 - Present",
    points: [
      "Built responsive websites and web applications using React, Next.js, JavaScript, Tailwind CSS, Bootstrap, and REST APIs.",
      "Worked on educational platforms, e-commerce interfaces, landing pages, authentication flows, dynamic routes, and Arabic RTL layouts.",
      "Integrated front-end applications with backend APIs using Axios, React Query, reusable components, and organized service layers.",
    ],
  },
  {
    role: "Front-End Learning & Practice",
    company: "Personal Projects",
    period: "2025",
    points: [
      "Focused on building real-world projects with Next.js App Router, React.js, REST API integration, and responsive design.",
      "Practiced cleaner project structure using reusable components, custom hooks, Context API, and LocalStorage.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-50/70 dark:bg-[#050B14]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 mb-5">
            <Briefcase size={13} />
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Practical Front-End Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8 relative">
          <div className="absolute left-[31px] md:left-[25%] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:block col-span-1 text-right mt-1 pr-8">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-500">
                    {exp.period}
                  </div>
                </div>
                <div className="md:hidden mb-4 text-sm font-semibold text-blue-600 dark:text-blue-500 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
                <div className="col-span-3 bg-white dark:bg-[#020617] p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-8 -left-[41px] w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full border-4 border-white dark:border-[#050B14] hidden md:block z-10 box-content" />
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-5">
                    {exp.company}
                  </h4>
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg">
                        <CheckCircle2 size={19} className="mt-1 shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
