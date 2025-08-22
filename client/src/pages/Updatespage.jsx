// Updatespage.jsx
import React, { useState, useEffect } from "react";
import Updates from "../components/Updates";
import axios from "axios";

const Updatespage = () => {
  const [updates, setUpdates] = useState([]); // ✅ start with empty array
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/updates`)
  //     .then((res) => {
  //       console.log("Successfully fetched", res.data);
  //       const data = res.data.data; // backend returns { success, data }
  //       setUpdates(data || []); // ✅ fallback to [] if undefined
  //     })
  //     .catch((err) => {
  //       console.log("Error fetching:", err);
  //     });
  // }, []);

  // auto slider effect
  useEffect(() => {
    if (updates.length === 0) return; // ✅ avoid modulo zero

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [updates.length]);

  // ✅ schema uses imgUrl not img
  const currentImage = updates[currentIndex]?.imgUrl;

  return (
    <>
      <h1 className="text-4xl mx-5 mt-2 font-semibold">Updates</h1>

      <div className="w-[95vw] h-[80vh] mx-10 my-5 border-1 mx-auto border-white p-10 md:flex md:gap-20 gap-y-60 rounded-md">
        {/* Left: large preview */}
        <div
          className="md:w-[80%] sm:w-full md:h-[98%] h-[30%] border-1 border-white rounded-md mb-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          {updates.length > 0 && (
            <div className="bg-black/50 text-white p-5 rounded-b-md">
              <h2 className="text-xl font-bold">
                {updates[currentIndex]?.EventName}
              </h2>
              <p className="text-sm">{updates[currentIndex]?.Description}</p>
              <p className="text-xs">
                {updates[currentIndex]?.date} — {updates[currentIndex]?.place}
              </p>
              <p className="text-xs">
                {updates[currentIndex]?.startTime} to{" "}
                {updates[currentIndex]?.endTime}
              </p>
            </div>
          )}
        </div>

        {/* Right: list of all updates */}
        <div className="md:w-[20%] sm:w-[90%] md:h-[98%] h-[60%] border border-white rounded-md overflow-auto">
          <Updates data={updates} />
        </div>
      </div>
    </>
  );
};

export default Updatespage;
