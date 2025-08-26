import React from 'react'
import logo from "../assets/camm.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const Navigate =useNavigate()
  return (
    <>
     <div className="w-full bg-black min-h-[90vh] flex flex-col lg:flex-row gap-5 p-6  md:gap-2 lg:px-20  text-white  ">
  
  {/* Left Section */}
  <div className="w-full lg:w-2/2   lg:py-20 flex  flex-col  gap-8 ">
    <div>
      <h1 className="text-3xl lg:text-7xl font-bold font-Poppins ">WELCOME TO</h1>
    <h1 className='text-4xl lg:text-7xl font-bold font-Poppins text-yellow-500'>
      PIXEL 
    </h1>
    <h1 className='text-4xl lg:text-7xl font-bold font-Poppins '>
      PHOTOGRAPHY</h1>

    </div>

    
    

    <div className='flex mt-[-10px]  gap-8 flex-col '>

      <h1 className='text-xl text-gray-50 text-opacity-50 leading-8 w-[90%] md:w-[65vh]'>
      Join IARE's premier photography club where creativity meets innovation. Capture, create, and connect with fellow visual storytellers in style.
    </h1>
      <div className='flex gap-8 mt-2 w-[90%] text-center justift-center items-center'>

        <button className='border px-5 py-3 bg-yellow-500 text-black rounded-lg shadow text-lg font-semibold' onClick={()=>{Navigate("/gallery")}} >
          Check Gallery
        

      </button>

      <button className='border border-white text-white px-5 py-3 backdrop-filter backdrop-blur-md rounded-lg text-lg hover:bg-white/10 transition' onClick={()=>{Navigate("/update")}}>
  Latest updates
</button>


      </div>
      

    </div>

    
  </div>

  {/* Right Section */}
 <div className="w-90 md:w-full  lg:w-5/7 h-[70vh]  rounded-xl backdrop-blur-md flex justify-center items-center   p-0 md:p-0  ">
  <div
    className="h-[100%] w-[100%] md:h-[120%] md:w-[120%] "
    style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    
      
    }}
  >
    {/* Optional content inside */}
  </div>
</div>



</div>


    </>
  )
}

export default Hero
