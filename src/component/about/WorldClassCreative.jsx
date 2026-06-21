import React from 'react'
import Ochi from '../home/Ochi'
import Insights from './Insights'
import ReadyToStart from '../ui/ReadyToStart'


function WorldClassCreative() {
    return (
        <div className='rounded-t-2xl bg-[#f1f1f1]' data-scroll data-scroll-speed = "0.01">
            <div className='border-b w-full border-b-[#ccc]'>
                <div className="container">
                    <h2 className='text-5xl'>
                        A world-class creative duo, backed <br className='hidden md:block'/> by a team without borders.
                    </h2>
                </div>
            </div>
            <div className="container">
                <div className='w-full grid grid-cols-1 gap-12 md:gap-4 md:grid-cols-2 py-16'>
                    <div>
                        <img src="/men.avif" alt="men-image" className='w-full h-full object-cover rounded-lg' />
                        <p className='mt-3'>Ihor Hulyahrodskyy, Founder and CEO</p>
                    </div>
                    <div>
                        <img src="/girl.avif" alt="girl-image" className='rounded-lg w-full h-full object-cover' />
                        <p className='mt-3'>Kseniia Palamarchuk, Art Director</p>
                    </div>
                </div>
                <div className='pt-16 pb-10'>
                    <h2 className='text-5xl '>
                        We’ve built long-lasting partnerships
                        with the most ambitious brands across the globe:
                    </h2>
                </div>
            </div>
            <Ochi />
            <Insights />
            <ReadyToStart />
        </div>
    )
}

export default WorldClassCreative
