"use client"
import ThemeImage from '@/components/ThemeImage';
import {motion} from "framer-motion"

function Services() {
    
    return (
        <section id='services' className='h-auto max-w-4xl mx-auto '>

            <motion.div 
            initial={{opacity:0 ,scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{
                duration:1,
                delay:0.5,
                type:'spring'
            }}
            viewport={{
                once:true,
            }}

            className="">
                <h2 className="text-4xl text-center font-bold max-sm:text-2xl mb-6">Why Work With Me?</h2>
                <p className="text-lg mb-12 max-sm:text-sm text-justify">
                Through my continuous training and learning, I&apos;ve mastered the latest technologies such as <strong>Next js 15</strong>, <strong>React 19</strong>, <strong>Tailwind CSS v4</strong> and <strong>Express js</strong>. I design modern, high-performance and optimized sites, whether landing pages, e-commerce stores or reservation systems. I apply best practices in web development and <strong>SEO optimization</strong> to ensure speed, accessibility and efficiency.
                </p>


                <div className="grid gap-12 items-center">
                    <div className="space-y-6 text-left">
                        <div className="">
                        <h3 className="text-xl max-sm:text-lg font-semibold mb-2">🚀 Cutting-edge Technologies</h3>
                        <p className='max-sm:text-sm text-justify'>I leverage modern frameworks and libraries to create performant and scalable solutions tailored to your needs.</p>
                        <ThemeImage
                            lightSrc="/LightHouseLight.png"
                            darkSrc="/LightHouseDark.png"
                            alt="Performance metrics"
                            width={590}
                            height={90}
                            className=' mx-auto my-3 '
                        /> 
                        </div>

                        <div className="">
                        <h3 className="text-xl max-sm:text-lg font-semibold mb-2">🔍 SEO Expertise</h3>
                        <p className='max-sm:text-sm text-justify' >I help companies improve their ranking on search engines by working on keywords, powerful content, and technical optimization. Your website will be fast, SEO-friendly, and ready to scale.</p>
                        
                        </div>

                        <div className="">
                        <h3 className="text-xl max-sm:text-lg font-semibold mb-2">📈 Digital Marketing</h3>
                        <p className='max-sm:text-sm text-justify'>Combining development with strategy, I use the power of AI and tools like Facebook, TikTok, and Google Ads to launch impactful advertising campaigns that drive growth.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
  )
}

export default Services