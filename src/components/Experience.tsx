"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Front-End Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Leading the front-end team in building high-performance React and Next.js applications. Responsible for architectural decisions, state management, and mentoring junior developers.",
  },
  {
    role: "Front-End Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    description: "Developed responsive and interactive UI components. Integrated RESTful APIs and collaborated with designers to implement pixel-perfect web experiences.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative">
          <div className="absolute left-[31px] md:left-[25%] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:block col-span-1 text-right mt-1 pr-8">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-500">{exp.period}</div>
                </div>
                <div className="md:hidden mb-4 text-sm font-semibold text-blue-600 dark:text-blue-500 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
                <div className="col-span-3 bg-white dark:bg-[#020617] p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-8 -left-[41px] w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full border-4 border-white dark:border-[#0f172a] hidden md:block z-10 box-content"></div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-4">{exp.company}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
