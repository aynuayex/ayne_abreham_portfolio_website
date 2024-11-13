import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import { PiRocketLaunchFill } from "react-icons/pi";
// import { CgWorkAlt } from "react-icons/cg";
import Book from "@/public/BookRentalApp.png";
import Pizza from "@/public/PizzaOrderingService.png";
import Videoconference from "@/public/videoconference.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Pizza ordering service website",
    url: "https://pizza-ordering-service-nine.vercel.app/",
    description:
      "Restuarants can create and manage pizza menus with Toppings and customers can order a specific pizza.Superadmin can add users with specific roles...",
    tags: ["React", "MUI", "Express", "Casl", "Material-react-table", "Zod"],
    imageUrl: Pizza,
  },
  {
    title: "Book rental website",
    url: "https://book-rental-app-frontend.vercel.app/",
    description:
      "Book owners can upload a book and manage their lists, monitor their income.Admins can activate/deactivate users registered and books uploaded.",
    tags: ["React", "MUI", "Prisma", "JWT", "Express", "Recharts"],
    imageUrl: Book,
  },
  {
    title: "Video Conference website",
    url: "https://react-conference-peerjs.netlify.app/",
    description:
      "This is like a Zoom clone were two or more users chat with video.Have a Room chat, screen sharing and other basic functionalities.No SDK used.",
    tags: ["React", "Typescript", "Peer.js", "Socket.io", "TailwindCss"],
    imageUrl: Videoconference,
  },
] as const;

export const skillsData = [
  // "HTML",
  // "CSS",
  "TailwindCSS",
  "DaisyUI",
  "ShadcnUI",
  "MaterialUI",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React",
  "Tanstack table",
  "Material-react-table",
  "ReactNative",
  "React Query",
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
  "Microservices architecture",
  "Docker",
  "CI/CD pipeline",
  "Git/Github",
] as const;

export const experiencesData = [
  {
    title: "Certified web developer",
    location: "FreeCodeCamp,online",
    description:
      "I studied and learned on the platform,work on difficult projects and get certified as a MERN full stack developer.",
    icon: React.createElement(FaUserGraduate),
    date: "January-November 2022",
  },
  {
    title: "Internship as MERN stack Developer",
    location: "Addis Ababa Science and Technology University,Ethiopia",
    description:
      "I started working as a MERN stack Developer at AASTU(my university) by building micro-frontend projects to their website.",
    icon: React.createElement(MdModelTraining),
    date: "November 2022-February 2023",
  },
  {
    title: "Open for job",
    location: "Addis Ababa, Ethiopia",
    description:
      "Advancing my skills by working on projects and learning new techs.My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.Open to full-time opportunities.",
    icon: React.createElement(FaHandshake),
    date: "July-February 2023",
  },
  {
    title: "Intermediate Frontend Developer(React)",
    location: "Addis Ababa, Ethiopia",
    description: React.createElement(
      'span',
      null,
      'I am currently working as a Frontend developer (React) at ',
      React.createElement(
        'a',
        { 
          href: "https://www.linkedin.com/company/alem-expect-solution/mycompany/",
          className: "hover:underline font-semibold",
          target: "_blank", 
          rel: "noopener noreferrer external" // security best practice when using target="_blank" 
        },
        'Alem Expect Solutions'
      ),
      ' on MedAxs hospital management system.'
    ),
    // I'm open to part-time, remote job opportunities.",
    icon: React.createElement(PiRocketLaunchFill),
    date: "February 2023 - present",
  },
] as const;
