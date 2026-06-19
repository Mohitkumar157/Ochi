import React from 'react'
import HeroServices from '../component/service/HeroServices'
import OurCapabilities from '../component/service/OurCapabilities'
import OchiInNumbers from '../component/service/OchiInNumbers'
import WeAreOchi from '../component/home/WeAreOchi'
import WhatToExpect from '../component/service/WhatToExpect'
import ReadyToStart from '../component/ui/ReadyToStart'

function Services() {
  return (
    <div className='services'>
     <HeroServices />
     <OurCapabilities />
     <OchiInNumbers />
     <WeAreOchi movingText={"Key Advantages"}/>
     <WhatToExpect />
     <ReadyToStart />
    </div>
  )
}

export default Services
