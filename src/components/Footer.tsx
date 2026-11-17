import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Download } from "lucide-react";

const links = [
  { href: "https://wa.me/201204995735", icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://github.com/petersalah1", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/petersalah/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:petersalah104@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-neutral-800 bg-[#0d0d10] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-indigo-600 text-white text-xs font-black border-2 border-black shadow-[2px_2px_0px_0px_#ffffff]">
            PS
          </span>
          <div>
            <span className="text-sm sm:text-base font-black tracking-tight text-white">
              Peter Salah
            </span>
            <span className="block text-xs text-neutral-400 font-semibold" dir="rtl">
              تطوير منصات تعليمية ومتاجر إلكترونية · Web Developer
            </span>
          </div>
        </div>

        {/* Small Download CV Link (Moved to footer as requested) */}
        <div className="flex items-center gap-3">
          <a
            href="/Peter_Salah_Frontend.pdf"
            download
            className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-white bg-[#18181b] border border-neutral-700/80 px-3 py-1.5 shadow-[1.5px_1.5px_0px_0px_#6366f1] hover:border-indigo-400 transition-all"
            title="Download Peter Salah's CV as PDF"
          >
            <Download size={12} className="stroke-[2.5]" />
            <span>Download CV (PDF)</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-semibold text-neutral-400 text-center sm:text-left">
          © {new Date().getFullYear()} Peter Salah. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          {links.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center bg-[#18181b] border-2 border-neutral-700 text-neutral-300 shadow-[2px_2px_0px_0px_#6366f1] hover:border-white hover:text-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}
