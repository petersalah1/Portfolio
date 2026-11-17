"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "201204995735";
  const defaultMessage =
    "السلام عليكم يا بيتر، شفت شغلك في البرتفوليو وحابب استفسر عن تفاصيل عمل منصة تعليمية / متجر إلكتروني.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معي مباشرة على واتساب"
        className="relative flex items-center gap-2.5 bg-[#25D366] text-black font-black text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 border-2 border-black shadow-[3px_3px_0px_0px_#ffffff] sm:shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all duration-150 cursor-pointer text-decoration-none select-none"
      >
        <span className="relative flex items-center justify-center">
          <FaWhatsapp className="text-xl sm:text-2xl text-black shrink-0" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
          </span>
        </span>
        <span className="font-extrabold tracking-wide hidden sm:inline" dir="rtl">
          كلمني واتساب
        </span>
      </a>
    </aside>
  );
}
