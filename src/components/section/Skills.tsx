"use client"
import { skillsData } from '../../constants/data'
import React from 'react'
import { IconContext } from 'react-icons'
import {motion} from "framer-motion"


function Skills() {
    const fadeInAnimation={
        initial:{
          opacity:0,
          y:100,
        },
        animate:(index:number)=>({
          opacity:1,
          y:0,
          transition:{
            delay:0.05*index,
          }
        })
      }
  return (
    <section id='skills' className='max-container flex flex-col gap-8 items-center px-8 py-24 '>  
        <motion.div 
        className='items-center flex flex-col'
        initial={{y:-50, opacity:0}}
          whileInView={{y:0,opacity:1}}
            transition={{
                duration:1,
                delay:0.6,
                type:'spring'
            }}
            viewport={{
                once:true,
            }}
        >
          <h2 className='text-4xl max-sm:text-2xl font-bold '>Skills</h2>
          <p className='text-zinc-400 text-sm'>My technical level </p>      
        </motion.div>    
         
        <div className='flex flex-wrap gap-10 justify-center items-center max-w-[55rem] '>
          {skillsData.map((item,index)=>(
                    <motion.div 
                    className='bg-white border border-gray-300 p-4 rounded-lg  drop-shadow-md relative group'
                    key={index}
                      variants={fadeInAnimation}
                      initial='initial'
                      whileInView="animate"
                      viewport={{
                        once:true,
                    }}
                      custom={index}
        
                    >    
                                    
                      <IconContext.Provider value={{color: '#333333', size: "40"}}  >
                        {item.icon}
                      </IconContext.Provider>

                      {/* Technology name display */}
                      <div className="absolute text-xs font-semibold text-center cursor-pointer inset-0 flex rounded-lg items-center justify-center bg-gray-900 bg-opacity-70 text-white opacity-0 group-hover:opacity-100  transition-opacity duration-300">
                            {item.name}
                      </div>
                                           
                  </ motion.div>
          ))}
    
        </div>
         
         
      
      </section>
  )
}

export default Skills