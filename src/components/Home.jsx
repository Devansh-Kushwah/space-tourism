import React from 'react';
import Desktopbg from '../assets/home/background-home-desktop.jpg';
import Tabletbg from '../assets/home/background-home-tablet.jpg';
import Mobilebg from '../assets/home/background-home-mobile.jpg';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div className='bg-cover w-[100vw] h-[100vh] overflow-hidden static'>
            <img id="mobile"className="w-full h-full lg:hidden md:hidden" src={Mobilebg} alt="" />
            <img id="tablet"className="w-full h-[100vh]  hidden lg:hidden  md:block" src={Tabletbg} alt="" />
            <img id="desktop"className="w-full h-[100vh] hidden md:hidden lg:block" src={Desktopbg} alt="" /> 

            
            <div className='absolute top-0 lg:top-10: my-[150px] md:my-[150px] lg:my-[200px] text-center lg:text-left w-full'>
                <div className=' lg:flex lg:flex-row lg:justify-between lg:align-middle '>
                    <div className='lg:w-1/2 px-10 md:px-50' >
                        <h3 className='pl-4 uppercase font-Barlow text-[16px] md:text-[20px] tracking-[0.3rem] text-[#D0D6F9]'>So, you want to travel to</h3>
                        <h1 className='font-Bellefair text-white text-[80px] md:text-[150px] '>SPACE</h1> 
                        <p className='pl-4 font-Barlow text-[#D0D6F9] font-thin'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className='md:mt-10 mt-20 pr-10'>
                        <button className='uppercase font-Bellefair text-[20px] md:text-[32px] w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[274px] lg:h-[274px] bg-white rounded-full text-black'>Explore</button>
                    </div>
                </div>
            </div>
        <Outlet/>
        </div>
    );
};

export default Home;
