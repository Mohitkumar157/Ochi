import { div, span } from 'framer-motion/client'
import React from 'react'

function Card({data , className}) {
  return (
    <div className={`rounded-lg px-4 py-4 flex flex-col gap-12 justify-between items-start ${className}`}>
      <h6 className='text-5xl mb-12'>{data.title}</h6>
      <div className='flex justify-between items-center w-full'>
        <p>{data.text}</p>
        {data.buttonText ? <div className='flex flex-col h-5 overflow-hidden'>{data.buttonText.map((btnText , i) => <span key={i}>{btnText}</span>)}</div> : ""}
      </div>
    </div>
  )
}

export default Card
