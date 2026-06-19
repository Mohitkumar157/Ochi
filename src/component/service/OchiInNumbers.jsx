import React from 'react'
import Card from '../ui/Card'

const cardData = [
    {
        title : "100+",
        text : "Clients from 17 Countries"
    },
    {
        title : "$400M+",
        text : "Million raised by our clients"
    },
     {
        title : "90%",
        text : "Of our clients come back"
    },
     {
        title : "94.5%",
        text : "Net Promoting Score"
    }
]


function OchiInNumbers() {
  return (
    <div>
      <div className="container">
        <div className="flex w-full flex-col md:flex-row">
            <div className="box w-full md:w-[50%]">
                <p className='mb-4'>Ochi in numbers:</p>
            </div>
            <div className="box w-full md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-4">
               {cardData.map((card , i) => <Card data = {card} key={i} className={"bg-[#f0f0f0] text-[#212121]"}/>)}
            </div>
        </div>
      </div>
    </div>
  )
}

export default OchiInNumbers
