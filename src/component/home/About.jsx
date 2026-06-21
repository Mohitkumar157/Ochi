import React, { useRef, useState } from 'react'
import PrimaryButton from '../ui/PrimaryButton'

function About() {
    const [animate, setAnimate] = useState(false);
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed = "-0.09" className='bg-[#cdea68] relative -top-2.5 md:top-0 z-10 rounded-xl pb-9'>
            <div className='border-b-[0.1px] border-[#99ad53]'>
                <div className="container">
                    <p className='whatWeDo text-3xl md:text-5xl lg:text-6xl text-[#212121] mb-10 pt-10 md:mb-16 md:pt-16'>
                        We craft category-defining presentations,
                        brand identities, and digital experiences that <span className='border-b'>drive funding,</span>
                        <span className='border-b'>sales,</span> and <span className='border-b'>market leadership.</span>
                    </p>
                </div>
            </div>
            <div className="container grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                    <h2 className='text-5xl font-[neueMontreal] mb-5'>How we can help:</h2>
                    <div
                        onMouseEnter={() => setAnimate(true)}
                        onMouseLeave={() => setAnimate(false)}
                        className='w-fit'>
                        <PrimaryButton ctaText="read more" />
                    </div>
                </div>
                <div className={` overflow-hidden rounded-xl transition-all duration-1500 ease-in-out ${animate && "scale-99"}`}>
                    <img src="/Homepage-Photo.jpg" alt="about-image" className={`transition-all duration-1500 ease-in-out w-full h-full object-cover rounded-xl ${animate && "scale-110"}`} />
                </div>
            </div>
        </div>
    )
}

export default About
