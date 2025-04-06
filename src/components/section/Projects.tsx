"use client"
import { projectsData } from "../../constants/data";
import { FaEye } from "react-icons/fa";
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";

function Projects() {
    const fadeInAnimation={
        initial:{
          opacity:0,
          y:100,
        },
        animate:(index:number)=>({
          opacity:1,
          y:0,
          transition:{
            delay:0.1*index,
          }
        })
      }
  return (
    <section id='projects' className='max-w-4xl w-full mx-auto flex flex-col gap-8 items-center px-2 py-24 '>  
          <motion.div 
          className='items-center flex flex-col '
          initial={{y:-50, opacity:0}}
          whileInView={{y:0,opacity:1}}
            transition={{
                duration:1,
                type:'spring'
            }}
            viewport={{
                once:true,
            }}
          >
            <h2 className='text-4xl max-sm:text-2xl font-bold'>Project</h2>
            <p className='text-zinc-400 text-sm'>My Latest Project </p>      
          </motion.div>
    
          <div className="flex justify-center items-center flex-wrap gap-6 ">
            {projectsData.map((item,index)=>(
              <motion.div 
              className="bg-primary-foreground shadow-md p-4 flex flex-col justify-center items-center rounded-xl max-w-[16rem]"
              key={index}
                      variants={fadeInAnimation}
                      initial='initial'
                      whileInView="animate"
                      viewport={{
                        once:true,
                    }}
                      custom={index}
              
              >
                <Image src={item.imageUrl}  alt="projectimg" width={350} height={350}  className="rounded-lg bg-[#333333bb] shadow-md"/>
                <div className="relative ">
                  <Link href={item.siteUrl} target="blank" aria-label={item.title} className=" bg-[white] p-2 shadow-md rounded-full  absolute -top-4 left-1/2 transform -translate-x-1/2 hover:bg-[#c8c8c89a] "><FaEye size={16} color="#333333" /></Link>
                </div>
                <div>
                  <h2 className="text-sm pt-6 font-extrabold ">{item.title} </h2>
                  <p className=" text-xs text-zinc-400 text-justify"> {item.description} </p>
                </div>
                <ul className="flex gap-2 flex-wrap w-full pt-3">
                  {item.tags.map((tag,index)=>(
                    <li 
                    className="bg-[#343434e9] border-white border shadow-lg p-2 font-semibold text-[9px] rounded-sm text-white" 
                    key={index}>
                      {tag}
                    </li>
                  ))}
                  
                </ul>
    
              </motion.div>
    
            ))
    
            }
    
          
    
          </div>
    
    </section>
  )
}

export default Projects