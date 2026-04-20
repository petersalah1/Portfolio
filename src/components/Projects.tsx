"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A high-performance modern web shop focusing on seamless user experience, lightning-fast loads, and complex state management using Redux and React Query.",
    image: "bg-gradient-to-br from-blue-600 to-cyan-400",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media Application",
    description: "A real-time interaction platform showcasing complex UI components, highly interactive features, and efficient REST API integration.",
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
    tags: ["React.js", "Next.js", "Axios", "Tailwind CSS", "TypeScript", "Redux"],
    demoLink: "#",
    githubLink: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A selection of my best work, showcasing complex problem solving and modern design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[2rem] overflow-hidden bg-white dark:bg-[#020617] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
            >
              <div className={`w-full h-72 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white text-sm font-semibold py-3 px-6 rounded-full backdrop-blur-md shadow-lg">
                    View Project Details
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Link 
                    href={project.demoLink}
                    className="flex-1 inline-flex justify-center items-center py-4 px-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={18} className="ml-2" />
                  </Link>
                  <Link 
                    href={project.githubLink}
                    className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                  >
                    <FaGithub size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
