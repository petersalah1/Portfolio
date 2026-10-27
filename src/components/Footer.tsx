import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const links = [
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
            <span className="block text-xs text-neutral-400 font-semibold">
              Front-End Developer · React & Next.js
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm font-semibold text-neutral-400 text-center sm:text-left">
          © {new Date().getFullYear()} Peter Salah. Crafted with Next.js, TypeScript & Tailwind CSS.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {links.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center bg-[#18181b] border-2 border-neutral-700 text-neutral-300 shadow-[2px_2px_0px_0px_#6366f1] sm:shadow-[3px_3px_0px_0px_#6366f1] hover:border-white hover:text-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Icon size={17} />
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}
