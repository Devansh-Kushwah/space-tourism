import React from "react";
import Desktopbg from '../assets/crew/background-crew-desktop.jpg';
import Tabletbg from '../assets/crew/background-crew-tablet.jpg';
import Mobilebg from '../assets/crew/background-crew-mobile.jpg';
import crew4 from '../assets/crew/image-anousheh-ansari.png';
import crew3 from '../assets/crew/image-victor-glover.png';
import crew2 from '../assets/crew/image-mark-shuttleworth.png';
import crew1 from '../assets/crew/image-douglas-hurley.png';
import {Outlet} from 'react-router-dom';
import CrewCard from './crewCard'
import { useState } from "react";
import Data from '../data.json'

const crew = () => {
  
  let [idx, setidx] = useState(0);
  function settingidx(i){
      return function(){
          setidx(i);
      }
  }
  const imgs = [crew1, crew2, crew3, crew4];

  const crewData = Data.crew.map(item => {
      return(
         <CrewCard
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
            md:text-[20px] tracking-[0.3rem] text-[#D0D6F9]'>02 MEET YOUR CREW</p>
  
              <div className="absolute w-full overflow-hidden  top-[96px] md:top-auto md:bottom-0 lg:top-[280px]  border-b-[0.5px] border-white/10 ">
                  <img className="w-[170px] md:w-[240px] lg:w-[380px] lg:mx-[65%] mx-auto overflow-hidden" src={imgs[idx]} alt="" />
              </div>
            <div>
              <nav className="z-40 absolute top-[360px] md:top-[340px] lg:top-auto lg:bottom-20 text-white w-full">
                  <div className={`flex flex-row w-[150px]
                      justify-evenly mx-auto lg:mx-[60px]`}>
                      <button onClick={settingidx(0)} className='py-1 px-1 rounded-full bg-white/20 hover:bg-white active:bg-white'></button>
                      <button onClick={settingidx(1)} className='py-1 px-1 rounded-full bg-white/20 hover:bg-white active:bg-white'></button>
                      <button onClick={settingidx(2)} className='py-1 px-1 rounded-full bg-white/20 hover:bg-white active:bg-white'></button>
                      <button onClick={settingidx(3)} className='py-1 px-1 rounded-full bg-white/20 hover:bg-white active:bg-white'></button>
                  </div>
              </nav>
              {crewData[idx]}
            </div>
            <Outlet/>
        </div>
    );
}

export default crew;