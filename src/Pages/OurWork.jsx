import React from 'react'
import WorkHero from '../component/our work/WorkHero'
import OverLay from '../component/our work/OverLay'
import PurposeDriven from '../component/our work/PurposeDriven'
import WeAreOchi from '../component/home/WeAreOchi'
import ReadyToStart from '../component/ui/ReadyToStart'

function OurWork() {
  return (
    <>
      <div data-scroll data-scroll-speed="-0.2" className='bg-[#cdea68]'>
        <WorkHero />
        <OverLay />
      </div>
      <PurposeDriven />
      <div className='pt-32 md:sticky md:-top-32'>
        <WeAreOchi  movingText={"Behance"}/>
      </div>
      <ReadyToStart />
    </>
  )
}

export default OurWork
