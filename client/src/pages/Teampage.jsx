import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from "axios";
import "animate.css";

const Teampage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/team`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err.response ? err.response.data : err.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center text-center p-10 gap-10">
      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl md:text-6xl font-bold">
          TEAM <span className="text-yellow-500">MEMBERS</span>
        </h1>
        <h2 className="text-gray-400 text-lg md:text-2xl max-w-content mx-auto">
          Meet the visionaries powering PIXEL's creative revolution at IARE
        </h2>
      </div>

      {/* Leadership Council */}
      <section className="w-full">
        <h2 className="text-3xl font-semibold mb-8">LEADERSHIP COUNCIL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-y-30 md:gap-10 place-items-center py-10">
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[60vw] h-[80vw] md:w-[18vw] md:h-[18vw] 
                             rounded-md bg-[rgba(0,0,0,0.16)] backdrop-blur-[100px] 
                             animate-pulse border border-gray-700 flex flex-col items-center justify-center p-4"
                >
                  {/* Skeleton Avatar */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-700 rounded-full mb-4 animate__animated animate__flash animate__slower animate__infinite" ></div>
                  {/* Skeleton Text */}
                  <div className="w-3/4 h-4 bg-gray-600 rounded mb-2 animate__animated animate__fadeIn animate__infinite  animate__fast  "></div>
                  <div className="w-1/2 h-4 bg-gray-600 rounded"></div>
                </div>
              ))
            : data.map((member, index) => (
                <Card key={index} carddetails={member} />
              ))}
        </div>
      </section>

      {/* Core Team */}
      <section className="w-full mt-20 p-10">
        <h2 className="text-3xl font-semibold mb-8">CORE <span className="text-yellow-500">TEAM</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-30 place-items-center p-20">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[60vw] h-[80vw] md:w-[18vw] md:h-[18vw] 
                             rounded-md bg-[rgba(0,0,0,0.16)] backdrop-blur-[100px] 
                             animate-pulse border border-gray-700 flex flex-col items-center justify-center p-4"
                >
                  {/* Skeleton Avatar */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-700 rounded-full mb-4 animate__animated animate__flash animate__slower animate__infinite" ></div>
                  {/* Skeleton Text */}
                  <div className="w-3/4 h-4 bg-gray-600 rounded mb-2 animate__animated animate__fadeIn animate__infinite  animate__fast "></div>
                  <div className="w-1/2 h-4 bg-gray-600 rounded"></div>
                </div>
              ))
              
            : data.map((member, index) => (
                <Card key={index} carddetails={member} />
              ))}
        </div>
      </section>
    </div>
  );
};

export default Teampage;
