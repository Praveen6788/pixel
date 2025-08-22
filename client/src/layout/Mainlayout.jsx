import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mainlayout = ({ isAuthenticated }) => {
  const location = useLocation();

  return (
    <div className='bg-black'>
      <Navbar isAuthenticated={isAuthenticated} />
      <Outlet />
      {/* Hide footer on admin pages */}
      {["/upload", "/admin", "/updateteam","/uploadupdates"].includes(location.pathname) ? null : <Footer />}
    </div>
  );
};

export default Mainlayout;
