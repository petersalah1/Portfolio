"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    num: "01",
    title: "NextShop E-commerce",
    description:
      "Full-featured e-commerce platform with live cart, online payments, user authentication, and order tracking.",
    image: "/images/nextshop.webp",
    tags: ["Next.js", "React Query", "Tailwind CSS", "Axios", "Payment"],
    demoLink: "https://next-shop21.vercel.app/",
    githubLink: "https://github.com/petersalah1/nextShop",
  },
  {
    num: "02",
    title: "Ahmed Megaly Platform",
    description:
      "Modern Arabic RTL educational platform with courses, protected video streaming, exams, and Google login.",
    image: "/images/mega.webp",
    tags: ["Next.js", "React", "RTL Layout", "React Query", "Google Auth"],
    demoLink: "https://ahmedmegaly.sck.guru/",
    githubLink: "",
  },
  {
    num: "03",
    title: "Nivirra Tourism",
    description:
      "Responsive travel website featuring curated trips, customer reviews, and an interactive custom tour builder.",
    image: "/images/nivirra.webp",
    tags: ["HTML5", "Modern CSS", "JavaScript", "Responsive UI"],
    demoLink: "https://petersalah1.github.io/Nivirra/index.html",
    githubLink: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-indigo-600 text-white font-black text-xs px-3.5 py-1 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff] uppercase tracking-wider mb-3">
              Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          
          <a
            href="https://github.com/petersalah1"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-bold text-neutral-400 hover:text-indigo-400 underline underline-offset-4 transition-colors"
          >
            Explore all repositories on GitHub ↗
          </a>
        </motion.div>

        {/* ── Clean 3-Column Grid (Zero Clutter, Punchy Cards) ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#121215] border-2 border-neutral-700 hover:border-neutral-300 shadow-[4px_4px_0px_0px_#6366f1] sm:shadow-[5px_5px_0px_0px_#6366f1] hover:shadow-[7px_7px_0px_0px_#818cf8] transition-all duration-200 flex flex-col group overflow-hidden"
            >
              {/* Image Preview with Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b-2 border-neutral-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  priority={index === 0}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Number Badge */}
                <div className="absolute top-2.5 left-2.5 bg-indigo-600 text-white font-black text-xs px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_#ffffff]">
                  {project.num}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Clean Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#18181b] text-neutral-300 border border-neutral-700 px-2.5 py-0.5 text-[0.72rem] font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3D Action Buttons */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-neutral-800">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary flex-1 py-2.5 text-xs font-black uppercase tracking-wider"
                  >
                    Live Demo <ExternalLink size={14} className="stroke-[2.5]" />
                  </Link>

                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="neo-btn-secondary px-3.5 py-2.5 text-xs"
                    >
                      <FaGithub size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
