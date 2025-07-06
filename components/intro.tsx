"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const ref = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] 
        text-center sm:mb-0 scroll-mt-36"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://i.stack.imgur.com/QwtoI.jpg?s=256&g=1"
              alt="Ayne portrait"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-4xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I&apos;m Ayne.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 year</span> of experience.My{" "}
        <span className="italic">focus</span> is on{" "}
        <span className="underline">MERN</span> full stack,{" "}
        <span className="underline">Next.js</span> and{" "}
        <span className="underline">ReactNative(Expo)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center 
          justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white/80 px-7 py-3 flex items-center gap-2 rounded-full
              outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
              hover:text-white"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 group-active:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack
            dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80 dark:hover:text-white"
          href="/CV-Ayne-Abreham.pdf"
          download
        >
          Download CV
          <HiDownload
            className="group-hover:translate-y-1 transition
          "
          />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
            focus:scale-110 hover:scale-[1.15] hover:text-gray-950 
            active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60
            dark:hover:text-white dark:hover:bg-white/20"
          href="https://www.linkedin.com/in/ayne-abreham/"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <BsLinkedin />{" "}
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
            focus:scale-110 hover:scale-110 hover:text-gray-950 dark:hover:text-white dark:hover:bg-white/20
            active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/aynuayex"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <FaGithubSquare />{" "}
        </a>
      </motion.div>
    </section>
  );
}
