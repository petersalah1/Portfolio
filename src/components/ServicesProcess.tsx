"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  ShoppingBag, 
  MessagesSquare, 
  Palette, 
  Code2, 
  Rocket, 
  HelpCircle,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "منصات الكورسات والتعليم أونلاين",
    titleEn: "Online Course & LMS Platforms",
    target: "للمدرسين، المحاضرين، وصناع المحتوى التعليمي",
    icon: GraduationCap,
    description:
      "بدل ما تشرح وتبعت لينكات عشوائية على واتساب وتتلخبط مين دفع ومين لأ، بنبني منصتك الخاصة المحمية بالكامل بهويتك واسمك.",
    features: [
      "حماية قوية للفيديوهات لمنع التحميل والتسريب غير المصرح به",
      "بوابات دفع إلكترونية مريحة (بطاقات بنكية، فودافون كاش، محفظة إلكترونية)",
      "نظام امتحانات وكويزات تفاعلي وتقارير لدرجات الطلاب",
      "تسجيل دخول سريع بحسابات Google وتصميم عربي RTL متقن ومريح للعين",
    ],
  },
  {
    title: "المتاجر الإلكترونية للبراندات",
    titleEn: "E-Commerce Stores for Brands",
    target: "لأصحاب البراندات والمشاريع التي تبيع على إنستجرام وفيسبوك",
    icon: ShoppingBag,
    description:
      "بدل ضياع الزبائن في رسائل الـ DMs والشات اليدوي، متجرك يستقبل الطلبات ويسحب الفلوس تلقائياً 24 ساعة في اليوم.",
    features: [
      "متجر خفيف وفائق السرعة مصمم خصيصاً للموبايل وتصفح إنستجرام",
      "سلة تسوق حية وحساب تلقائي للشحن وتأكيد فوري للطلبات",
      "ربط آمن مع بوابات الدفع الإلكتروني والدفع عند الاستلام",
      "لوحة تحكم سهلة لإدارة المنتجات، المخزون، وحالات الشحن",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "المناقشة وتحديد الهدف (Discuss)",
    timeline: "[FILL MY REAL TIMELINES - مثلاً 1–2 يوم عمل]",
    description: "بنتكلم ونفهم طبيعة شغلك، عملائك المستهدفين، وأهم الميزات المطلوبة بالضبط بدون تكاليف زيادة.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    title: "تصميم الواجهة وتجربة المستخدم (Design)",
    timeline: "[FILL MY REAL TIMELINES - مثلاً أسبوع]",
    description: "تجهيز تصميم عصري ومخصص يركز على سلاسة الشراء وتصفح الكورسات وراحة الزائر على الموبايل.",
    icon: Palette,
  },
  {
    step: "03",
    title: "البرمجة والربط بأنظمة الدفع (Build)",
    timeline: "[FILL MY REAL TIMELINES - مثلاً 2–3 أسابيع]",
    description: "كتابة كود نظيف وسريع بأحدث التقنيات (Next.js & React)، وربط حماية الفيديوهات وبوابات الدفع وقواعد البيانات.",
    icon: Code2,
  },
  {
    step: "04",
    title: "الاختبار والتدريب والإطلاق (Launch)",
    timeline: "[FILL MY REAL TIMELINES - يومين قبل الإطلاق]",
    description: "تجربة كل سيناريوهات الشراء والتسجيل، تدريبك على استخدام المنصة، وإطلاق موقعك رسمياً للجمهور.",
    icon: Rocket,
  },
];

const faqs = [
  {
    question: "إزاي بيتحدد سعر المشروع؟",
    answer:
      "السعر يعتمد بالكامل على حجم المتطلبات والميزات المطلوبة (Scope of Work) — مثلاً هل تحتاج بوابات دفع مخصصة، حماية فيديو متقدمة، أو تكاملات شحن محددة. بنحدد ده بوضوح في بداية نقاشنا قبل الاتفاق.",
  },
  {
    question: "إيه هو نظام الدفع المتفق عليه؟",
    answer:
      "نظام العمل المتبع هو 50% دفعة مقدمة قبل البدء في مرحلة التصميم والبرمجة، والـ 50% المتبقية تُدفع عند التسليم النهائي للمشروع واختباره بالكامل وقبل النقل الرسمي للدومين الحي.",
  },
  {
    question: "هل يشمل المشروع تعديلات بعد التسليم؟",
    answer:
      "نعم، يشمل المشروع جولات تعديلات محددة ومتفق عليها خلال مرحلتي التصميم والبرمجة لضمان رضاك التام، مع ضمان ودعم فني لمعالجة أي ملاحظات تقنية بعد الإطلاق.",
  },
];

