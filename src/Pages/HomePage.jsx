import React, { useRef } from 'react'

import Hero from '../component/home/Hero'

import WeAreOchi from '../component/home/WeAreOchi'
import About from '../component/home/About'
import Play from '../component/home/Play'
import Projects from '../component/home/Projects'
import Ochi from '../component/home/Ochi'
import ReadyToStart from '../component/ui/ReadyToStart'
import Footer from '../component/ui/Footer'

function HomePage() {

  return (
    <div>
      <Hero />
      <WeAreOchi movingText = "WE ARE OCHI"/>
      <About />
      <Play bgImage="true" />
      <Projects />
      <Ochi />
      <ReadyToStart />
      <Footer />
    </div>
  )
}

export default HomePage
