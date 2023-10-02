"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About", 0.75);

  return (
    <section
      id="about"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center scroll-mt-28
    leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <p className="mb-3">
          Having recently graduated with a degree in{" "}
          <span className="font-medium">
            Electrical and Computer Engineering
          </span>{" "}
          from{" "}
          <span className="italic">
            Addis Ababa Science and Technology University in Ethiopia
          </span>
          , where I achieved a{" "}
          <span className="font-medium">CGPA of 3.55 </span>and passed the{" "}
          <span className="italic">
            first Ethiopian national university exit exam with 65%
          </span>
          , I decided to channel my passion for technology in to{" "}
          <span className="font-medium">full-stack web development</span>.
          Alongside my formal education,I embarked on a self-taught journey in
          web development through platforms like{" "}
          <span className="underline">FreeCodeCamp</span> and{" "}
          <span className="underline">YouTube</span>. I&apos;ve earned certificates
          by building projects on the FreeCodeCamp platform and honed my skills.
          My preferred tech stack includes{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          , with familiarity in TypeScript and Prisma. 
        </p>
        <p>I thrive on problem-solving and relish the satisfaction of finding elegant
          solutions.Continuously seeking opportunities to expand my knowledge,
          I am currently in search of a{" "}
          <span className="font-medium">full-time position</span>{" "}
          software developer role where I can apply and further develop my
          skills.

        </p>
      </motion.section>
    </section>
  );
}
