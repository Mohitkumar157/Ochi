import React from 'react'

function HeroServices() {
    return (
        <div className=''>
            <div className='border-b-[0.5px] border-b-[#212121]'>
                <div className="container">
                    <div className="heading">
                        <h1
                            className='uppercase text-6xl md:text-7xl lg:text-[8rem] overflow-hidden  md:mb-10'>
                            Services
                        </h1>
                    </div>
                </div>
            </div>

            <div className='border-b-[0.5px] border-b-[#212121]'>
                <div className="container">
                    <h2 className='text-5xl md:mb-10 '>
                        Our work has helped clients
                        secure $400M+ in <br className='hidden md:block'/> funding, wow small and global stages,
                        and shape <br className='hidden md:block'/> how the world sees them.
                    </h2>
                </div>
            </div>

            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <div className='md:col-span-2'>
                        <p>We're best positioned for 3 types of clients:</p>
                    </div>

                    <div className='col-span-1'>
                        <u>Innovation & frontier-tech firms</u>
                        <p className='mt-4 mb-8'>
                            AI pioneers, space tech visionaries,
                            hardware disruptors — companies
                            building what’s never been built before.
                        </p>
                        <u>Established companies & enterprises</u>
                        <p className='mt-4 mb-8'>
                            Fortune 500 leaders, global universities, SaaS powerhouses, and iconic consumer brands ready for their next chapter.
                        </p>
                    </div>
                    <div className='col-span-1'>
                        <u>
                            Industry shifters & cultural catalysts
                        </u>
                        <p className='mt-4 mb-8'>
                            From boundary-pushing restaurants to game-changing
                            music festivals — brands rewriting the rules in
                            their field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroServices
