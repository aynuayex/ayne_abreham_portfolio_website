"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-50 relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white/40 
       bg-white bg-opacity-80 shadow-2xl shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] 
       sm:w-[36rem] sm:rounded-full dark:bg-gray-950/75 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul
          className="flex w-[22rem] flex-wrap 
        items-center justify-center gap-y-1 text-[0.9rem] font-medium
         text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="relative h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3
                 hover:text-gray-950 transition dark:hover:text-gray-300
                ${activeSection === link.name && "text-gray-950 dark:text-gray-200"}`}
                // className={clsx(
                //   "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                //   {
                //     "text-gray-950": activeSection === link.name,
                //   }
                // )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="rounded-full bg-gray-200 absolute inset-0 -z-10
                    dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
