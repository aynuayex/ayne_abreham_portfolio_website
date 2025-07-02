"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40
    w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 text-center -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:aynuman19@gmail.com">
          aynuman19@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col mt-10 dark:text-black" ref={formRef} action={async(formData) => {
        const { data,error } = await sendEmail(formData)
        if(error) {
          console.log(error)
          return toast.error(error)
        }
        toast.success("Email sent successfully!");
          formRef.current?.reset();
      }}>
        <input
          type="email" name="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/80
          dark:focus:bg-white transition-all dark:outline-none"
          placeholder="Your email"
          required maxLength={500}
        />

        <textarea name="message"
          className="h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white/80
          dark:focus:bg-white transition-all dark:outline-none"
          placeholder="Your message" required maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
