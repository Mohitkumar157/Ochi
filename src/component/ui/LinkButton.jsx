import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function LinkButton({label}) {
  return (
     <button className='uppercase flex items-center gap-2 cursor-pointer group w-fit'>
            <p className='group-hover:text-white group-hover:bg-[#212121] transition-all duration-300 ease-in uppercase px-3 py-1 text-[12px] rounded-full border border-black'>
              {label}
            </p>
            <div className='hidden md:block'>
              <div className='relative border border-[#212121] rounded-full  w-7 h-7 p-1 flex justify-center items-center'>
                <ArrowUpRight className='text-[#212121] w-5 h-5 group-hover:text-white absolute z-10 transition-all duration-300' />
                <div className='w-0 h-0 bg-[#212121] absolute rounded-full group-hover:w-7 group-hover:h-7 transition-all duration-300 ease-in'></div>
              </div>
            </div>
          </button>
  )
}

export default LinkButton
