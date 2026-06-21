import React, { useState } from 'react';
import InsightCard from '../about/InsightCard';
import { title } from 'framer-motion/client';
const btnData = [
    "all",
    "Agency News",
    "News",
    "Pitch Deck",
    "Presentation Agency",
    "Presentation Template",
    "Public speaking",
    "Storytelling"
]
const cardData = [
    {
        img: "/soma.avif",
        type: "news",
        title: "Data center power crisis: Soma Energy raised $7M to fix it with AI"
    },
    {
        img: "/ochi_3-1.avif",
        type: "news",
        title: "Ochi.Design featured in Dribbble Select: Best Shots of the Year"
    },
    {
        img: "/card3.png",
        type: "Agency News",
        title: "Best Presentation Agencies 2025: top 5 studios defining business storytelling"
    },
    {
        img: '/SL_Website.png',
        type: "Agency News",
        title: "Salience Labs secures $30M to redefine AI infrastructure"
    },
    {
        img: '/front_exploration.png',
        type: "Pitch Deck",
        title: "Nala Earth secures €4M in Seed funding to transform nature tech"
    },
    {
        img: "/tj.png",
        type: "Presentation Agency",
        title: "Why hiring a presentation agency will boost your business"
    },
    {
        img: "/trawa_website.png",
        type: "Presentation Template",
        title: "Our client trawa raises €10M in seed funding"
    },
    {
        img: "/Frame1.png",
        type: "Storytelling",
        title: "The art of presenting: Tips on successful presentation and lessons learned"
    },
    {
        img: "/front-5.jpg",
        type: "Public speaking",
        title: "Developing company-wide presentation template for Premium Blend"
    }
]
function FilterButton({ btnText, setSelectedFilter , selectedFilter }) {
    const isActive = btnText === selectedFilter;
    return (
        <button
            onClick={() => setSelectedFilter(btnText)}
            className={`uppercase px-3 py-1 rounded-full text-[#212121]
             border border-[#212121] text-[14px] cursor-pointer ${isActive && "bg-[#212121] text-[#f1f1f1]"}`}
        >
            {btnText}
        </button>
    )
}

function LatestInsights() {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filteredCard = selectedFilter === "all" ? 
    cardData : 
    cardData.filter((card) => card.type.trim().toLowerCase() === selectedFilter.trim().toLowerCase())

    return (
        <div>
            <div className="container">
                <div className='flex flex-col gap-5 md:flex-row justify-between w-full'>
                    <p className='md:w-[50%]'>Latest insights:</p>
                    <div className='md:w-[50%] flex flex-wrap gap-2'>
                        {btnData.map((text , i) => <FilterButton key={i} btnText={text} selectedFilter = {selectedFilter} setSelectedFilter = {setSelectedFilter} />)}
                    </div>
                </div>

                <div
                    className='py-16 grid grid-cols-1 gap-5 
                md:grid-cols-3 md:gap-3 
                lg:grid-cols-4 lg:gap-4'
                >
                    {filteredCard.map((card, i) => <InsightCard key={i} data={card} />)}

                </div>
            </div>
        </div>
    )
}

export default LatestInsights
