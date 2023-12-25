import Intro from "@/components/intro";
import SectionDivider from "@/components/sectiondivider"
import About from "@/components/about"
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>;
}
