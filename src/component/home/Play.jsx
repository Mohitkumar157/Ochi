import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
function Play({bgImage , customClassess}) {
  const containerRef = useRef(null);
  const [rotateValue, setRotateValue] = useState(0);
  const eyeRef = useRef();
  const eyeRef2 = useRef();
  
  useEffect(() => {
    const rect = eyeRef.current.getBoundingClientRect();
    console.log(rect);
    const handleMouseMove = (e) =>{
      const xCenter = window.innerWidth / 2;
      const yCenter = window.innerHeight / 2;
      const mouseXposition = e.clientX
      const mouseYposition = e.clientY
      const deltaX = xCenter - mouseXposition;
      const deltaY = yCenter - mouseYposition;
      const angel = Math.floor(Math.atan2(deltaY, deltaX) * (180 / Math.PI));
      setRotateValue(angel)
      moveEye(eyeRef.current  , e)
      moveEye(eyeRef2.current  , e)
    }

  const moveEye = (eyeEl, e) => {
  const rect = eyeEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const dx = mouseX - centerX;
  const dy = mouseY - centerY;
  const moveX = Math.max(-5, Math.min(5, dx));
  const moveY = Math.max(-5, Math.min(5, dy));
  gsap.to(eyeEl, {
    x: moveX,
    y: moveY,
    duration: 0.7,
    ease: "power2.out",
  });
};

    
    const el  = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);

    return () =>{
      el?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [])

  return (
    <div data-scroll data-scroll-speed = "-0.5" ref={containerRef} className={`cursor-pointer relative play-section ${bgImage && "bg-[url(/Top-View.jpg)] bg-center w-full h-87.5! md:h-screen! object-cover"} overflow-hidden h-screen ${customClassess}`}>
      <div data-scroll data-scroll-speed = "-0.01" className="container flex justify-center items-center gap-7 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className=" relative box w-41 h-41 rounded-full bg-[#f4f4f4] flex justify-center items-center">
          <span className='absolute z-40 text-white'>PLAY</span>
          <div ref={eyeRef} className='w-25 h-25 rounded-full bg-[#212121] flex justify-center items-center'>
            <div 
             style={{ transform: `rotate(${rotateValue}deg)`}}
            className='relative flex items-center w-full h-8'>
              <div className='w-4 h-4 bg-white rounded-full'></div>
            </div>
          </div>
        </div>

        <div className=" relative box w-41 h-41 rounded-full bg-[#f4f4f4] flex justify-center items-center">
          <span className='absolute z-40 text-white'>PLAY</span>
          <div ref={eyeRef2} className='w-25 h-25 rounded-full bg-[#212121] flex justify-center items-center'>
            <div
              style={{ transform: `rotate(${rotateValue}deg)` }}
              className={`relative flex items-center w-full h-8`}>
              <div className='w-4 h-4 bg-white rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Play
