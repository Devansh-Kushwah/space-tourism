import { NavLink, Outlet } from 'react-router-dom';
import logo from "../assets/shared/logo.svg";
import lines from "../assets/shared/icon-hamburger.svg";
import cross from "../assets/shared/icon-close.svg";
import { useState } from 'react';

export default function Navbar() {

    const [showside, setshowside] = useState(false);
    const [showlines, setshowlines] = useState(true);
    const [showcross, setshowcross] = useState(false);

    function toggle(){
        if(!showside){
            setshowside(true);
            setshowlines(false);
            setshowcross(true);
        }
        else{
            setshowside(false);
            setshowlines(true);
            setshowcross(false);   
        }
    }
    
    return (
        <div className='w-full'>
        <nav className=' font-Barlow font-thin tracking-widest flex flex-row z-20 absolute top-0 right-0 text-white w-full '>
            <div className='w-1/2 mt-5 md:mt-0 lg:mt-8' >
                <div id="logo-div">
                    <img className="pl-8 md:pt-5" src={logo} alt="" />
                </div>
            </div>
            <ul className={`${showside ? 'flex' : 'hidden'} md:flex backdrop-blur flex-col  
                pt-20 md:pt-0 lg:pt-0 md:bg-gray-500/10 bg-[#0B0D17]/20 lg:bg-[#0B0D17]/20 h-[100vh] px-8 w-[80%] 
                md:flex-row md:justify-around md:h-auto md:mt-0 lg:mt-8 md-1/2 justify-start`}>
                <li className='pt-8 pb-8 hover:border-b-2'><NavLink to="/">00  HOME</NavLink></li>
                <li className='pt-8 pb-8 hover:border-b-2'><NavLink to="/destination">01  DESTINATION</NavLink></li>
                <li className='pt-8 pb-8 hover:border-b-2'><NavLink to="/crew">02  CREW</NavLink></li>
                <li className='pt-8 pb-8 hover:border-b-2'><NavLink to="/technology">03  TECHNOLOGY</NavLink></li>
            </ul>
        </nav>
        <div onClick={() => toggle()} id="lines" className= {`absolute top-0 right-0 z-30 p-8 md:hidden lg:hidden ${showlines ? '' : 'hidden'}`}><img src={lines} alt="" /></div>
        <div onClick={() => toggle()} id="cross" className= {`absolute top-0 right-0 z-30 p-8 md:hidden lg:hidden ${showcross ? '' : 'hidden'}`}><img src={cross} alt="" /></div>
        <div className='absolute backdrop-blur bg-[#ffffff]/20 z-30 h-0  top-16 right-[57%] mt-3 w-[30%] lg:h-px'> </div>
        <Outlet/>
        </div>
    )
}

