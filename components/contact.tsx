"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {sendEmail} from "@/actions/sendEmail"

export default function Contact() {
    const { ref} = useSectionInView("Contact")

    return (
        <motion.section id='contact' ref = {ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration:1,
            }}>
            <SectionHeading> <span className="font-bold"> Contact Me </span> </SectionHeading>

            <form className="mt-10 flex flex-col"
                    action={async(formData : FormData) => {
                        "use server";
                        console.log(formData);
                        await sendEmail(formData);
                    }}>
                <input className = "h-12 rounded-lg borderBlack p-4" type="email" name="senderEmail" required maxLength = {100} placeholder = "Your email"/>
                <textarea className = "h-52 my-3 rounded-lg borderBlack p-4" name = "nessage" required maxLength = {500} placeholder = "Your message"/>
                <button type="submit" className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-90 hover:scale-90 hover:bg-gray-950 active:scale-100">
                    Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-0"/>{""}
                </button>
            </form>
        </motion.section>
    )
}