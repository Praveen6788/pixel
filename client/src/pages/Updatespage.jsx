// Updatespage.jsx
import React from 'react'
import Updates from '../components/Updates'
import { useState,useEffect } from 'react';
const Updatespage = () => {
  const updates = [
    {
      img: "https://avatars.githubusercontent.com/u/140039820?v=4",
      title: "Nature Through the Lens - Photo Contest",
      mode: "Online",
      type: "Contest"
    },
    {
      img: "https://example.com/images/lightroom-workshop.jpg",
      title: "Editing Masterclass: Lightroom for Beginners",
      mode: "Offline",
      type: "Workshop"
    },
    {
      img: "https://example.com/images/night-photowalk.jpg",
      title: "Night Street Photography Walk",
      mode: "Offline",
      type: "Event"
    },
    {
      img: "https://example.com/images/portrait-challenge.jpg",
      title: "Weekly Portrait Challenge",
      mode: "Online",
      type: "Contest"
    },
    {
      img: "https://example.com/images/gear-talk-session.jpg",
      title: "Gear Talk: Choosing the Right Lens",
      mode: "Online",
      type: "Workshop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % updates.length);
      }, 5000); // change every 2 seconds

      return () => clearInterval(interval); // cleanup
    }, [updates.length]);

  const currentImage = updates[currentIndex]?.img;

  return (
    <>
      <h1 className='text-4xl mx-5 mt-2 font-semibold'>Updates</h1>
      <div className='w-[95vw] h-[80vh] mx-10 my-5 border-1 mx-auto border-white p-10 md:flex md:gap-20 gap-y-60 rounded-md'>

        <div className='md:w-[80%] sm:w-full md:h-[98%] h-[30%] border-1 border-white rounded-md mb-10 tra'
         style={{ backgroundImage: `url(${currentImage})` }}>
          {/* Left side */}
        </div>

        <div
          className='md:w-[20%] sm:w-[90%] md:h-[98%] h-[60%] border border-white rounded-md overflow-auto wrap bg-cover bg-center'
         
        >
          <Updates updates={updates} />
        </div>
      </div>
    </>
  );
};

export default Updatespage;
