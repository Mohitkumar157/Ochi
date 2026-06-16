import React, { useRef } from 'react'
import Hero from './home/Hero'
import WeAreOchi from './home/WeAreOchi'
import About from './home/About'
import Play from './home/Play'
import Projects from './home/Projects'
import Ochi from './home/Ochi'
import ReadyToStart from './home/ReadyToStart'
import Footer from './ui/Footer'

function HomePage() {
 
  return (
    <div>
      <Hero />
      <WeAreOchi />
      <About />
      <Play bgImage = "true"/>
      <Projects />
      <Ochi />
      <ReadyToStart />
      <Footer />
    </div>
  )
}

export default HomePage
