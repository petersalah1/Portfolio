"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export function Projects() {
  // نعرض أفضل 4–6 مشاريع فقط كما هو مطلوب لتجنب التشتيت
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-block bg-indigo-600 text-white font-black text-xs px-3.5 py-1 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff] uppercase tracking-wider mb-3">
              دراسات حالة ومشاريع واقعية // Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white" dir="rtl">
              مشاريع حلت مشاكل حقيقية لعملاء
            </h2>
          </div>
          
          <a
            href="https://github.com/petersalah1"
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-sm font-bold text-neutral-400 hover:text-indigo-400 underline underline-offset-4 transition-colors"
          >
            تصفح كل الأكواد والمشاريع على GitHub ↗
          </a>
        </motion.div>

        {/* ── Case Studies Grid ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#121215] border-2 border-neutral-700 hover:border-neutral-300 shadow-[4px_4px_0px_0px_#6366f1] sm:shadow-[5px_5px_0px_0px_#6366f1] hover:shadow-[7px_7px_0px_0px_#818cf8] transition-all duration-200 flex flex-col justify-between group overflow-hidden"
            >
              <div>
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

                  {/* Category Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-[#09090b]/90 text-indigo-300 font-bold text-[0.68rem] px-2.5 py-0.5 border border-indigo-700/60 backdrop-blur-sm" dir="rtl">
                    {project.category}
                  </div>
                </div>

                {/* Card Body: Mini Case Study Structure */}
                <div className="p-5 sm:p-6 flex flex-col gap-4">
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors" dir="rtl">
                    {project.title}
                  </h3>
                  
                  {/* Problem Block */}
                  <div className="bg-[#18181b] border-r-2 border-rose-500/80 p-3" dir="rtl">
                    <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs mb-1">
                      <AlertCircle size={13} className="shrink-0" />
                      <span>المشكلة (The Problem):</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* What I Built Block */}
                  <div className="bg-[#18181b] border-r-2 border-indigo-500/80 p-3" dir="rtl">
                    <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-xs mb-1">
                      <Sparkles size={13} className="shrink-0" />
                      <span>ما قمت ببنائه (What I Built):</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.built}
                    </p>
                  </div>

                  {/* Key Results & Features Block */}
                  <div className="pt-1" dir="rtl">
                    <div className="text-xs font-bold text-white mb-2">
                      النتائج وأهم الميزات (Key Features &amp; Results):
                    </div>
                    <ul className="space-y-1.5">
                      {project.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-[0.72rem] sm:text-xs text-neutral-300 leading-normal">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span className={res.includes("[ADD REAL RESULTS") ? "text-indigo-300 font-semibold" : ""}>
                            {res}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clean Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#09090b] text-neutral-400 border border-neutral-800 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 3D Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 border-t border-neutral-800/80 flex items-center gap-2.5">
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-primary flex-1 py-2.5 text-xs font-black uppercase tracking-wider text-center"
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
                    title="View Source on GitHub"
                  >
                    <FaGithub size={16} />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
