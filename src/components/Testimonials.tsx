"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  // الشرط الإلزامي: يظل السكشن مخفياً تماماً بدون أي عناصر في الـ DOM حتى يتم إدخال رأي عميل حقيقي واحد على الأقل في ملف البيانات.
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:text-left"
        >
          <div className="inline-block bg-indigo-600 text-white font-black text-xs sm:text-sm px-3.5 py-1.5 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff] uppercase tracking-wider mb-3">
            آراء وتجارب العملاء // Client Testimonials
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3" dir="rtl">
            ماذا يقول من عملوا معي؟
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#121215] border-2 border-neutral-700 p-6 shadow-[4px_4px_0px_0px_#6366f1] flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-indigo-400 mb-4 opacity-70" />
                <p className="text-sm text-neutral-200 leading-relaxed mb-6" dir="rtl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                {item.resultsAchieved && (
                  <div className="text-xs font-bold text-indigo-300 bg-indigo-950/70 border border-indigo-700/50 p-2 mb-4" dir="rtl">
                    🎯 النتيجة المحققة: {item.resultsAchieved}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between" dir="rtl">
                <div>
                  <div className="text-sm font-black text-white">{item.clientName}</div>
                  <div className="text-xs text-neutral-400">{item.roleOrBrand}</div>
                </div>
                <span className="text-[0.65rem] font-bold text-indigo-400 uppercase tracking-wider bg-[#18181b] border border-neutral-700 px-2 py-0.5">
                  {item.projectTitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
