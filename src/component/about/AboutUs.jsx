import React, { useRef } from 'react'
import LinkButton from '../ui/LinkButton'
import Eyes from '../ui/Eyes'

function AboutUs() {
    const containerRef = useRef(null);
    return (
        <div ref={containerRef}>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div>About us:</div>
                    <div>
                        <p>
                            Ochi® is more than our name, it’s our philosophy.
                            In Ukrainian, ochi means “eyes.” To us, it represents
                            vision, clarity, and attention.
                        </p>
                        <p>
                            We believe the strongest ideas are not just told — they’re seen.
                            That’s why we create eye-opening presentations
                            that transform complex messages into stories people can
                            understand, remember, and act on.
                        </p>
                    </div>
                    <div className='flex md:justify-end justify-start items-start'>
                        <LinkButton label={"Our works"} />
                    </div>
                </div>

                <div className='py-28'><Eyes containerRef={containerRef} /></div>
                <h2 className='text-5xl mb-6'>We save businesses from ugly and <br /> ineffective presentations.</h2>
            </div>


            <div className='border-t-[#ccc] border-t-[0.1px]'>
               <div className="container">
                 <div className='flex w-full flex-col md:flex-row md:mb-20 mb-4'>
                    <p className='w-full md:md:w-[50%] md:text-[16px] text-xl mb-4'>We are Ochi design</p>

                <div className='w-full md:w-[50%]'>
                    <p className='mb-6'>
                    The world-class, tight-knit group of <br className='hidden md:block'/> creative experts from across the globe, <br className='hidden md:block'/>
                    who work together to create industry-shifting <br className='hidden md:block'/> presentations that
                    win people's  hearts and minds.
                </p>
                <p>
                    We’ve earned our reputation through <br className='hidden md:block'/> years of collaboration
                    with global clients <br className='hidden md:block'/> who know that being different
                    takes <br className='hidden md:block'/> courage and craft.
                </p>
                </div>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default AboutUs
