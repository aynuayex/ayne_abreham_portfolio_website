"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  url: websiteLink,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 group"
    >
      <section
        className="relative bg-gray-100 max-w-[42rem] 
          border border-black/5 rounded-xl overflow-hidden sm:pr-8 sm:h-[20rem]
          sm:group-even:pl-10 hover:bg-gray-200 transition dark:bg-white/10 
        dark:hover:bg-white/20 dark:text-white"
      >
        <a href={websiteLink} target="_blank" rel="noopener noreferrer external">
          <div
            className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10
                sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
          >
            <h3 className="text-2xl font-semibold underline sm:no-underline sm:group-hover:underline">
                {title}
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] 
                    uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            className="absolute hidden sm:block top-8 -right-40
                w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
                group-even:-left-40 transition group-hover:scale-105
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2
                
                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2
                "
          />
        </a>
      </section>
    </motion.div>
  );
}
