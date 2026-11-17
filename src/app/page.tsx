import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { ServicesProcess } from "@/components/ServicesProcess";
import { Testimonials } from "@/components/Testimonials";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Marquee />
      <Projects />
      <ServicesProcess />
      <Testimonials />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
