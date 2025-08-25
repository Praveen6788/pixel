import React from 'react';
import Card from '../components/Card';
import { useEffect,useState } from 'react';
import axios from "axios"

const Teampage = () => {
  const[data,setdata]=useState([])
 useEffect(() => {
  console.log("Base URL:", import.meta.env.VITE_BACKEND_BASE_URL);

  axios
    .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/team`)
    .then((res) => {
      console.log("API success:", res.data.data);
      setdata(res.data.data );
    })
    .catch((err) => {
      console.error("API error:", err.response ? err.response.data : err.message);
    });
}, []);




  
  // const a = data.slice(0,2)
  // const b =data.slice(2)
  return (
    <div className='flex flex-col items-center justify-center text-center p-10 gap-12'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-6xl font-semibold'>TEAM <span className='text-yellow-500'>MEMBERS</span></h1>
        <h1 className='text-gray-400 mt-3 text-2xl  '>
          Meet the  visionaries powering PIXEL's creative revolution at IARE
        </h1>
      </div>

      <div >
        <h1 className='text-4xl font-semibold '>LEADERSHIP COUNCIL</h1>
        <div className='grid grid-col-1 md:grid-cols-2  place-items-center gap-x-50 gap-y-30 p-15 '>
          {data.map((member, index) => (
            <Card key={index} carddetails={member} />
          ))}
        </div>


        <h1 className='text-4xl font-semibold mt-8'>CORE TEAM</h1>


        <div className='grid grid-col-1 md:grid-cols-3 place-items-center gap-x-50 gap-y-15 p-15'>
          {data.map((member, index) => (
            <Card key={index} carddetails={member} />
          ))}
        </div>

      </div>



    </div>
  );
};

export default Teampage;
