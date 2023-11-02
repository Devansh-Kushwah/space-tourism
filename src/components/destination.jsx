import React from "react";
import Desktopbg from '../assets/destination/background-destination-desktop.jpg';
import Tabletbg from '../assets/destination/background-destination-tablet.jpg';
import Mobilebg from '../assets/destination/background-destination-mobile.jpg';
import {Outlet } from 'react-router-dom';
import Data from '../data.json'
import Card from './card';
import moonImg from '../assets/destination/image-moon.png';
import marsImg from '../assets/destination/image-mars.png';
import europaImg from '../assets/destination/image-europa.png';
import titanImg from '../assets/destination/image-titan.png';
import { useState } from "react";


const destination = () => {

    let [idx, setidx] = useState(0);
    function settingidx(i){
        return function(){
            setidx(i);
        }
    }
    const imgs = [moonImg, marsImg, europaImg, titanImg];

    const destData = Data.destinations.map(item => {
        return(
           <Card 
                key={item.name}
                item = {item}
           />
        );
});

    return (
        <div className='bg-cover w-[100vw] h-[100vh] overflow-hidden static lg:text-left'>
            <img id="mobile"className="w-full h-[100vh] lg:hidden md:hidden" src={Mobilebg} alt="" />
            <img id="tablet"className="w-full h-[100vh]  hidden lg:hidden  md:block" src={Tabletbg} alt="" />
            <img id="desktop"className="w-full h-[100vh] hidden md:hidden lg:block" src={Desktopbg} alt="" />
            <p className='absolute  top-[20px] w-full 
            text-center md:text-left md:mt-20 lg:mt-40 
            mt-10 pl-4 lg:pl-20 uppercase font-Barlow text-[16px] 
            md:text-[20px] tracking-[0.3rem] text-[#D0D6F9]'>01 Pick your destination</p>
            <div className="absolute overflow-hidden top-[96px] md:top-[139px] lg:top-[280px] w-full">
                <img className="w-[240px] lg:w-[320px] lg:mx-20 mx-auto overflow-hidden" src={imgs[idx]} alt="" />
            </div>
            <nav className="absolute  top-[320px] lg:top-[200px] text-white w-full">
                <div className={`flex mt-3 md:mt-[60px] px-8 lg:px-0 w-[60%]
                    justify-around lg:justify-between mx-auto lg:mx-auto lg:mr-[10%] lg:w-[30%]`}>
                    <button onClick={settingidx(0)} className='py-4 px-6 lg:px-0  hover:border-b-2'>MOON</button>
                    <button onClick={settingidx(1)} className='py-4 px-6 lg:px-0  hover:border-b-2'>MARS</button>
                    <button onClick={settingidx(2)} className='py-4 px-6 lg:px-0  hover:border-b-2'>EUROPIA</button>
                    <button onClick={settingidx(3)} className='py-4 px-6 lg:px-0  hover:border-b-2'>TITAN</button>
                </div>
            </nav>
            {destData[idx]}
            <Outlet/>
        </div>
    );
}

export default destination;