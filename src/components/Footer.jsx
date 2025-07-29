import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='p-10 md:p-10 flex flex-col justify-center items-center gap-8'>
      <h1 className='text-2xl md:text-5xl font-bold min-w-content'>
        BECOME A PIXEL PIONEER
      </h1>
      <h1 className='text-center sm:xl md:text-2xl text-gray-400'>
        Ready to join IARE's most innovative photography community?
        <br />

         Become part of the  creative revolution.
      </h1>

      <div className='flex  gap-10'>
          
        <div className='hover:bg-gray-50 hover:text-black p-2 rounded-md border border-white'>
          <h1>
            JOIN PIXEL
          </h1>
          <img src="
          " alt="" />
        </div>
        <div className='hover:bg-yellow-500  hover:text-black p-2 rounded-md border border-white ' >
          <h1>
            CONTACT US
          </h1>
          <img src="
          " alt="" />
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer
