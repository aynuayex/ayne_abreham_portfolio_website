"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { MdWorkspacePremium } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

interface ExperienceProps {
  experiences?: readonly any[] | any[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const ref = useSectionInView("Experience");
  const { theme } = useTheme();

  const items = experiences && experiences.length > 0 ? experiences : experiencesData;

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {items.map((item, index) => {
          const displayDate = item.dateRange || item.date;
          const displayIcon = item.icon || (
            index === items.length - 1
              ? React.createElement(FaUserGraduate)
              : React.createElement(MdWorkspacePremium)
          );

          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                  boxShadow: "none",
                  visibility: "visible",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255,255,255,0.5)",
                }}
                date={displayDate}
                icon={displayIcon}
                iconStyle={{
                  visibility: "visible",
                  background:
                    theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!font-normal !mt-0 text-gray-600 dark:text-white/60">{item.location}</p>
                {item.companyName ? (
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer external"
                        className="ml-1 hover:underline font-semibold text-blue-600 dark:text-blue-400"
                      >
                        @{item.companyName}
                      </a>
                    ) : (
                      <span className="ml-1 font-semibold">@{item.companyName}</span>
                    )}
                  </p>
                ) : typeof item.description === "object" && item.description !== null ? (
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description.textBefore}
                    <a
                      href={item.description.company.url}
                      className="hover:underline hover:text-lg font-semibold"
                      target="_blank"
                      rel="noopener noreferrer external"
                    >
                      {item.description.company.name}
                    </a>
                    {item.description.textAfter}
                  </p>
                ) : (
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                )}
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
