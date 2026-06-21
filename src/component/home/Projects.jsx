import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import { title } from 'framer-motion/client';
import PrimaryButton from '../ui/PrimaryButton';

const projectCardData = [
  {
    src1: "/onboard.jpg",
    title1: "Softstart",
    src2: "/Salience_Website_cover.png",
    title2: "Salience Labs",
  },
  {
    src1: "/Fyde_Front.png",
    title1: "Fyde",
    src2: "/Med_Website.png",
    title2: "Medallia Experience",
  },
  {
    src1: "/ATG_Website.png",
    title1: "All Things Go",
     src2: "/coin.png",
    title2: "Vise",
  },
  {
    src1: "/Soma_Website.png",
    title1: "Soma Energy",
     src2: "/Frame.png",
    title2: "AH2 & Matt Horn",
  },
 
];
function Projects() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-0.1" className='feature-projects py-16  bg-[#f1f1f1]'>
      <div className="heading border-b-[#ccc] border-b-[.1px]">
       <div className="container">
         <h2 className='text-5xl mb-10'>
            Featured projects
        </h2>
       </div>
      </div>

      <div className="container flex flex-col gap-5">
        {projectCardData?.map((item , index) => <ProjectCard data = {item} key={index} className = {`${index > 0 && "mt-16"}`}/>)}
      </div>
      <div className='flex justify-center items-center p-4 mt-20 md:mt-35'>
        <PrimaryButton  ctaText = "View all case studies"/>
      </div>
    </div>
  )
}

export default Projects
