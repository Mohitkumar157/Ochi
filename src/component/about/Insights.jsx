import React from 'react'
import InsightCard from './InsightCard'
const insightCardData = [
    {
        img:"/insight-1.png",
        title : "Salience Labs secures $30M to redefine AI infrastructure"
    },
     {
        img:"/insight-2.png",
        title : "Our client trawa raises €10M in seed funding"
    },
     {
        img:"/insight-3.png",
        title : "Nala Earth secures €4M in Seed funding to transform nature tech"
    }
]
function Insights() {
  return (
    <div className='bg-[#f1f1f1] md:sticky md:top-0' data-scroll  data-scroll-speed = "0.01">
      <div className="container">
        <h2 className='text-5xl'>Insights</h2>
      </div>
      <div className="container">
        <div className='border-t border-t-[#ccc] flex flex-col gap-4 md:flex-row w-full'>
        <div className='w-full md:w-[50%]'>
            <p>Latest publications:</p>
        </div>

        <div className='pt-2 pb-16 w-full md:w-[50%] grid grid-cols-1 gap-5 md:grid-col-2 lg:grid-cols-3  md:gap-4 lg:gap-3'>
            {insightCardData.map((caraData) => <InsightCard data = {caraData}/>)}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Insights
