"use client"
import Link from 'next/link'
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import ThemeImage from '../ThemeImage';
import {motion} from "framer-motion"

function About() {
  return (
    <section id='About' className='h-auto py-24 flex flex-col items-center  max-w-4xl mx-auto gap-8 '>
        <motion.h2 
        initial={{y:-50, opacity:0 }}
        whileInView={{y:0,opacity:1}}
        transition={{
            duration:1,
            delay:0.5,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        className='text-4xl max-sm:text-2xl font-bold'>About me</motion.h2>
        <motion.div 
        initial={{y:50, opacity:0 }}
        whileInView={{y:0,opacity:1}}
        transition={{
            duration:1,
            delay:0.8,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        className='relative text-justify justify-center items-center px-4'>
            <div>
                <FaQuoteLeft  size={200}  className='text-gray-500/10 absolute -top-8 max-md:hidden' />
            </div>      
            <p className='max-sm:text-sm'> I hold a Technical Diploma in Web Development, where I gained hands-on experience in both front-end and back-end technologies. Throughout my journey, I&apos;ve focused on building optimized, SEO-friendly websites by following best practices in development and performance.
            Currently, I&apos;m pursuing a Bachelor&apos;s degree in Digital Marketing and Social Media Management at FSJES-KS in El Kelaa des Sraghna. This unique combination of technical expertise and marketing strategy allows me to bridge the gap between powerful web solutions and impactful digital growth.</p>
            <div>
                <FaQuoteRight  size={200}  className='text-gray-500/10 absolute right-0 -top-8 max-md:hidden '  />
            </div>

        </motion.div>
        <motion.div 
        initial={{y:50, opacity:0 }}
        whileInView={{y:0,opacity:1}}
        transition={{
            duration:1,
            delay:0.6,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        className='flex gap-4  items-center justify-center'>
            <ThemeImage
            lightSrc="/ar.png"
            darkSrc="/ar2.png"
            alt="Adaptive Arrows"
            width={90}
            height={90}
            className='max-md:hidden '
            />
            <Link  href="/prcv.pdf"   target='_blank' className='text-primary self-end flex gap-2 justify-center items-center px-8 py-3 text-sm rounded-xl border-2 border-primary hover:scale-105 transition-all '>
                <PiDownloadSimpleBold />
                Download CV
            </Link>
            <ThemeImage
            lightSrc="/ar.png"
            darkSrc="/ar2.png"
            alt="Adaptive Arrows"
            width={90}
            height={90}
            className='max-md:hidden scale-x-[-1] '
            />
        </motion.div>
        
    </section>
  )
}

export default About