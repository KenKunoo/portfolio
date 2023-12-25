import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <section id='contact' className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
            <SectionHeading> <span className="font-bold"> Contact Me </span> </SectionHeading>

            <form className="mt-10">
                <input className = "h-14 rounded-lg border" type="email" />
                <textarea className = "h-52 my-3 rounded-lg borderBlack p-4"/>
                <button type="submit">
                    Submit <FaPaperPlane />{""}
                </button>
            </form>
        </section>
    )
}