"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10 py-20 lg:py-0">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">Peter Salah</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              Front-End Developer <span className="mx-3 text-neutral-300 dark:text-neutral-700 hidden sm:inline-block">|</span><br className="sm:hidden" /> React Specialist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 w-full sm:w-auto text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-full aspect-square max-w-[480px]">
            {/* Glowing ring behind the image */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-blue-600 to-cyan-400 rotate-6 opacity-30 dark:opacity-40 blur-2xl transition-transform hover:rotate-12 duration-700"></div>
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-blue-600 to-cyan-400 -rotate-3 transition-transform hover:-rotate-6 duration-700 shadow-xl"></div>
            
            {/* The actual image container */}
            <div className="absolute inset-[4px] rounded-[2.8rem] bg-white dark:bg-neutral-900 overflow-hidden z-10">
              <Image 
                src="/profileimage.png" 
                alt="Peter Salah" 
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 68px) 100vw, (max-width: 1200px) 50vw, 480px"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
