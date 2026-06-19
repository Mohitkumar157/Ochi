import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
function AboutHero() {
  const imageRef = useRef();
  const headingRef = useRef();
  useGSAP(() => {
     gsap.from(headingRef.current, {
      x: 100,
      duration: 1,
      ease: "bounce.out"
    });

    gsap.fromTo(imageRef.current,
      { x: "-100%", opacity: 0.7, },
      {
        x: "0%",
        duration: 1,
        opacity: 1,
        ease: "bounce.out",
      }
    )
  })
  return (
    <div>
      <div className="container">
        <h1 className='text-[128px] uppercase leading-27 py-18'>
            We are
            <div className="flex items-end text-[8rem] gap-4">


            <div className="heading-image w-20! h-10.5! lg:w-34! lg:h-20! md:w-20! md:h-12! shrink-0 rounded-md overflow-hidden">
              <img
                ref={imageRef}
                src="/content-image.jpg"
                alt="content-image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>



            <div className=" flex items-center leading-[0.7] text-6xl md:text-7xl lg:text-[8rem] overflow-hidden">
              <span ref={headingRef} className='inline-block py-0.5'>OCHI design</span>
            </div>


          </div>
        </h1>
      </div>
    </div>
  )
}

export default AboutHero
