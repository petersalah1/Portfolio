"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  GitFork,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/petersalah1",
    icon: GitFork,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/petersalah",
    icon: ExternalLink,
  },
];

const contactMethods = [
  {
    id: "email",
    label: "Send an Email",
    sublabel: "petersalah104@gmail.com",
    href: "mailto:petersalah104@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    id: "whatsapp",
    label: "Chat on WhatsApp",
    sublabel: "+20 120 499 5735",
    href: "https://wa.me/201204995735",
    icon: MessageCircle,
    primary: false,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 dark:bg-blue-500/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/4 dark:bg-violet-500/6 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
            <Sparkles size={12} />
            Get in Touch
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-center text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-5"
        >
          Let&apos;s Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            Something Great
          </span>
        </motion.h2>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-center text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-14"
        >
          Open to freelance projects, internships, and junior front-end roles.
          I&apos;d love to hear about your idea — let&apos;s make it happen.
        </motion.p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative flex items-center gap-5 p-6 rounded-3xl border transition-all duration-300 overflow-hidden ${
                  method.primary
                    ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border-transparent text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40"
                    : "bg-white dark:bg-[#0B1220] border-neutral-200 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-500 text-neutral-800 dark:text-neutral-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Shine effect on primary */}
                {method.primary && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    method.primary
                      ? "bg-white/15 group-hover:bg-white/20"
                      : "bg-neutral-100 dark:bg-neutral-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10"
                  }`}
                >
                  <Icon
                    size={26}
                    className={
                      method.primary
                        ? "text-white"
                        : "text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    }
                  />
                </div>

                <div className="flex-1 text-left">
                  <p
                    className={`text-base font-semibold mb-0.5 ${
                      method.primary
                        ? "text-white"
                        : "text-neutral-900 dark:text-white"
                    }`}
                  >
                    {method.label}
                  </p>
                  <p
                    className={`text-sm ${
                      method.primary
                        ? "text-blue-100/80"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {method.sublabel}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className={`shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    method.primary
                      ? "text-white/70 group-hover:text-white"
                      : "text-neutral-400 dark:text-neutral-600 group-hover:text-blue-500 dark:group-hover:text-blue-400"
                  }`}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          <span className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
            or find me on
          </span>
          <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white dark:bg-[#0B1220] border border-neutral-200 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-500 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Icon size={18} />
                {s.label}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center mt-10 text-sm text-neutral-400 dark:text-neutral-600"
        >
          Usually responds within a few hours ⚡
        </motion.p>
      </div>
    </section>
  );
}