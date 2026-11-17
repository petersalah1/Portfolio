import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "بيتر صلاح | منصات تعليمية ومتاجر إلكترونية - Peter Salah",
  description:
    "مطور ويب متخصص في بناء منصات الكورسات للمدرسين والمتاجر الإلكترونية للبراندات بدفع أونلاين وتصميم عربي RTL في أسابيع مش شهور.",
  keywords: [
    "منصة كورسات",
    "تصميم متجر إلكتروني",
    "منصة تعليمية للمدرسين",
    "برمجة متجر إلكتروني مصر",
    "دفع أونلاين وفودافون كاش",
    "Peter Salah",
    "Next.js Developer Egypt",
    "Front-End Developer",
    "React Developer",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Peter Salah", url: "https://github.com/petersalah1" }],
  creator: "Peter Salah",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://petersalah.vercel.app/",
    title: "بيتر صلاح | منصات تعليمية ومتاجر إلكترونية تبيع لك وانت نايم",
    description:
      "منصات كورسات ومتاجر بدفع أونلاين وتصميم عربي RTL، بتتسلم في أسابيع مش شهور. احجز استشارتك الآن.",
    siteName: "Peter Salah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Salah | منصات تعليمية ومتاجر إلكترونية",
    description:
      "أبني منصات تعليمية ومتاجر إلكترونية بدفع أونلاين وتصميم عربي RTL للمدرسين والبراندات.",
  },
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
    <html lang="ar" dir="ltr" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-[#f4f4f5] bg-neo-grid selection:bg-[#6366f1] selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
