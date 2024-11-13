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
          I graduated with a Bachelor&apos;s Degree in{" "}
          <span className="font-medium">
            Electrical and Computer Engineering(Computer Engineering stream)
          </span>{" "}
          from{" "}
          <span className="italic">
            Addis Ababa Science and Technology University
            <span className="font-medium">(AASTU)</span> in Ethiopia in July, 2023
          </span>
          , where I achieved a{" "}
          <span className="font-medium">CGPA of 3.55 </span>and passed the{" "}
          <span className="italic">
            first Ethiopian national university exit exam with 65%
          </span>
          , Besides my formal education, I developed my Skills in{" "}
          <span className="font-medium">
            full-stack web and app development
          </span>
          .
        </p>
        <p>
          So, I&apos;m a self-taught developer who has honed my skills through
          platforms like{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer external"
            className="underline"
          >
            FreeCodeCamp
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer external"
            className="underline"
          >
            YouTube
          </a>
          .
        </p>
      </motion.section>
    </section>
  );
}
