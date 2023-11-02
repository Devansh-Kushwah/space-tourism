import React from "react";
import Desktopbg from '../assets/technology/background-technology-desktop.jpg';
import Tabletbg from '../assets/technology/background-technology-tablet.jpg';
import Mobilebg from '../assets/technology/background-technology-mobile.jpg';
import tech11 from '../assets/technology/image-launch-vehicle-landscape.jpg'
import tech12 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import tech21 from '../assets/technology/image-spaceport-landscape.jpg'
import tech22 from '../assets/technology/image-spaceport-portrait.jpg'
import tech31 from '../assets/technology/image-space-capsule-landscape.jpg'
import tech32 from '../assets/technology/image-space-capsule-portrait.jpg'
import {Outlet} from 'react-router-dom';
import TechCard from './techCard.jsx'
import { useState } from "react";
import Data from '../data.json'

const technology = () => {
    let [idx, setidx] = useState(0);
    function settingidx(i){
        return function(){
            setidx(i);
        }
    }
    const imgsLand = [tech11, tech21, tech31];
    const imgsPotrait = [tech12, tech22, tech32];

    const crewData = Data.technology.map(item => {
        return(
            <TechCard
                key={item.name}
                item = {item}
            />
        );
    });
    return (
        <div className='bg-cover w-[100vw] h-[100vh] overflow-hidden static lg:text-left '>
            <img id="mobile"className="w-full h-[100vh] lg:hidden md:hidden" src={Mobilebg} alt="" />
            <img id="tablet"className="w-full h-[100vh]  hidden lg:hidden  md:block" src={Tabletbg} alt="" />
            <img id="desktop"className="w-full h-[100vh] hidden md:hidden lg:block" src={Desktopbg} alt="" />
            <p className='absolute  top-[20px] w-full 
            text-center md:text-left md:mt-20 lg:mt-40 
            mt-10 pl-4 lg:pl-20 uppercase font-Barlow text-[16px] 
            md:text-[20px] tracking-[0.3rem] text-[#D0D6F9]'>03 SPACE LAUNCH 101</p>
  
              <div className="absolute right-0 overflow-hidden w-full lg:w-auto top-[120px] md:top-[140px] lg:top-[200px]  border-b-[0.5px] border-white/10 ">
                  <img className="lg:hidden w-full md:w-full md:h-[320px] lg:w-[380px] lg:mx-[65%] mx-auto" src={imgsLand[idx]} alt="" />
                  <img className="lg:block z-50 hidden w-full lg:w-[450px] overflow-hidden " src={imgsPotrait[idx]} alt="" />
              </div>

            <div>
              <nav className="z-40 absolute top-[430px] md:top-[470px] lg:top-auto lg:bottom-20 text-white w-full">
                  <div className={`flex flex-row w-[200px]
                      justify-evenly mx-auto lg:mx-[60px]`}>
                      <button onClick={settingidx(0)} className='w-10 py-2 border-yellow-50 border-[0.5px] rounded-full hover:bg-white active:bg-white hover:text-black'>1</button>
                      <button onClick={settingidx(1)} className='w-10 py-2 border-yellow-50 border-[0.5px] rounded-full hover:bg-white active:bg-white hover:text-black'>2</button>
                      <button onClick={settingidx(2)} className='w-10 py-2 border-yellow-50 border-[0.5px] rounded-full hover:bg-white active:bg-white hover:text-black'>3</button>
                  </div>
              </nav>
              {crewData[idx]}
            </div>
            <Outlet/>
        </div>
    );
}

export default technology;