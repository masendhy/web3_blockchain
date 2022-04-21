import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/LEK.svg'
import React from 'react';

const NavbarItem= ({title, classProps})=>{
    return (
        <li className='mx-4 cursor-pointer ${classProps}'> 
        {title}</li>
    )
}

const Navbar =()=> {
    const [toggleMenu, setToggleMenu]=useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'> 
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img src={logo} alt='logo' className='w-32 cursor-pointer' />
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial '> 
           {['Market', 'Exchange','Tutorials','Wallets'].map((item, index)=>(
               <NavbarItem key={item + index} title={item}/>
           ))}
            <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#2546bd]'>Login</li>
            </ul>

            {/* on mobile device useing toggleMenu*/}

            <div className='flex relative '>
            {toggleMenu
? <AiOutlineClose fontSize={27} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
:<HiMenuAlt4 fontSize={27} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}   />
}
{toggleMenu &&(
    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none'>
    <li className='text-xl w-full my-2
    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
    '>
<AiOutlineClose onClick={()=> setToggleMenu(false)} className='my-2 mx-2' />
{['Market', 'Exchange','Tutorials','Wallets'].map((item, index)=>
               <NavbarItem key={item + index} title={item} classProps='my-2 text-lg'/>
           )}
    </li>
     </ul>
) }
            </div>
        
         </nav>
    );
}

export default Navbar;