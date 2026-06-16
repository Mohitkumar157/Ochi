import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function ProjectCard({ data, className }) {
    const containerRef = useRef();
    const imageRef1 = useRef();
    const imageRef2 = useRef();
    const imageWraperRef1 = useRef();
    const imageWraperRef2 = useRef();
    const tlRef = useRef();
    const tlRef2 = useRef();
    const tlRef3 = useRef();
    const tlRef4 = useRef();
    useGSAP(() => {
        tlRef.current = gsap.timeline({ paused: true })
        tlRef.current.from(".letter1", {
            y: "100px",
            duration: 0.5,
            opacity: 0,
            stagger: 0.02,
            yoyo: true,
            ease: "power4.out",
        })

        tlRef2.current = gsap.timeline({ paused: true });
        tlRef2.current.to(".letter1", {
            y: "100px",
            duration: 0.5,
            stagger: 0.02,
            yoyo: true,
            ease: "power4.out",
        });

        tlRef3.current = gsap.timeline({ paused: true });
        tlRef3.current.from(".letter2", {
            y: "100px",
            duration: 0.5,
            opacity: 0,
            stagger: 0.02,
            yoyo: true,
            ease: "power4.out",
        });
        tlRef4.current = gsap.timeline({ paused: true });
        tlRef4.current.to(".letter2", {
            y: "100px",
            duration: 0.5,
            stagger: 0.02,
            yoyo: true,
            ease: "power4.out",
        });


    }, { scope: containerRef })



    function handleMouseEnter(img, imageWraper) {
        gsap.to(img, {
            scale: "1.10",
            duration: .8,
            ease: "power1.out"
        });

        gsap.to(imageWraper, {
            scale: "0.95",
            duration: .8,
            ease: "power1.out"
        })
    };


    function handleMouseLeave(img, imageWraper) {
        gsap.to(img, {
            scale: 1,
            duration: .8,
            ease: "power1.out"
        });
        gsap.to(imageWraper, {
            scale: "1",
            duration: .8,
            ease: "power1.out"
        })
    };

    return (
        <div ref={containerRef} className={`grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-4 w-full h-full relative`}>
            <div

                onMouseEnter={() => {
                    tlRef.current.restart();
                    handleMouseEnter(imageRef1?.current, imageWraperRef1?.current);
                }}
                onMouseLeave={() => {
                    tlRef2.current.restart()
                    handleMouseLeave(imageRef1?.current, imageWraperRef1?.current)
                }}
                className={`${className}`}>
                <div className='mb-4'>
                    <span className='w-3 h-3 rounded-full bg-[#212121] inline-block mr-2'></span>
                    <span className='uppercase text-[#212121] tracking-tight'>{data.title1}</span>
                </div>
                <div ref={imageWraperRef1} className='rounded-xl overflow-hidden w-full h-full'>
                    <div className="card-img w-full h-full">
                        <img ref={imageRef1} src={data.src1} alt="Salience_Website_cover" loading='lazy' className='rounded-xl w-full h-full object-cover' />
                    </div>
                </div>

                <p className='hidden md:block pointer-events-none font-[FounderGrotesk] overflow-hidden text-9xl! text-[#cdea68]! uppercase absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/500 whitespace-nowrap'>
                    {data.title1.split("").map((letter, i) => <span key={i} className='letter1 inline-block'>{letter}</span>)}
                </p>
            </div>

            <div
                onMouseEnter={() => {
                    tlRef3.current.restart();
                    handleMouseEnter(imageRef2?.current, imageWraperRef2?.current);
                }}
                onMouseLeave={() => {
                    tlRef4.current.restart();
                    handleMouseLeave(imageRef2?.current, imageWraperRef2?.current)
                }}
                className={`${className} `}>
                <div className='mb-4'>
                    <span className='w-3 h-3 rounded-full bg-[#212121] inline-block mr-2'></span>
                    <span className='uppercase text-[#212121] tracking-tight'>{data.title2}</span>
                </div>
                <div ref={imageWraperRef2} className='rounded-xl overflow-hidden w-full h-full'>
                    <div className='card-img w-full h-full'>
                        <img ref={imageRef2} src={data.src2} alt="Med_Website" loading='lazy' className='rounded-xl w-full h-full object-cover' />
                    </div>
                </div>



                <p className='hidden md:block pointer-events-none font-[FounderGrotesk] overflow-hidden text-9xl! text-[#cdea68]! uppercase absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/500 whitespace-nowrap'>
                    {data.title2.split("").map((letter, i) => <span className='letter2 inline-block' key={i}>{letter}</span>)}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;
