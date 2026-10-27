"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "@/app/peter-profile.png";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/petersalah1", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/petersalah/", icon: FaLinkedin },
  { label: "Email", href: "mailto:petersalah104@gmail.com", icon: Mail },
];

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "1+ yr", label: "Front-End Focus" },
  { value: "100%", label: "Clean Code" },
];

export function Hero() {
  return (
    <section id="home" className="relative py-8 sm:py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          
          {/* ── Left Content: Headline, Bio, Buttons, Stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-left"
          >
            {/* Top Badge: Electric Indigo */}
            <div className="inline-flex items-center gap-2 self-start bg-indigo-950/80 text-indigo-300 font-bold text-xs sm:text-sm px-3.5 py-1.5 border border-indigo-700/60 shadow-[2px_2px_0px_0px_#6366f1] uppercase tracking-wider mb-4 sm:mb-6">
              <span>Available for Work · Cairo, Egypt</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight sm:leading-[1.15] tracking-tight text-white mb-4 sm:mb-6">
              I build modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400 underline decoration-indigo-500/50 underline-offset-4">
                web applications
              </span>{" "}
              that deliver results.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-xl mb-6 sm:mb-8">
              I&apos;m <span className="font-bold text-white">Peter Salah</span>, a Front-End Developer specializing in
              React, Next.js, and TypeScript. I craft clean, responsive interfaces with real-world API integrations,
              authentication, payment flows, and Arabic RTL layouts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 sm:mb-8">
              <Link
                href="#projects"
                className="neo-btn-primary py-3 px-6 text-xs sm:text-sm uppercase tracking-wider text-center"
              >
                View My Projects
                <ArrowRight size={15} className="stroke-[2.5]" />
              </Link>

              <a
                href="/Peter_Salah_Frontend.pdf"
                download
                className="neo-btn-secondary py-3 px-5 text-xs sm:text-sm uppercase tracking-wider text-center"
              >
                Download CV
                <Download size={15} className="stroke-[2.5]" />
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-5 border-t border-neutral-800">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#121215] border border-neutral-700/80 p-2.5 sm:p-3.5 text-center shadow-[2px_2px_0px_0px_#6366f1] sm:shadow-[3px_3px_0px_0px_#6366f1]"
                >
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-[0.62rem] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Content: Prominent Profile Card (Larger Size) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[340px] sm:max-w-md lg:max-w-none"
          >
            {/* Card Frame with Electric Indigo Offset Shadow */}
            <div className="relative bg-[#121215] border-2 border-neutral-700 p-3 sm:p-4 shadow-[5px_5px_0px_0px_#6366f1] sm:shadow-[6px_6px_0px_0px_#6366f1] group">
              
              {/* Inner Image Frame - Prominent & Large */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#18181b] to-[#09090b] border-2 border-neutral-700">
                <Image
                  src={profileImage}
                  alt="Peter Salah"
                  priority
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 450px, 500px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Name Tag on Image */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#09090b]/90 border border-neutral-700 p-3 sm:p-3.5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm sm:text-base font-black text-white">Peter Salah</div>
                      <div className="text-[0.68rem] sm:text-xs font-bold text-indigo-400 tracking-wider uppercase">
                        React & Next.js Developer
                      </div>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          aria-label={label}
                          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center bg-[#18181b] border border-neutral-700 text-neutral-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-colors"
                        >
                          <Icon size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-2.5 bg-indigo-600 text-white font-black text-[0.68rem] sm:text-xs px-3 py-1 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff]">
                Frontend Specialist
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
