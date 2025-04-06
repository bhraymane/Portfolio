import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss,SiNextdotjs,SiMongodb } from "react-icons/si";
import { TbBrandTypescript,TbBrandRedux,TbBrandNodejs,TbBrandFramerMotion } from "react-icons/tb";

  
  export const skillsData = [
    {
      name: "HTML",
      icon:React.createElement(FaHtml5),
    },
    {
      name: "CSS",
      icon:React.createElement(FaCss3Alt),
    },
    {
      name: "JavaScript",
      icon:React.createElement(DiJavascript),
    },
    {
      name: "React",
      icon:React.createElement(RiReactjsLine),
    },
    {
      name: "Tailwind",
      icon:React.createElement(SiTailwindcss),
    },
    {
      name: "Typescript",
      icon:React.createElement(TbBrandTypescript),
    },
    {
      name: "Framer Motion",
      icon:React.createElement(TbBrandFramerMotion),
    },
    {
      name: "Python",
      icon:React.createElement(IoLogoPython),
    },
    {
      name: "Redux",
      icon:React.createElement(TbBrandRedux),
    },
    {
      name: "Node Js",
      icon:React.createElement(TbBrandNodejs),
    },
    {
      name: "Next Js",
      icon:React.createElement(SiNextdotjs),
    },
    {
      name: "MongoDB",
      icon:React.createElement(SiMongodb),
    }
  ] ;
  
  
  export const projectsData = [
    {
      title: "Agency WebSite",
      description:
        "A Modern Agency website with beautiful design . Responsive in all devices.",
      tags: ["Next","Tailwind","framer motion"],
      imageUrl:"/project-1.png",
      siteUrl:'https://ewebsolution.vercel.app/'
    },
    {
      title: "Booking Appointement",
      description:
        "A Modern Booking website with beautiful design. Responsive in all devices.",
      tags: ["Next","Strapi","Kinde","Tailwind"],
      imageUrl:"/Project-4.png",
      siteUrl:'https://doctor-appointment-next.vercel.app'
    },
    {
      title: "Nike WebSite",
      description:
        "A Modern bank website with beautiful design . Responsive in all devices..",
      tags: ["React", "Tailwind"],
      imageUrl: "/Project-2.png",
      siteUrl:'https://vikeshoes.netlify.app'
    },
    {
      title: "GooBank WebSite",
      description:
        "A Modern bank website with beautiful design . Responsive in all devices.",
      tags: ["React", "Tailwind"],
      imageUrl:"/Project-3.png",
      siteUrl:'https://gooobank.netlify.app'
    }
    
  
  
  ]  ;