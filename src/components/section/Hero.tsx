import Link from 'next/link'
import Image from 'next/image'
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaGithub  } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
function Hero() {
  return (
    <section id='home' className='h-screen max-md:h-auto max-md:mt-12 flex items-center justify-center max-w-4xl mx-auto  max-md:flex-col max-md:gap-12  '>
        <div className='flex-1 flex flex-col justify-start'>
            <h1 className='text-4xl max-sm:text-2xl font-bold text-primary'>Web Developer - Front end & Back end</h1>        
            <p className='mt-4 text-sm max-sm:text-xs text-primary/60'>Im creative web developer with 3 years experience. im very passionate and dedicated to my work.</p>
            <div className='flex max-md:flex-col gap-3  items-center mt-8 text-sm max-md:text-xs  '>
                <Link href='/#contact' className='px-6 py-3 bg-primary font-semibold max-md:w-full text-center text-primary-foreground hover:bg-primary/70  rounded-md '>Contact me</Link>
                <Link href='/#projects' className='px-6 pyte-3 text-primary rounded-md max-md:w-full text-center hover:text-primary/70 '>Latest Projects</Link>
            </div>
            <div className="mt-10 inline-flex items-center justify-center lg:justify-start  ">
                <div className="text-center border-r border-gray-600 dark:border-gray-200 pr-4  ">
                    <span className="text-xl max-sm:text-lg font-bold text-primary ">20+</span>
                    <p className="text-gray-600 text-xs max-sm:text-[9px] dark:text-gray-300">Projects Completed</p>
                </div>
                <div className="text-center border-l border-gray-600 dark:border-gray-200 px-4">
                    <span className="text-xl max-sm:text-lg font-bold text-primary">3+</span>
                    <p className="text-gray-600 text-xs max-sm:text-[9px] dark:text-gray-300">Years of Experience</p>
                </div>
            </div>
        </div>

        <div className=" flex-1 flex justify-end items-center">
            <div className='relative rounded-t-2xl border border-gray-900/20 dark:border-white border-b-0 p-3'>
                <div className='relative w-70 h-80  max-md:w-52 max-sm:h-52'>
                    <Image src="/hero.png" priority alt="Hero Image" width={300} height={300} className="object-contain absolute  left-0 -top-6 " /> 
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute flex justify-center items-end  gap-3 w-full h-full top-6 left-0 ">
                    <Link href={"https://www.instagram.com/bc_aymane/"} aria-label='Instagram' target='_blank' className=" hover:bg-primary hover:text-primary-foreground transition-colors w-10 h-10 bg-primary-foreground rounded-full text-primary flex items-center justify-center shadow-xl  ">
                        <LuInstagram  size={20} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/bacharaymane/"} aria-label='Linkedin' target='_blank' className=" hover:bg-primary hover:text-primary-foreground transition-colors w-10 h-10 bg-primary-foreground rounded-full text-primary flex items-center justify-center shadow-xl ">
                        <PiLinkedinLogoBold size={20} />
                    </Link>
                    <Link href={"https://github.com/bhraymane"}  aria-label='Github' target='_blank' className=" hover:bg-primary hover:text-primary-foreground transition-colors w-10 h-10 bg-primary-foreground rounded-full text-primary flex items-center justify-center shadow-xl ">
                        <FaGithub   size={20} />
                    </Link>
                </div>
            </div>
  
        </div>

    </section>


  )
}

export default Hero