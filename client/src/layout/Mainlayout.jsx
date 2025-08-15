import React, { use } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
const Mainlayout = () => {
  let location =useLocation();
  
  return (
    <div className='bg-black'>
        <Navbar/>
        <Outlet/>
        
  
        {location.pathname === "/upload" ? null : <Footer />}
        


      
    </div>
  )
}

export default Mainlayout
