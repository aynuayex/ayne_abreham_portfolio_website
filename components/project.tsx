"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = {
  title: string;
  url?: string | null;
  githubUrl?: string | null;
  description: string;
  tags: readonly string[] | string[];
  imageUrl?: any;
};

export default function Project({
  title,
  url: websiteLink,
  githubUrl,
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

  const imageSrc = imageUrl || "/PizzaOrderingService.png";
  const isRemoteImage = typeof imageSrc === "string" && imageSrc.startsWith("http");

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
        <div
          className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10
              sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <div className="flex items-center justify-between gap-3">
            {websiteLink ? (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer external"
                className="text-2xl font-semibold hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
              >
                {title}
              </a>
            ) : (
              <h3 className="text-2xl font-semibold">{title}</h3>
            )}

            <div className="flex items-center gap-2 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer external"
                  title="View GitHub repository"
                  className="text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white p-1 rounded-full hover:scale-115 active:scale-105 transition"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              {websiteLink && (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer external"
                  title="Visit live website"
                  className="text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white p-1 rounded-full hover:scale-115 active:scale-105 transition"
                >
                  <FiExternalLink className="text-lg" />
                </a>
              )}
            </div>
          </div>

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

        {websiteLink ? (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer external"
            title={`Visit ${title}`}
            className="cursor-pointer"
          >
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={300}
              quality={95}
              unoptimized={isRemoteImage}
              className="absolute hidden sm:block top-8 -right-40
                  w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
                  group-even:-left-40 transition group-hover:scale-105
                  group-hover:-translate-x-3 
                  group-hover:translate-y-3 
                  group-hover:-rotate-2
                  
                  group-even:group-hover:translate-x-3 
                  group-even:group-hover:translate-y-3 
                  group-even:group-hover:rotate-2"
            />
          </a>
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={300}
            quality={95}
            unoptimized={isRemoteImage}
            className="absolute hidden sm:block top-8 -right-40
                w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
                group-even:-left-40 transition group-hover:scale-105
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2
                
                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2"
          />
        )}
      </section>
    </motion.div>
  );
}
