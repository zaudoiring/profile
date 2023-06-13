import React from 'react';
// icons
// import { BsArrowUpRight } from "react-icons/bs";
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

import {FaJava,FaPhp,FaLaravel} from "react-icons/fa";
import {SiGithub,SiReact,SiTailwindcss, SiFigma, SiJavascript,SiBootstrap ,SiMysql} from "react-icons/si";
// services data
const services =[
    {
      name:'Completion',
      description: ` I completed HND ( higher national diploma ) as software engineering at IMU.`,
      // link:'Learn more',
    },
    {
      name:'Volunteer',
      description: ` Teaching and sharing about web/software development  in some training center.`,
      // link:'Learn more',
    },
    {
      name:'Development',
      description: `Develop the graphical user interface of a website using JavaScript library React.`,
      // link:'Learn more',
    },
   
    // {
    //   name:'Time Managment',
    //   description: ` I can completely manage projects in deadline.`,
    //   // link:'Learn more',
    // },
 
    // {
    //   name:'Freelancer',
    //   description: ` Get some project from client and help some project's Frontend design as a team member..`,
    //   // link:'Learn more',
    // },
];

const Services = () => {
  const skills="<skills />";

  return <section className='section dark:bg-white' id='services'>
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row px-2'>
              {/* text */}
              {/* <motion.div 
              variants={fadeIn('right',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewports={{ once:false, amount:0.3 }}
             
              className='flex-1 px-2'>
              <div>
              <h2 className='h2 text-accent mb-6 '>What I do</h2>
              <h3 className='h3 max-w-[455px] mb-10 dark:text-slate-800'>I am a Freelance Front-end Developer with over 3 years of experience
              </h3>
              <button className='btn btn-sm mb-10'>See my work</button>
              </div>
              </motion.div> */}

                <motion.div 
              variants={fadeIn('right',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewports={{ once:false, amount:0.3 }}
             
              className='flex-1 px-2 lg:mr-10  flex justify-center items-center mb-20'>
              <div>
              <h2 className='h2 text-accent mb-6 text-center '>{skills }</h2>
                   <div className='  py-5 mb-2'>
                    
                    <div className=' flex flex-row justify-evenly space-x-3 '>

{/* 
                   <span className='w-16  bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiHtml5 />
                    </span>
                    <span className='w-16  bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiCss3 />
                    </span>      */}
                    <span className='w-16 lg:w-24  bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiTailwindcss />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiBootstrap />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                    <SiJavascript/>
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                    <SiReact />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiFigma />
                    </span>
                   
                    </div>

                   </div>
                     
                   <div className='  py-5'>
                    
                    <div className=' flex justify-evenly space-x-3 '>


                  
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiGithub />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <FaJava />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <FaPhp />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <FaLaravel />
                    </span>
                    <span className='w-16 lg:w-24 bg-black bg-opacity-30 text-gray-100 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 py-6 transition-all hover:text-accent  cursor-pointer duration-300'>
                      <SiMysql />
                    </span>
                    </div>

                   </div>

              </div>
              </motion.div>
              {/* services */}
              <motion.div 
               variants={fadeIn('left',0.5)}
               initial="hidden"
               whileInView={"show"}
               viewports={{ once:false, amount:0.3 }}
              className='flex-1'>
                {/* serviece list */}
                {
                services.map((service,index)=>{
                  // destructive service
                  const {name,description} = service;
                    return(
                      <div className='border-b border-white/20  h-[135px] mb-[25px] flex ' key={index}> 
                        <div className='max-2-[476px] py-3'>
                         <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 dark:text-slate-800'>{name}</h4>
                         <p className='font-secondary leading-tight dark:text-slate-800'>{description}</p>
                          </div>
                          {/* <div className='flex flex-col flex-1 items-end'>
                            <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href='$' >
                              <BsArrowUpRight />
                            </a>
                            <a className='text-gradient text-sm' href='#'>
                              {link}
                              </a>
                            </div> */}
                      </div>
                      )
                })
                }
              </motion.div>
             
            </div>
          </div>
          </section>;
};

export default Services;
