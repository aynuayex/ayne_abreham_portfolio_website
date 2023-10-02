"use client"

import Project from "./project";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const ref = useSectionInView("Projects")
  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28" >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}


