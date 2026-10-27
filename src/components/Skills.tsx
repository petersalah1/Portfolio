"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Wrench, Rocket } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGithub,
  SiVercel,
  SiRedux,
  SiBootstrap,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Code2,
    skills: [
      { name: "React.js", icon: SiReact, featured: true },
      { name: "Next.js", icon: SiNextdotjs, featured: true },
      { name: "TypeScript", icon: SiTypescript, featured: true },
      { name: "JavaScript ES6+", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss, featured: true },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3" },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Data Fetching & State",
    icon: Database,
    skills: [
      { name: "TanStack React Query", featured: true },
      { name: "Axios", featured: true },
      { name: "REST APIs", icon: TbApi, featured: true },
      { name: "Context API" },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "LocalStorage & Cache" },
    ],
  },
  {
    title: "Product & UI Engineering",
    icon: Layout,
    skills: [
      { name: "Arabic RTL Layouts", featured: true },
      { name: "Responsive Design", featured: true },
      { name: "E-commerce & Cart" },
      { name: "Auth & Protected Routes" },
      { name: "Payment & Checkout UI" },
      { name: "Dashboard Interfaces" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Vercel Deployment", icon: SiVercel },
      { name: "VS Code" },
      { name: "Framer Motion" },
      { name: "npm / pnpm" },
      { name: "Figma to Code" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24 relative">
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
            Technical Stack // Core Competencies
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            A production-ready skillset for building fast, robust, and accessible front-end web applications.
          </p>
        </motion.div>

        {/* ── Categories Grid ── */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#121215] border-2 border-neutral-700/80 p-5 sm:p-7 shadow-[4px_4px_0px_0px_#6366f1] sm:shadow-[5px_5px_0px_0px_#6366f1] hover:border-neutral-300 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-neutral-800">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center bg-indigo-600 text-white border-2 border-black shadow-[2px_2px_0px_0px_#ffffff]">
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-bold border transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                          skill.featured
                            ? "bg-[#18181b] text-white border-neutral-600 shadow-[2px_2px_0px_0px_#6366f1] hover:border-indigo-400"
                            : "bg-[#09090b] text-neutral-300 border-neutral-800 shadow-[1px_1px_0px_0px_#000000] hover:border-neutral-500 hover:text-white"
                        }`}
                      >
                        {SkillIcon && <SkillIcon size={14} className={skill.featured ? "text-indigo-400" : "text-neutral-400"} />}
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Learning & Growth Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 bg-[#18181b] border-2 border-neutral-700 p-5 sm:p-7 shadow-[3px_3px_0px_0px_#ffffff] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center bg-indigo-600 text-white border-2 border-black shrink-0">
              <Rocket size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-black text-white">Continuous Growth & Practice</div>
              <div className="text-xs sm:text-sm text-neutral-400">
                Constantly expanding skills in TypeScript design patterns, Next.js server actions, and full-stack API architectures.
              </div>
            </div>
          </div>

          <div className="flex gap-2 self-start sm:self-auto">
            <span className="bg-indigo-600 text-white font-black text-xs px-3 py-1 border border-black shadow-[2px_2px_0px_0px_#000000]">
              TypeScript Pro
            </span>
            <span className="bg-indigo-600 text-white font-black text-xs px-3 py-1 border border-black shadow-[2px_2px_0px_0px_#000000]">
              Next.js 15+
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
