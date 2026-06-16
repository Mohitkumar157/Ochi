import React from 'react'
import OchiCard from '../ui/OchiCard'



const occhiCardsData = [
    {
        src : "/logo.svg",
        btnText : "©2019–2025"
    },
    {
        src : "/logo2.svg",
        btnText : "Rating 5.0 on Clutch"
    },
    {
        src : "/logo3.png",
        btnText : "Business Bootcamp Alumni"
    },
    
]

function Ochi() {
  return (
    <div className='my-9! sticky top-4 container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 py-16!'>
        {occhiCardsData.map((card , index) => <OchiCard key={index} card = {card} index = {index}/>)}
      
    </div>
  )
}

export default Ochi
