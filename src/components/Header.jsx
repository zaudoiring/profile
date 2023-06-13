import React, {useState,useEffect} from 'react';
// images
// import Logo from "../assets/logo.svg";
// icons

// motion
// import { motion } from "framer-motion";
// // varients
// import { fadeIn} from "../variants";

import { BsFillSunFill, BsMoonFill} from 'react-icons/bs';

import song from '../assets/letme.mp3';

import {LuMusic4}from 'react-icons/lu'

const Header = () => {
   // theme state 

  let audio = new Audio(song);
   function play(){
   
    if (audio.paused) {
      audio.play();
  }else if(audio.played){
    audio.pause();
    
  }
  else{
      audio.pause();
      audio.currentTime = 0
  }
    
  }
   const [theme, setTheme] = useState('light');

   // if local storage is empty save theme as light
   useEffect(() => {
     if (localStorage.getItem('theme') === null) {
       localStorage.setItem('theme', 'light');
     }
   }, []);
 
   useEffect(() => {
     // select html elem
     const html = document.querySelector('html');
     if (localStorage.getItem('theme') === 'dark') {
       html.classList.add('dark');
       setTheme('dark');
     } else {
       html.classList.remove('dark');
       setTheme('light');
     }
   }, [theme]);
 
   // handle switch theme
   const handleThemeSwitch = () => {
     if (localStorage.getItem('theme') === 'light') {
       setTheme('dark');
       localStorage.setItem('theme', 'dark');
     } else {
       setTheme('light');
       localStorage.setItem('theme', 'light');
     }
   };
  return <header className=' '>
    
    <div className=' bg-[#030917] dark:bg-white  drop-shadow-xl bg-opacity-90'>
         <div 
        //  variants={fadeIn("up", 0.1)}
        //  initial="hidden"
        //  whileInView={"show"}
        //  viewport={{ once: false, amount: 0.1 }}
         className='container mx-auto py-4 flex justify-between items-center'>
          {/* logo */}
          <a href=''>
            {/* <img src={Logo} alt='logo' /> */}
            <h3 className='uppercase font-bold lg:text-2xl text-xl dark:text-slate-800'>Delevopedbyzdr</h3>
          </a>

          <div className='flex gap-x-6'>
          <button onClick={play}>
          <span className='text-2xl text-pink-600 '>
          <LuMusic4 />
                    </span>
          </button>
          {/* <button className='btn btn-sm'>work with me</button> */}

          <button onClick={handleThemeSwitch} className='p-4 text-accent text-[30px] rounded-full w-12 h-12 flex justify-center items-center'>
           {
            theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />
           }
          </button>
          </div>
       
         </div>
    </div>
    </header>;
};

export default Header;
