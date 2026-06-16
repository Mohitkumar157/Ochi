import React from 'react'
import SecondaryBtn from './SecondaryBtn'

function OchiCard({card , index}) {
  return (
    <div className={`card ${index > 0 ? "bg-[#212121]" : "bg-[#004d43]"} h-95 rounded-xl flex justify-center items-center relative ${index === 0 && "lg:col-span-2 md:col-span-2"}`}>
      <img src={card.src} alt="logo" loading='lazy' className={`${index === 2 && "max-w-25 h-auto"}`}/>
      <SecondaryBtn 
       className = {`absolute bottom-8 left-8 text-[14px] py-0.5 px-3 rounded-full
         ${index === 0 
         ? "border border-[#cdea68] text-[#cdea68] bg-transparent" 
         : "text-[#f1f1f1] border border-[#F1F1F1] cursor-pointer"}`} 
         label = {card.btnText}
         />
    </div>
  )
}

export default OchiCard;