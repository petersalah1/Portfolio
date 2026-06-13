"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Gauge, LayoutTemplate, ShieldCheck } from "lucide-react";

const focusItems = [
  {
    title: "Clean UI Implementation",
    text: "Turning designs into responsive, polished interfaces with Tailwind CSS and reusable components.",
    icon: LayoutTemplate,
  },
  {
    title: "API-Driven Features",
    text: "Connecting front-end apps with REST APIs using Axios, React Query, loading states, and error handling.",
    icon: Code2,
  },
  {
    title: "Real Product Flows",
    text: "Building auth, cart, wishlist, checkout, orders, dashboards, and user-friendly interactions.",
    icon: ShieldCheck,
  },
  {
    title: "Performance & UX",
    text: "Keeping pages fast, readable, mobile-first, and easy to use across different screen sizes.",
    icon: Gauge,
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="spotlight-card rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
        >
          <span className="section-kicker">About Me</span>
          <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Passionate about building digital products that feel fast, clear, and reliable.
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />
          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
            I am a Front-End Developer focused on React and Next.js. I enjoy building real-world interfaces, connecting APIs, and improving user experiences step by step. My current focus is writing cleaner code, practicing TypeScript, and building portfolio projects that are close to real production flows.
          </p>
          <a
            href="https://petersalah.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-2xl border border-blue-500/25 px-5 py-3 text-sm font-bold text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-500/10 dark:text-blue-300"
          >
            View Portfolio
            <ArrowUpRight className="ml-2" size={17} />
          </a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {focusItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="spotlight-card rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
