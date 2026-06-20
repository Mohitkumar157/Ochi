import React from 'react'
import InsightCard from '../about/InsightCard'

const cardData = [
    {
        img : "/ochi.design-4.png",
        title : "Gift guide for creatives"
    },
    {
        img : "/ochi.design-5.png",
        title : "Future looks green"
    },
    {
        img : "/ochi.design-6.png",
        title : "Trawa raises €24M"
    }
]
function LatestPublications() {
  return (
    <div>
      <div className="container">
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 pb-16'>
            <p className='text-[#f1f1f1]'>Latest Publications:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {cardData.map((card , i) => <InsightCard key={i} data={card} className={"text-[#f1f1f1]"}/>)}
            </div>
        </div>
      </div>
    </div>
  )
}

export default LatestPublications
