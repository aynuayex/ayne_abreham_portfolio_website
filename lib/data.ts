import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaBook } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
import reactCalculator from "@/public/ReactCalculator.png";
import drumMachine from "@/public/DrumMachine.png";
import aastu from "@/public/Aastu.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "AASTU official website",
    description:
      "I worked on this project for about 3 months to implement best UI/UX features by using additional third party libraries.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express"],
    imageUrl: aastu,
  },
  {
    title: "Drum machine",
    description:
      "This is relatively simple project but helps to deepen my knowledge and make the visiters engaging.This is similar to what DJ's use.",
    tags: ["HTML", "CSS", "Javascript", "React" ],
    imageUrl: drumMachine,
  },
  {
    title: "React Calculator",
    description:
      "This is an awesome project that has helped me to sink my knowledge on javascript and has almost the same functionality as the ordinary calculator with additional features.",
      tags: ["HTML", "CSS", "Javascript", "React" ],
    imageUrl: reactCalculator,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux/toolkit",
  "Next.js",
  "Node.js",
  "Express",
  "GraphQL",
  "MongoDB",
  "Mysql",
  "PostgreSQL",
  "Prisma",
  "Python",
  "Git/Github",
] as const;

export const experiencesData = [
    {
      title: "Certified web developer",
      location: "FreeCodeCamp,online",
      description:
        "I studied and learned on the platform,work on difficult projects and get certified as a MERN full stack developer.",
      icon: React.createElement(LuGraduationCap),
      date: "January-November 2022",
    },
    {
      title: "Internship as MERN stack Developer",
      location: "Addis Ababa Science and Technology University,Ethiopia",
      description:
        "I started working as a MERN stack Developer at AASTU(my university) by building it's official website with many features.",
      icon: React.createElement(FaBriefcase),
      date: "November 2022-February 2023",
    },
    {
      title: "Open for job",
      location: "5kilo, Addis Ababa",
      description:
        "I'm now advancing my skills by working on projects and learning new techs.My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaHandshake),
      date: "2023 - present",
    },
  ] as const;