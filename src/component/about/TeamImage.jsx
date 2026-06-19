import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function TeamImage() {
    const imgRef = useRef();
    useGSAP(() => {
        gsap.fromTo(imgRef.current,
            {height : "600px"},
            {
                height : '780px',
                duration : .5,
                ease : "none",
                scrollTrigger : {
                    trigger : imgRef.current,
                    scroller : "body",
                    scrub : true,
                    start : "top 80%",
                    end : "top -20%",
                }
            }
        )
    }, [])
    return (
        <div className='container' data-scroll data-scroll-section data-scroll-speed = "0.1">
            <div ref={imgRef} className='h-screen overflow-hidden rounded-2xl'>
                <img src="/team.jpg" alt="team-img" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default TeamImage
