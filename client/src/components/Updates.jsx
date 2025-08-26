import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
const Updates = () => {
  const location = useLocation();
  const [updates, setUpdates] = useState([]);  // ✅ empty array initially

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/updates`)
      .then((res) => {
        console.log("Successfully fetched", res.data);
        const data = res.data.data; // assuming your backend returns { success, data }
        setUpdates(data); // ✅ update state
      })
      .catch((err) => {
        console.log("Error fetching:", err);
      });
  }, []);

  console.log(updates);



  let arr = updates;


  if (location.pathname === "/home" || location.pathname === "/") {

    return (
      <section className="h-[62vh] p-8">
        <h1 className="text-3xl md:text-3xl mb-5 font-semibold text-start uppercase">
          Recent  <span className='text-yellow-500          '>Updates</span>
        </h1>

        <div className="h-[100%] md:h-[90%]   border-white overflow-auto md:overflow-hidden">
          <div className="flex   md:grid md:grid-rows-1 flex-col md:grid-flow-col md:gap-20 overflow-x-auto wrap scroll-hidden">
            {arr.map((member, index) => (
              <div
                key={index}
                className="border-white border-1 h-[25vh] w-[80vw] my-10 md:h-[300px] md:w-[530px] bg-cover bg-no-repeat bg-center rounded-md"
                style={{ backgroundImage: `url(${member.imgUrl})` }}
              >
                <div className="bg-black/50 text-white p-2 rounded-b-md">
                  <h6>{member.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <>
        {arr.map((member, index) => (
          <div
            key={index}
            className="w-[80%] mx-auto h-[250px] md:h-[150px] my-5 border border-white rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${member.imgUrl})` }}
          >
            <div className="bg-black/50 text-white p-2 rounded-b-md">
              <h6>{member.title}</h6>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default Updates;
