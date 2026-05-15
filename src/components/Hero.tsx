"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-10 relative z-10 py-24 lg:py-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium"
          >
            Available for Freelance, Internships & Junior Roles
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-500">
                Peter Salah
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-300 mb-5 max-w-2xl mx-auto lg:mx-0 font-semibold">
              React / Next.js Front-End Developer
            </p>

            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build responsive, modern, and user-friendly web applications
              using React.js, Next.js, JavaScript, Tailwind CSS, and REST APIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 group"
            >
              View My Work
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>

            <a
              href="/Peter_Salah_Frontend.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto text-base font-semibold rounded-full text-blue-600 dark:text-blue-400 bg-white dark:bg-[#020617] border border-blue-600/20 dark:border-blue-400/20 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all shadow-sm group"
            >
              Download CV
              <Download
                className="ml-2 group-hover:translate-y-0.5 transition-transform"
                size={20}
              />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end w-full max-w-[280px] sm:max-w-[360px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative w-full aspect-square max-w-[430px]">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-blue-600 to-cyan-400 rotate-6 opacity-25 dark:opacity-35 blur-2xl transition-transform hover:rotate-12 duration-700"></div>
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-blue-600 to-cyan-400 -rotate-3 transition-transform hover:-rotate-6 duration-700 shadow-xl"></div>

            <div className="absolute inset-[5px] rounded-[2.7rem] bg-white dark:bg-neutral-900 overflow-hidden z-10">
              <Image
                src="/profileimage.png"
                alt="Peter Salah"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 430px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}