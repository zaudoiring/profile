import React from "react";

// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
// images
import Image from "../assets/avatar.gif";

// animate css
import 'animate.css';
// icons
import { FaGithub,  FaFacebook, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import {  motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";

import resume from "../assets/resume.pdf"
const Banner = () => {

  return (
    <section className="section dark:bg-white" id="home">
      <div className=" container mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row justify-between lg:items-center">
           
          {/* text */}
          <div className="flex-1 font-secondary lg:text-left text-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-2 mt-10"
            >
             <span className='animate__animated animate__flipInX animate__delay-2s uppercase dark:text-slate-800 '> Zau Doi Ring</span>
            </motion.h1>
            <motion.div
             variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold  leading-[1]">
              <span className=" text-white mr-4 dark:text-slate-800">Hi, I am</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 dark:text-slate-800">
              I am a junior web developer and years of experience designing and developing software. Currently, I love to work on web application using technologies like React, Tailwind, Next JS and many more ...
            </motion.p>
            <motion.div
             variants={fadeIn("up", 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
              className="flex  gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-sm">
                
              <Link to='contact' activeClass='active' smooth={true} spy={true}>
           Contact me
        </Link>
                
               </button>
              <a href={resume} download="Resume" className="text-gradient btn-link">
              Download CV
              </a>
            </motion.div>
            {/* socials */}
            <motion.div 
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0 dark:text-slate-800">
              <a href="https://www.instagram.com/zaudoi_rg41/">
                <FaInstagram />
              </a>
              <a href="https://github.com/zaudoiring">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/zaw.rg.7">
                <FaFacebook />
              </a>
            </motion.div>
            
          </div>

           {/* image */}
           <motion.div 
           variants={fadeIn("down", 0.5)}
           initial="hidden"
           whileInView={"show"}
          //  viewport={{ once: false, amount: 0.7 }}
           className=" flex flex-1 max-w-[280px] mx-auto lg:max-w-[482px]" >
            <img src={Image} alt="image" />
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Banner;
