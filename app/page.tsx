import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { getPortfolioData } from "@/lib/get-portfolio";

export default async function Home() {
  const { profile } = await getPortfolioData();

  return (
    <main className="flex flex-col items-center px-4">
      <Intro cvUrl={profile?.cvDriveUrl} />
      <SectionDivider />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
