import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { getPortfolioData } from "@/lib/get-portfolio";

export default async function Home() {
  const { profile, projects, experiences, skills } = await getPortfolioData();

  return (
    <main className="flex flex-col items-center px-4">
      <Intro profile={profile} cvUrl={profile?.cvDriveUrl} />
      <SectionDivider />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <About />
      <Contact />
    </main>
  );
}
