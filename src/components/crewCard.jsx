import React from 'react'

const crewCard = (props) => {
  return (
    <div className='lg:pl-0 lg:left-20 md:px-20 absolute top-[402px] 
    md:top-[170px] lg:top-[320px] text-center lg:text-left 
    lg:w-[60%]  leading-[8px]'> 
        <div className='w-full'>
            <h4 className='uppercase font-Bellefair text-[16px] md:text-[24px] lg:text-[32px] text-white/40'>{props.item.role}</h4>
            <h1 className='mt-[25px] lg:mt-[50px] font-Bellefair text-white text-[24px] md:text-[32px] lg:text-[56px] uppercase'>{props.item.name}</h1>
            <p className='px-[15%] text-[15px] md:px-[15%] lg:px-0 lg:pr-[50%] mt-[45px] md:mt-[20px] lg:mt-[37px] lg:text-[18px] font-Barlow text-[#D0D6F9] font-thin leading-6'>{props.item.bio}</p>
        </div>
    </div>  
)}

export default crewCard;