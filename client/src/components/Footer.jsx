import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='p-10 md:p-15 flex flex-col justify-center items-center gap-8'>
      <h1 className='text-2xl md:text-5xl font-bold min-w-content text-center '>
        BECOME A <span className='text-yellow-500'>PIXEL</span> PIONEER
      </h1>
      <h1 className='text-center sm:xl md:text-2xl text-gray-400'>
        Ready to join IARE's most innovative photography community?
        <br />

         Become part of the  creative revolution.
      </h1>

      <div className='flex  gap-10'>
          
        <div className='hover:bg-gray-50 hover:text-black p-2 rounded-md border border-white'>
          
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdQe5rgAMbLQxr7GCiTTkA-c9T3F8B1aDKxeUkmg5J_6gOsLw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadytjxkyP7Vbj8IhMcZGqAVmu68f3RN9EOtlTdP7oIammiq26uMjzRIGIWpvA_aem_JIsLZVrv_ncjvmzTYPczNA  ">Join Now</Link>
          
        </div>
        <div className='hover:bg-yellow-500  hover:text-black p-2 rounded-md border border-white ' >
          <Link to="https://www.instagram.com/pixels.iare?igsh=MXlweTBrYmgzdGZk">Contact Us</Link>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer
