export interface Project {
  num: string;
  title: string;
  category: "منصة تعليمية" | "متجر إلكتروني" | "موقع تعريفي وتجاري";
  image: string;
  demoLink: string;
  githubLink?: string;
  featured: boolean;
  problem: string;
  built: string;
  results: string[];
  tags: string[];
}

/**
 * 💡 كيفية إضافة مشروع جديد بسهولة:
 * أضف كائن جديد إلى مصفوفة projects بالهيكل التالي:
 * {
 *   num: "04",
 *   title: "اسم المشروع",
 *   category: "منصة تعليمية" | "متجر إلكتروني" | "موقع تعريفي وتجاري",
 *   image: "/images/your-image.webp",
 *   demoLink: "https://example.com",
 *   githubLink: "https://github.com/...", // اختياري
 *   featured: true,
 *   problem: "المشكلة في سطر واحد: مثلاً صعوبة متابعة الطلبات يدوياً عبر رسائل إنستجرام",
 *   built: "ما قمت ببنائه في سطر واحد: مثلاً متجر إلكتروني كامل بدفع أونلاين وتتبع طلبات",
 *   results: [
 *     "الميزة 1 أو نتيجة حقيقية",
 *     "الميزة 2 أو نتيجة حقيقية"
 *   ],
 *   tags: ["Next.js", "Tailwind CSS", "React"]
 * }
 */
export const projects: Project[] = [
  {
    num: "01",
    title: "منصة أحمد مجلي التعليمية (Ahmed Megaly Platform)",
    category: "منصة تعليمية",
    image: "/images/mega.webp",
    demoLink: "https://ahmedmegaly.sck.guru/",
    githubLink: "",
    featured: true,
    problem:
      "المدرس كان يبيع كورساته عبر جروبات واتساب ويتابع يدوياً من دفع ومن لم يدفع، مع صعوبة تأمين الفيديوهات ومنع تسريبها.",
    built:
      "منصة تعليمية كاملة بتصميم عربي RTL متناسق، تتضمن حماية قوية للفيديوهات السحابية، نظام امتحانات تفاعلي، وتسجيل دخول آمن بحسابات Google.",
    results: [
      "حماية كاملة للمحتوى التعليمي من التحميل المباشر والمشاركة العشوائية",
      "أتمتة اشتراكات الطلاب وتسجيلهم دون الحاجة للمتابعة اليدوية عبر الشات",
      "[ADD REAL RESULTS HERE - أضف عدد الطلاب أو نسبة توفير وقت الإدارة هنا]",
    ],
    tags: ["Next.js", "React", "RTL Layout", "React Query", "Google Auth", "Protected Video"],
  },
  {
    num: "02",
    title: "متجر NextShop الإلكتروني (NextShop E-commerce)",
    category: "متجر إلكتروني",
    image: "/images/nextshop.webp",
    demoLink: "https://next-shop21.vercel.app/",
    githubLink: "https://github.com/petersalah1/nextShop",
    featured: true,
    problem:
      "البراندات الناشئة وأصحاب المتاجر يعتمدون على استقبال الطلبات عبر رسائل إنستجرام وDMs فقط، مما يتسبب في ضياع الزبائن وتأخر التأكيد.",
    built:
      "متجر إلكتروني متكامل وسريع يوفر تجربة شراء مؤتمتة: سلة تسوق حية، دفع إلكتروني آمن، مصادقة مستخدمين، ونظام لمتابعة وتتبع حالة كل طلب لحظياً.",
    results: [
      "تجربة شراء كاملة تعمل 24/7 دون الحاجة للرد اليدوي على كل استفسار",
      "تأكيد فوري للطلبات وبوابات دفع إلكترونية تقلل نسبة الإلغاء",
      "[ADD REAL RESULTS HERE - أضف سرعة تحميل المتجر أو نسبة التحويل هنا]",
    ],
    tags: ["Next.js", "React Query", "Tailwind CSS", "Axios", "Payment Flow", "Auth"],
  },
  {
    num: "03",
    title: "منصة نيفيرا للسياحة (Nivirra Tourism)",
    category: "موقع تعريفي وتجاري",
    image: "/images/nivirra.webp",
    demoLink: "https://petersalah1.github.io/Nivirra/index.html",
    githubLink: "",
    featured: true,
    problem:
      "صعوبة عرض البرامج السياحية والرحلات المتنوعة للعملاء دون الاضطرار لشرح التفاصيل والأسعار لكل عميل على حدة في مكالمات طويلة.",
    built:
      "موقع سياحي متجاوب وجذاب يعرض برامج الرحلات المنسقة، تقييمات وتجارب العملاء الحقيقيين، مع أداة تفاعلية تتيح للعميل بناء وحساب رحلته المخصصة.",
    results: [
      "أداة مخصصة لبناء وتفصيل الرحلات تسهل على العميل اختيار وجهته بنفسه",
      "تصميم سريع وواضح يرفع ثقة العميل قبل الحجز والتواصل",
      "[ADD REAL RESULTS HERE - أضف عدد زوار أو استفسارات الحجز هنا]",
    ],
    tags: ["HTML5", "Modern CSS", "JavaScript", "Custom Tour Builder", "Responsive UI"],
  },
];
