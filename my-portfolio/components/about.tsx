"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  
    return (
      <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        
      >
        <SectionHeading> <span className="font-bold">About</span> </SectionHeading>
        <p className="mb-3">
            I was born and raised in Los Angeles in an environment of technological progress.
            Through exposure to video games and computers at an early age, I fiddled within the area of technology. 
            As a result, I am a dedicated software engineer committed to pushing the boundaries of what technology can achieve.
            Whether it's building robust backend systems, designing intuitive user interfaces, or creating video games, I am driven by the potential of technological advancement.
        </p>

        <p>
            Outside the digital world, I am on a journey in pursuing my best self. Whatever it may be surfing the waves, creating videos, or working on cars,
            I do what I can to spark my creativity. I am an entrepreneur, always seeking opportunities to connect my passion and hobbies
            into lucrative endeavors. Growing up in a low income family, I have perspective of the smaller details of life. Using the world of business and technology,
            I want to bridge the gap between the poor and the wealthy. 
        </p>
        <div className="delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400">
        <img src="picone.png" alt="Kenny Picture" width = "350" height = "350" className = "rounded-md object-cover border-[0.2rem] border-white shadow-x1"></img>
        </div>
      </motion.section>
    );
  }