export function ServicesProcess() {
  const whatsappUrl = `https://wa.me/201204995735?text=${encodeURIComponent(
    "السلام عليكم يا بيتر، حابب أناقش معاك مشروع منصة/متجر جديد وأعرف التكلفة والمدة المناسبة."
  )}`;

  return (
    <section id="services" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center sm:text-left"
        >
          <div className="inline-block bg-indigo-600 text-white font-black text-xs sm:text-sm px-3.5 py-1.5 border-2 border-black shadow-[2.5px_2.5px_0px_0px_#ffffff] uppercase tracking-wider mb-3 sm:mb-4">
            الخدمات وطريقة العمل // Services &amp; Process
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3" dir="rtl">
            حلول برمجية مخصصة لزيادة مبيعاتك وتوفير وقتك
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-neutral-300 max-w-2xl leading-relaxed" dir="rtl">
            مش مجرد واجهات شكلها حلو — بنبني أنظمة بيع وإدارة متكاملة تدير أعمالك بكفاءة وبدون تعقيد.
          </p>
        </motion.div>

        {/* ── 2 Core Services Grid ── */}
        <div className="grid gap-8 md:grid-cols-2 mb-16 sm:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#121215] border-2 border-neutral-700/80 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#6366f1] sm:shadow-[5px_5px_0px_0px_#6366f1] hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-neutral-800">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center bg-indigo-600 text-white border-2 border-black shadow-[2px_2px_0px_0px_#ffffff]">
                      <Icon size={22} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/70 border border-indigo-700/50 px-2.5 py-1">
                      {service.target}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2" dir="rtl">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-400 mb-4">
                    {service.titleEn}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6" dir="rtl">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6" dir="rtl">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary w-full py-2.5 text-xs font-black uppercase tracking-wider text-center"
                    dir="rtl"
                  >
                    استفسر عن تكلفة هذا المشروع
                    <ArrowRight size={14} className="stroke-[2.5] rotate-180" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── 4-Step Process Section ── */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center sm:text-left mb-8 sm:mb-12">
            <div className="inline-block bg-neutral-800 text-neutral-200 font-black text-xs px-3 py-1 border border-neutral-700 uppercase tracking-wider mb-2">
              طريقة العمل خطوة بخطوة // The 4-Step Process
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white" dir="rtl">
              كيف نحول فكرتك إلى منصة تعمل في أسابيع؟
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((stepItem) => {
              const StepIcon = stepItem.icon;
              return (
                <div
                  key={stepItem.step}
                  className="bg-[#121215] border-2 border-neutral-700 p-5 sm:p-6 shadow-[3px_3px_0px_0px_#6366f1] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-indigo-400">{stepItem.step}</span>
                      <div className="h-8 w-8 bg-[#18181b] border border-neutral-700 flex items-center justify-center text-white">
                        <StepIcon size={16} />
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-white mb-2" dir="rtl">
                      {stepItem.title}
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-4" dir="rtl">
                      {stepItem.description}
                    </p>
                  </div>
                  <div className="text-[0.65rem] sm:text-xs font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-800/40 px-2 py-1 text-center" dir="rtl">
                    المدة المتوقعة: {stepItem.timeline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mini FAQ Section ── */}
        <div className="bg-[#121215] border-2 border-neutral-700 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#6366f1]">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-neutral-800">
            <HelpCircle size={20} className="text-indigo-400" />
            <h3 className="text-lg sm:text-2xl font-black text-white" dir="rtl">
              أسئلة متكررة تهمك قبل البدء (FAQ)
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3" dir="rtl">
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-[#18181b] border border-neutral-700/80 p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-black text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-neutral-300 font-semibold text-center sm:text-left" dir="rtl">
              عندك سؤال تاني أو تفاصيل خاصة بمشروعك؟ اسألني مباشرة على واتساب.
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-primary py-2.5 px-5 text-xs font-black uppercase tracking-wider flex items-center gap-2"
              dir="rtl"
            >
              <FaWhatsapp size={16} />
              <span>تواصل واسأل الآن</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
