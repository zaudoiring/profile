import React from 'react';
//import icons

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

// import ink
import { Link } from 'react-scroll';
const Nav = () => {
  return <div className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      {/* nav inner */}
      <div className='w-full  bg-black/20 h-[68px] backdrop-blur-xl rounded-lg max-w-[460px] mx-auto
           px-5 flex justify-between items-center text-xl text-white/60'>
            
        <Link to='home' offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[6opx] flex
          items-center justify-center dark:text-slate-800'>
          <BiHomeAlt />
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[6opx] flex
          items-center justify-center dark:text-slate-800'>
          <BiUser />
        </Link>
        <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[6opx] flex
          items-center justify-center dark:text-slate-800'>
          <BsClipboardData />
        </Link>
        <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[6opx] flex
          items-center justify-center dark:text-slate-800'>
          <BsBriefcase />
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[6opx] flex
          items-center justify-center dark:text-slate-800'>
          <BsChatSquareText />
        </Link>
      </div>
    </div>
  </div>;

};

export default Nav;
