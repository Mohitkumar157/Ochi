import React from 'react'
import { motion } from 'framer-motion'
function WeAreOchi() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-0.01" className='bg-[#004d43] text-[#ffffff] py-16 rounded-tl-2xl rounded-tr-2xl'>

      <div className='border-t-[.1px] border-b-[.1px] border-[#3a7670] h-fit leading-[.6] flex items-center overflow-hidden'>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className='font-[FounderGrotesk]! pb-6 md:pb-9 pl-6 text-[11.5rem] md:text-[20rem] text-white! whitespace-nowrap'>
          WE ARE OCHI
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
          }}
          className='font-[FounderGrotesk]! pb-6 md:pb-9 pl-6  text-[11.5rem] md:text-[20rem] text-white! whitespace-nowrap'>
          WE ARE OCHI
        </motion.h2>

        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
          }}
          className='font-[FounderGrotesk]! pb-6 md:pb-9 pl-6 text-[11.5rem] md:text-[20rem] font-bold! text-white! whitespace-nowrap'>
          WE ARE OCHI
        </motion.h2>
      </div>

    </div>
  )
}

export default WeAreOchi
