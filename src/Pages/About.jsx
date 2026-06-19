import React from 'react'
import AboutHero from '../component/about/AboutHero'
import AboutUs from '../component/about/AboutUs'
import TeamImage from '../component/about/TeamImage'
import WeAreOchi from '../component/home/WeAreOchi'
import StackedCards from '../component/about/StackedCard'
import WorldClassCreative from '../component/about/WorldClassCreative'
function About() {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <TeamImage />

      <div className='sticky -top-70' data-scroll data-scroll-speed = "-0.01">
        <WeAreOchi movingText={'our commitments'} />
      <StackedCards />
      </div>

      <WorldClassCreative />
     
    </div>
  )
}

export default About
