'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MessageCircle, Code2 } from 'lucide-react';

import profileImage from '@/app/peter-profile.png';

type IconProps = {
  size?: number;
  className?: string;
};

function GithubIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.02h4.36V23H.32V8.02ZM8.02 8.02h4.18v2.05h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.67V23h-4.36v-7.56c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23H8.02V8.02Z" />
    </svg>
  );
}

function ReactIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className}>
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.6 157.5 69.3 54H54v72h12.2V69.5l73.8 95.3a90.2 90.2 0 0 0 9.6-7.3Z"
        fill="white"
      />
      <path d="M115 54h12v72h-12z" fill="white" />
    </svg>
  );
}

function TypeScriptIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect width="100" height="100" rx="18" fill="currentColor" />
      <path
        d="M24 52h35v8H46v31h-9V60H24v-8Zm40 38c-5 0-9.5-1.2-13-3.8v-9c3.4 2.8 8 4.7 12.8 4.7 4.3 0 6.3-1.5 6.3-4.1 0-1.3-.5-2.3-1.6-3.1-1-.8-3-1.7-5.8-2.7-4.4-1.6-7.5-3.4-9.4-5.5-1.9-2.1-2.8-4.8-2.8-8 0-4 1.5-7.2 4.6-9.6 3-2.4 7-3.6 11.8-3.6 4.6 0 8.5.9 11.8 2.8v8.5a21.4 21.4 0 0 0-11.3-3.2c-3.9 0-5.8 1.4-5.8 3.8 0 1.2.5 2.1 1.5 2.9 1 .8 2.8 1.6 5.5 2.6 4.7 1.7 8 3.6 9.8 5.8 1.8 2.1 2.7 4.9 2.7 8.2 0 4.2-1.5 7.5-4.6 9.8-3.1 2.3-7.3 3.5-12.5 3.5Z"
        fill="white"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/petersalah1',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/petersalah/',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:petersalah104@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201204995735',
    icon: MessageCircle,
  },
];



export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(37,99,235,0.12)_1px,transparent_0)] bg-[length:28px_28px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-700 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Front-End Developer
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            I build modern{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              web experiences
            </span>{' '}
            that matter.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0">
            I&apos;m Peter Salah, a Front-End Developer focused on building
            clean, responsive, API-driven web applications with React, Next.js,
            and TypeScript.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </Link>

            <a
              href="/Peter-Salah-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-4 text-sm font-black text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-blue-300"
            >
              Download CV
              <Download className="ml-2" size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
              Find me on
            </span>

            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="order-1 relative mx-auto flex min-h-[430px] w-full max-w-[560px] items-center justify-center lg:order-2 lg:min-h-[520px]"
        >
          <div className="absolute h-[340px] w-[340px] rounded-full bg-blue-500/15 blur-3xl sm:h-[440px] sm:w-[440px]" />
          <div className="absolute h-[350px] w-[350px] rounded-full border border-blue-500/20 sm:h-[470px] sm:w-[470px]" />
          <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-blue-500/25 sm:h-[350px] sm:w-[350px]" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-3 top-16 flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/60 bg-white/85 text-cyan-500 shadow-xl shadow-blue-950/10 backdrop-blur dark:border-white/10 dark:bg-white/10 sm:left-8 sm:top-20 sm:h-20 sm:w-20 sm:rounded-[2rem]"
            aria-label="React"
          >
            <ReactIcon className="h-9 w-9 sm:h-11 sm:w-11" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-3 top-24 flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/60 bg-white/90 text-slate-950 shadow-xl shadow-blue-950/10 backdrop-blur sm:right-8 sm:top-32 sm:h-20 sm:w-20 sm:rounded-[2rem]"
            aria-label="Next.js"
          >
            <NextIcon className="h-10 w-10 sm:h-12 sm:w-12" />
          </motion.div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-24 left-5 flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-white/60 bg-white/85 text-blue-600 shadow-xl shadow-blue-950/10 backdrop-blur dark:border-white/10 dark:bg-white/10 sm:bottom-28 sm:left-10 sm:h-20 sm:w-20 sm:rounded-[2rem]"
            aria-label="TypeScript"
          >
            <TypeScriptIcon className="h-10 w-10 sm:h-12 sm:w-12" />
          </motion.div>

          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-16 right-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/85 text-blue-600 shadow-xl shadow-blue-950/10 backdrop-blur dark:border-white/10 dark:bg-white/10 sm:bottom-20 sm:right-10 sm:h-16 sm:w-16 sm:rounded-3xl"
          >
            <Code2 size={26} />
          </motion.div>

          <div className="relative z-10 flex h-[360px] w-[280px] items-end justify-center overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-950/10 sm:h-[430px] sm:w-[330px] sm:rounded-[3rem]">
            <Image
              src={profileImage}
              alt="Peter Salah"
              priority
              className="relative z-10 h-full w-full object-contain object-bottom"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}