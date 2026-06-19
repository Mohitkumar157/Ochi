import React from 'react'

function InsightCard({data}) {
  return (
    <div className='cursor-pointer'>
      <div className='overflow-hidden rounded-md '>
        <img src={data.img} alt="insight-card-image" className='w-full object-cover'/>
      </div>
      <div className='card-content mt-5'>
        <h3>{data.title}</h3>
      </div>
    </div>
  )
}

export default InsightCard
