import React from 'react'

const card = (props) => {
  return (
    <div className='lg:pl-0 lg:right-0 md:px-20 absolute top-[384px] 
    md:top-[430px] lg:top-[320px] text-center lg:text-left 
    lg:w-[40%] leading-4 '> 
        <div className='w-full'>
            <h1 className='mt-10 font-Bellefair text-white text-[80px] uppercase'>{props.item.name}</h1>
            <p className='px-[10%] md:px-[100px] lg:px-0 mt-10 pl-4 font-Barlow text-[#D0D6F9] font-thin'>{props.item.description}</p>
            <div className='w-[90%] bg-[#D0D6F9]/40 h-[0.5px] mx-auto lg:mx-0 lg:ml-0 mt-5 lg:mt-[10%] lg:pl-0'></div>
            <div className='flex flex-col md:flex-row lg:flex-row w-full lg:justify-between justify-evenly md:leading-6 lg:pl-0 lg:leading-6'>
                <div className=''>
                    <p className='mt-5 pl-4 lg:mt-[12%] lg:pl-0 uppercase font-Barlow text-[16px] md:text-[20px] tracking-[0.3rem] text-[#D0D6F9]'>AVG. DISTANCE</p>
                    <h4 className='mt-3 uppercase font-Bellefair text-[20px] md:text-[32px] text-white'>{props.item.distance}</h4>
                </div>
                <div className='lg:pl-20'>
                    <p className='mt-5 lg:mt-[12%] pl-4 lg:pl-0  uppercase font-Barlow text-[16px] md:text-[20px] tracking-[0.3rem] text-[#D0D6F9]'>Est. travel time</p>
                    <h4 className='mt-3 uppercase font-Bellefair text-[20px] md:text-[32px] text-white'>{props.item.travel}</h4>
                </div>
            </div>
        </div>
    </div>  
)}

export default card;