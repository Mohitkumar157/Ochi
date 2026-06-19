import React from 'react'
import WeAreOchi from '../home/WeAreOchi'
import OchiInNumbers from './OchiInNumbers'
import Card from '../ui/Card'

const cardsData = [
  {
    title: "01",
    text: 'Story + Design',
    buttonText: ["READ", "HIDE"]
  },
  {
    title: "04",
    text: 'A proven revenue engine',
    buttonText: ["READ", "HIDE"]
  },
  {
    title: "02",
    text: 'Award-winning agency',
    buttonText: ["READ", "HIDE"]
  },
  {
    title: "05",
    text: 'We pick, you pick',
    buttonText: ["READ", "HIDE"]
  },
  {
    title: "03",
    text: 'Ahead of the Curve',
    buttonText: ["READ", "HIDE"]
  },
  {
    title: "06",
    text: '9.3 Happiness Score',
    buttonText: ["READ", "HIDE"]
  }
]
function WhatToExpect() {
  return (
    <div className='bg-[#004d43]' data-scroll data-scroll-speed = "-0.01">
      <div className="container pb-16!">
        <div className='flex flex-col lg:flex-row md:flex-col gap-4 w-full'>
          <div className='md:w-[50%]'>
            <p className='mb-4 text-[#FFFFFF]'>What to expect:</p>
          </div>
          <div className='md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-3'>
            {cardsData.map((card , i) => <Card data={card} key={i} index = {i} className = "bg-[#145b52] text-[#FFFFFF]"/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatToExpect
