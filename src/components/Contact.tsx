"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactMethods = [
  {
    title: "Email",
    value: "petersalah104@gmail.com",
    href: "mailto:petersalah104@gmail.com",
    actionText: "Send Email",
    icon: Mail,
    primary: true,
  },
  {
    title: "WhatsApp",
    value: "+20 120 499 5735",
    href: "https://wa.me/201204995735",
    actionText: "Chat on WhatsApp",
    icon: MessageCircle,
    primary: false,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/petersalah",
    href: "https://www.linkedin.com/in/petersalah/",
    actionText: "Connect on LinkedIn",
    icon: FaLinkedin,
    primary: false,
  },
  {
    title: "GitHub",
    value: "github.com/petersalah1",
    href: "https://github.com/petersalah1",
    actionText: "Explore Repositories",
    icon: FaGithub,
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Main Container (Neo-Brutalist 3D Box) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#121215] border-2 border-neutral-700/80 p-6 sm:p-10 lg:p-14 shadow-[4px_4px_0px_0px_#6366f1] sm:shadow-[5px_5px_0px_0px_#6366f1]"
        >
          {/* Header */}
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="inline-block bg-indigo-600 text-white font-black text-xs sm:text-sm px-3.5 py-1.5 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff] uppercase tracking-wider mb-3 sm:mb-4">
              Get in Touch // Let&apos;s Build
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
              Have an idea or a project in mind?
            </h2>
            
            <p className="text-xs sm:text-base text-neutral-300 leading-relaxed">
              I&apos;m currently available for freelance projects, internships, and junior front-end developer roles. Let&apos;s discuss how we can create something exceptional together.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 mb-8">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`flex items-center justify-between p-4 sm:p-5 border-2 transition-all duration-200 group ${
                    method.primary
                      ? "bg-indigo-600 text-white border-black shadow-[3px_3px_0px_0px_#ffffff] sm:shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5"
                      : "bg-[#18181b] text-white border-neutral-700 shadow-[3px_3px_0px_0px_#6366f1] sm:shadow-[4px_4px_0px_0px_#6366f1] hover:border-neutral-300 hover:-translate-x-0.5 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border-2 ${
                        method.primary
                          ? "bg-black text-indigo-400 border-black"
                          : "bg-[#09090b] text-white border-neutral-700 group-hover:border-indigo-400 group-hover:text-indigo-400"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <div
                        className={`text-[0.65rem] sm:text-xs font-black uppercase tracking-wider ${
                          method.primary ? "text-indigo-200" : "text-neutral-400"
                        }`}
                      >
                        {method.title}
                      </div>
                      <div className="text-xs sm:text-base lg:text-lg font-black tracking-tight text-white">
                        {method.value}
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className={`transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      method.primary ? "text-white" : "text-neutral-400 group-hover:text-white"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Availability Status Footnote */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 sm:pt-5 border-t border-neutral-800 text-xs sm:text-sm text-neutral-400 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-white">Active status: Open to immediate opportunities</span>
            </div>

            <div>Quick response time (within 24 hours)</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}