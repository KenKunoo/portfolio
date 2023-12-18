"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
              <div className="relative">
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "tween",
                    duration: 1,
                }}>
                    <img src="pfp.png" alt="Kenny Picture" width = "255" height = "255" className = "h-42 w-42 rounded-full object-cover border-[0.2rem] border-white shadow-x1"></img>
                </motion.div>
              </div>
            </div>
        
        <motion.h1
            className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "tween",
                duration: 1,
            }}
            >
            Hello, my name is <span className="font-bold">Kenny</span>. I'm a{" "}
            <span className="font-bold">full-stack engineer</span> and{" "}
            <span className="font-bold">video game developer.</span>{" "}
            I graduated from <span className="font-bold">UC San Diego </span> (UCSD){" "}
            with a B.S. in <span className="font-bold">Mathematics</span> and {" "}
            <span className="font-bold">Computer Science</span>.
            Through coding, I am able to bring my vision into the real word.
        </motion.h1>
        
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
        }}
        >
        <div>
        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-90 hover:scale-90 hover:bg-gray-950 active:scale-65 transition"
          href="/CV.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        </div>
        </motion.div>

        <motion.div
        className="py-3"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
              stiffness: 82,
              delay: 0.8,
              duration: 0.7,
        }}
        >
        <div>    
        <a
          className="bg-white p-4 text-gray-800 hover:text-gray-950 items-end inline-flex text-[1.8rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/dkkenny/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-800 items-end inline-flex text-[2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/KenKunoo"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-800 items-end inline-flex text-[2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/kennyy.dk/?hl=en"
          target="_blank"
        >
          <BsInstagram />
        </a>
        </div>
        </motion.div>
        
        </section>
    );
}