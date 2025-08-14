import React from 'react'
import Updates from '../components/Updates'
const Updatespage = () => {
  

  return (
    <>
      <h1 className='text-4xl mx-5 mt-2 font-semibold'>
        Updates
      </h1>
      <div className='w-[95vw] h-[80vh] mx-10 my-5 border-1 mx-auto border-white p-10 md:flex md:gap-20 gap-y-60 rounded-md   '>

        <div className='md:w-[80%] sm:w-full  md:h-[98%] h-[30%] border-1 border-white rounded-md mb-10' >

        </div>
        <div className='md:w-[20%] sm:w-[90%]  md:h-[98%]  h-[60%] border border-white rounded-md overflow-auto wrap'>
          <Updates/>
        </div>



      </div></>
  )
}

export default Updatespage
