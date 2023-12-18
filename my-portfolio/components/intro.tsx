"use client";

import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";


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

        </section>
    );
}