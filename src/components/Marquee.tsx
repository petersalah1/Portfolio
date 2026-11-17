"use client";

const highlights = [
  "منصات كورسات للمدرسين",
  "Next.js App Router",
  "متاجر إلكترونية للبراندات",
  "Arabic RTL Design",
  "بوابات دفع أونلاين & فودافون كاش",
  "Protected Video Streaming",
  "سلة تسوق وتتبع طلبات",
  "React & TypeScript",
  "تسليم في أسابيع",
  "Tailwind CSS",
  "سرعة فائقة وتجاوب 100% عالموبايل",
];

const doubled = [...highlights, ...highlights];

export function Marquee() {
  return (
    <div className="relative border-y-2 border-neutral-800 bg-[#121216] py-3.5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-neutral-300 hover:text-indigo-400 transition-colors">
              {item}
            </span>
            <span className="h-2 w-2 bg-indigo-500 border border-black shadow-[1px_1px_0px_0px_#ffffff]" />
          </div>
        ))}
      </div>
    </div>
  );
}
