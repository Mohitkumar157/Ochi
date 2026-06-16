import { ArrowUpRight } from 'lucide-react';


function PrimaryButton({ctaText}) {
  return (
    <button className='group h-13 flex items-center gap-6 py-2 pl-5 pr-2 rounded-4xl bg-[#212121] text-white cursor-pointer'>
        <span className='uppercase text-[14px]'>{ctaText}</span>
        <div className='w-10 h-10 rounded-full bg-inherit flex justify-center items-center'>
            <div className='group-hover:w-10 group-hover:h-10 group-hover:overflow-auto transition-all duration-300 ease-in-out flex justify-center items-center bg-white w-2 h-2 rounded-full overflow-hidden'>
            <ArrowUpRight className='h-0 w-0 text-[#212121] group-hover:w-4 group-hover:h-4 transition-all duration-300'/>
        </div>
        </div>
    </button>
  )
}

export default PrimaryButton
