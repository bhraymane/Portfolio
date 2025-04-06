import Hero from '@/components/section/Hero'
import About from '@/components/section/About'
import Skills from '@/components/section/Skills'
import Services from '@/components/section/Services'
import ServiceSecond from '@/components/ServiceSecond'
import Contact from '@/components/section/Contact'
import Projects from '@/components/section/Projects'
function page() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10 ">  
      <Hero />
      <About />
      <Skills />
      <Services />
      <ServiceSecond />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default page