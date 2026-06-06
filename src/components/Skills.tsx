"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutDashboard, Rocket, Wrench, GraduationCap } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Core",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Next.js App Router", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "API & State",
    icon: Database,
    skills: ["REST APIs", "Axios", "TanStack React Query", "Context API", "LocalStorage", "FormData"],
  },
  {
    title: "UI & Product Work",
    icon: LayoutDashboard,
    skills: ["Responsive Design", "Arabic RTL Layouts", "E-commerce UI", "Authentication UI", "Checkout Flow", "Dashboard UI", "Figma to Code"],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "npm", "Vercel", "Framer Motion", "Lucide Icons"],
  },
];

const learningSkills = ["TypeScript", "Redux Toolkit"];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A focused stack for building responsive interfaces, connecting APIs, managing client-side state, and shipping production-ready front-end projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white dark:bg-[#020617] rounded-3xl border border-neutral-200 dark:border-neutral-800 p-7 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-neutral-50 dark:bg-[#050B14] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                Currently Leveling Up
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Practicing these technologies to use them confidently in larger projects.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {learningSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#020617] border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold"
              >
                <Rocket size={16} className="text-blue-600 dark:text-blue-400" />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
