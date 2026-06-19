import { div } from 'framer-motion/client'
import React, { useRef } from 'react'
import Play from '../home/Play'
import PrimaryButton from './PrimaryButton'

function ReadyToStart() {
    
    return (
       <div data-scroll data-scroll-speed = "-0.01" className='bg-[#cdea68] w-full h-screen py-20 relative'>
         <div className='container relative'>
            <h2 className='text-8xl leading-30 md:text-[164px] lg:text-[220px] text-[#212121] text-center font-[FounderGrotesk]! uppercase md:leading-40 flex flex-col justify-center items-center'>
                <span>Ready</span> 
                <span>to start </span>
                <span>the project?</span>
            </h2>

         <div className='absolute top-0 left-0 w-full'>
            <Play />
         </div>
        </div>
        <div className='flex justify-center items-center w-full absolute bottom-30'><PrimaryButton ctaText = "Start the project"/></div>
       </div>
    )
}

export default ReadyToStart
