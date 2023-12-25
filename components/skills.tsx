"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 sm:mt-40"
    >
      <SectionHeading><span className="font-bold">Skills</span></SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 font-semibold">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      
    <section className="text-left sm:ml-5 sm:mt-20">
        and a little bit of photography...       
            <section className="sm:ml-55 sm:mt-15 sm:ml-12 sm:mt-3">    
                <img src="photopic1.jpg" alt="Kenny Picture" width = "350" height = "350" className = "inline-flex rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
                <img src="photopic3.jpg" alt="Kenny Picture" width = "350" height = "350" className = "inline-flex rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
                <img src="photopic4.jpg" alt="Kenny Picture" width = "350" height = "350" className = "inline-flex rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
                <img src="photopic5.jpg" alt="Kenny Picture" width = "350" height = "350" className = "inline-flex rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
                <img src="photopic6.jpg" alt="Kenny Picture" width = "350" height = "350" className = "inline-flex rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
                <img src="photopic7.jpg" alt="Kenny Picture" width = "350" height = "350" className = "inline-flex rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
            </section>
    </section>
      
    </section>
  );
}