import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import proj110 from "@/public/project110.png";
import carSafetyImg from "@/public/carsafety.png";
import gameImg from "@/public/game.png";
import websitePic from "@/public/websitepic.png";
import cryptoPic from "@/public/crypto.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
] as const;

export const projectsData = [
  {
    title: "Notetaking App",
    description:
      "Software project that allowed students and professor to communicate with intuitive feedback.",
    tags: ["HTML", "CSS", "Javascript", "API", "Agile"],
    imageUrl: proj110,
    projectLink: 'https://github.com/KenKunoo/Modern-Car-Safety-Features',
  },
  {
    title: "Modern Car Safety",
    description:
      "Data Science project with five other people, comparing modern vehicle safety to older vehicles.",
    tags: ["PANDAS", "Python", "Jupyter", "Seaborn"],
    imageUrl: carSafetyImg,
    projectLink: 'https://github.com/KenKunoo/Modern-Car-Safety-Features',
  },
  {
    title: "Cypto Screener App",
    description:
      "Track cryptocurrency through real-time data and organize trade with a simple interface",
    tags: ["React", "Tailwind", "Context API", "Javascript", "Fast API", "Restful"],
    imageUrl: cryptoPic,
    projectLink: 'https://github.com/KenKunoo/Modern-Car-Safety-Features',
  },
  {
    title: "War of Ages",
    description:
      "A video game recreation of my favorite childhood flash game using ROBLOX Studio.",
    tags: ["LUA", "ROBLOX Studio", "AI"],
    imageUrl: gameImg,
    projectLink: 'https://github.com/KenKunoo/Modern-Car-Safety-Features',
  },
  {
    title: "This Website",
    description:
      "A minimialistic website used to display information about myself.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Framer"],
    imageUrl: websitePic,
    projectLink: 'https://github.com/KenKunoo/Modern-Car-Safety-Features',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;