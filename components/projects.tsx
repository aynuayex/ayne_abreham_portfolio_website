"use client";

import Project from "./project";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

interface ProjectsProps {
  projects?: readonly any[] | any[];
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useSectionInView("Projects");
  const list = projects && projects.length > 0 ? projects : projectsData;

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {list.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
