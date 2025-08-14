import React from 'react'
import logo from "../assets/logo.svg"

const Hero = () => {
  return (
    <>
     <div className="w-full bg-black min-h-[90vh] flex flex-col lg:flex-row gap-20 p-6  md:gap-2 lg:p-20 text-white ">
  
  {/* Left Section */}
  <div className="w-full lg:w-2/2   lg:py-20 flex  flex-col  gap-8">
    <div>
      <h1 className="text-3xl lg:text-7xl font-bold font-Poppins">WELCOME TO</h1>
    <h1 className='text-4xl lg:text-7xl font-bold font-Poppins text-yellow-500'>
      PIXEL 
    </h1>
    <h1 className='text-4xl lg:text-7xl font-bold font-Poppins '>
      PHOTOGRAPHY</h1>

    </div>

    
    

    <div className='flex  gap-8 flex-col '>

      <h1 className='text-xl text-gray-50 text-opacity-50 leading-8 md:w-[65vh]'>
      Join IARE's premier photography club where creativity meets innovation. Capture, create, and connect with fellow visual storytellers in style.
    </h1>
      <div className='flex gap-8'>
        <button className='border px-5 py-3 bg-yellow-500 text-black rounded-lg shadow text-lg font-semibold  '>
        Explore Gallery

      </button>

      <button className='border border-white text-white px-5 py-3 backdrop-filter backdrop-blur-md rounded-lg text-lg hover:bg-white/10 transition'>
  Latest updates
</button>


      </div>
      

    </div>

    
  </div>

  {/* Right Section */}
 <div className="w-full lg:w-2/3 max-h-[70vh] lg:p-20 border rounded-xl  backdrop-blur-md bg-gradient-to-r from-yellow-500/30 via-purple-500/20 to-black-500/30">
  <img src={logo} alt="" className="rounded-full" />
</div>



</div>


    </>
  )
}

export default Hero
