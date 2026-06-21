import React from 'react'
import ProjectCard from '../ui/ProjectCard';

export const projectCardData = [
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
function PurposeDriven() {
    return (
        <div className='bg-white' data-scroll data-scroll-speed="0.01">
            <div className='container'>
                <h2 className='text-5xl py-16'>
                    Purpose driven, <span>strategy-led presentations</span> <br className='hidden md:block'/>
                    that people care about.
                </h2>

                <div className="flex flex-col gap-5">
                    {projectCardData?.map((item, index) => <ProjectCard data={item} key={index} className={`${index > 0 && "mt-16"}`} />)}
                </div>
            </div>
        </div>
    )
}

export default PurposeDriven
