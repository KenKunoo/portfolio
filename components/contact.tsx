import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <section id='contact' className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
            <SectionHeading> <span className="font-bold"> Contact Me </span> </SectionHeading>

            <form className="mt-10 flex flex-col">
                <input className = "h-14 rounded-lg borderBlack" type="email" />
                <textarea className = "h-52 my-3 rounded-lg borderBlack p-4"/>
                <button type="submit" className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-90 hover:scale-90 hover:bg-gray-950 active:scale-100">
                    Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-0"/>{""}
                </button>
            </form>
        </section>
    )
}