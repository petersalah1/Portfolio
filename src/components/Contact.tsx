"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-50 dark:bg-[#020617] rounded-[3rem] p-10 md:p-16 border border-neutral-200 dark:border-neutral-800 text-center relative overflow-hidden"
        >
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 dark:bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white dark:bg-neutral-900 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-neutral-100 dark:border-neutral-800">
              <MessageCircle size={32} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">Let's Work Together</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Currently available for freelance opportunities and full-time roles. If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            
            <a
              href="https://wa.me/201204995735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all shadow-xl hover:shadow-green-500/25 group"
            >
              Message on WhatsApp
              <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
