import React from 'react'

function OverLay() {
    return (
        <div className='container pointer-events-none'>
            <div className="relative flex justify-center items-center">
                <div className='rounded-t-xl absolute z-10 -top-12 left-0 w-full h-16 bg-[#b8d25e]'></div>

                <div className='rounded-t-xl absolute  left-1/2 -translate-x-1/2  -top-25 w-[90%] h-15 bg-[#bfda62]'></div>
            </div>
        </div>
    )
}

export default OverLay;
