import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peter Salah | Front-End Developer (React & Next.js)",
  description:
    "Peter Salah is a Front-End Developer building responsive, high-performance web applications with React, Next.js, TypeScript, and modern API integrations.",
  keywords: [
    "Peter Salah",
    "React Developer",
    "Next.js Developer",
    "Front-End Developer",
    "Tailwind CSS",
    "TypeScript",
    "React Query",
    "Axios",
  ],
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-[#f4f4f5] bg-neo-grid selection:bg-[#6366f1] selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
