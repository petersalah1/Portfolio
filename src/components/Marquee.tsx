"use client";

const skills = [
  "React.js",
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "TanStack React Query",
  "Axios & REST APIs",
  "Arabic RTL Layouts",
  "E-commerce & Checkout",
  "Context API & State",
  "Framer Motion",
  "Git & GitHub",
  "Performance & SEO",
];

const doubled = [...skills, ...skills];

export function Marquee() {
  return (
    <div className="relative border-y-2 border-neutral-800 bg-[#121216] py-3.5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 px-6">
            <span className="text-sm font-black uppercase tracking-wider text-neutral-300 hover:text-indigo-400 transition-colors">
              {skill}
            </span>
            <span className="h-2 w-2 bg-indigo-500 border border-black shadow-[1px_1px_0px_0px_#ffffff]" />
          </div>
        ))}
      </div>
    </div>
  );
}
