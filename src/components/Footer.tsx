import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#020617] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-neutral-500 dark:text-neutral-400 text-sm">
          © {new Date().getFullYear()} Peter Salah. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link
            href="#"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="#"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:#"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
