"use client"
import ContactSection from './ContactSection';
import {motion} from "framer-motion"
function Contact() {
  return (
      <section id='contact' className="bg-primary/5 max-w-4xl w-full mx-auto  mt-8 py-16">
        <motion.div 
        initial={{scale:0.8, opacity:0 }}
        whileInView={{scale:1,opacity:1}}
        transition={{
            duration:1,
            delay:0.6,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        className="px-4">
          <div className="text-center">
            <h2 className="text-3xl max-sm:text-xl font-bold text-primary mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-primary mb-10 max-w-2xl  max-sm:text-xs  mx-auto">
              Let&apos;s work together to create a powerful online presence that drives results for your business.
            </p>
          </div>
          <ContactSection />

        </motion.div>
      </section>

    
  )
}

export default Contact