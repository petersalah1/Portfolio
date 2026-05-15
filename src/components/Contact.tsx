"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-50 dark:bg-[#020617] rounded-[3rem] p-8 md:p-14 border border-neutral-200 dark:border-neutral-800 text-center relative overflow-hidden"
        >
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-neutral-100 dark:border-neutral-800">
              <Send size={32} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Let's Work Together
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Currently available for freelance opportunities, internships, and
              junior front-end roles. Feel free to contact me if you have a
              project or opportunity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href="mailto:petersalah104@gmail.com"
                className="group flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <Mail size={21} />
                Send Email
              </a>

              <a
                href="https://wa.me/201204995735"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-white dark:bg-[#0B1220] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
              >
                <MessageCircle size={21} />
                WhatsApp
              </a>
            </div>

            <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
              Usually responds as soon as possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}