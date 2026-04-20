"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJquery, SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiAxios, SiReactquery } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "group-hover:text-[#E34F26]" },
  { name: "CSS", icon: FaCss3Alt, color: "group-hover:text-[#1572B6]" },
  { name: "JavaScript", icon: FaJs, color: "group-hover:text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "React.js", icon: FaReact, color: "group-hover:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-[#000000] dark:group-hover:text-white" },
  { name: "Redux", icon: SiRedux, color: "group-hover:text-[#764ABC]" },
  { name: "React Query", icon: SiReactquery, color: "group-hover:text-[#FF4154]" },
  { name: "Axios", icon: SiAxios, color: "group-hover:text-[#5A29E4]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  { name: "Bootstrap", icon: FaBootstrap, color: "group-hover:text-[#7952B3]" },
  { name: "jQuery", icon: SiJquery, color: "group-hover:text-[#0769AD]" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 dark:bg-[#050B14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My technology stack for building high-performance, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex items-center p-5 bg-white dark:bg-[#020617] rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all sm:hover:-translate-y-1 space-x-4 cursor-default"
            >
              <div className={`text-4xl text-neutral-400 dark:text-neutral-600 transition-colors duration-300 ${skill.color}`}>
                <skill.icon />
              </div>
              <span className="font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
