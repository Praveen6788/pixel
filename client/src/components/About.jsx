import React from 'react'
import { motion } from 'motion/react'
import { inView } from 'motion/react'
const About = () => {
  return (
    <motion.section className="flex flex-col  px-6 md:px-10 py-6 gap-5 mt-10 "
     initial={{opacity:0,y:50}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:2,ease:"anticipate"}}
     viewport={{once:true,amount:0.05}}
    
    >
            <h1 className="text-4xl md:text-3xl font-semibold  font-poppins ">ABOUT <span className='text-yellow-500 font-bold'>PIXEL</span></h1>
            <h2 className="text-lg md:text-xl max-w-2xl text-gray-400">
              Where Digital Art Meets Traditional Photography in the Heart of Innovation
            </h2>
    
              <div>
                
                <p className="text-base md:text-xl   leading-relaxed text-start text-gray-500">
                  PIXEL is the premier photography club of the Institute of Aeronautical Engineering (IARE), where creativity meets technology in the most spectacular way possible.
                  <br />
                  Founded with a vision to revolutionize visual storytelling, we've created a cyberpunk haven where traditional photography techniques blend seamlessly with cutting-edge digital art forms. Our community thrives on the intersection of analog beauty and digital innovation.
                 
                  From capturing the raw essence of campus life to creating mind-bending digital masterpieces, PIXEL has become the creative powerhouse that pushes the boundaries of what's possible with a camera and imagination.
                  
                  We believe that every frame tells a story, every pixel holds potential, and every member brings a unique perspective that enriches our collective vision.
                </p>
              
    
             
            </div>
          </motion.section>
    
    
  )
}

export default About
