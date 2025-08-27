import React from 'react';
import logo from "../assets/pixels.jpg";
import Stats from '../components/Stats';
import Values from '../components/Values';
import "animate.css"
const Aboutpage = () => {



  return (
    <div className="bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-black bg-blend-overlay bg-cover text-white">
      {/* ABOUT PIXEL */}
      <section className="flex flex-col items-center px-6 md:px-20 py-16 gap-10 text-center">
        <h1 className="text-4xl md:text-7xl font-semibold  font-poppins ">ABOUT <span className='text-yellow-500 font-bold'>PIXEL</span></h1>
        <h2 className="text-lg md:text-xl max-w-2xl text-gray-400">
          Where Digital Art Meets Traditional Photography in the Heart of Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 w-full">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl mb-5 text-start font-semibold">OUR <span className='text-yellow-500'>STORY</span></h2>
            <p className="text-base leading-relaxed text-start text-gray-300">
              PIXEL is the premier photography club of the Institute of Aeronautical Engineering (IARE), where creativity meets technology in the most spectacular way possible.
              <br /><br />
              Founded with a vision to revolutionize visual storytelling, we've created a cyberpunk haven where traditional photography techniques blend seamlessly with cutting-edge digital art forms. Our community thrives on the intersection of analog beauty and digital innovation.
              <br /><br />
              From capturing the raw essence of campus life to creating mind-bending digital masterpieces, PIXEL has become the creative powerhouse that pushes the boundaries of what's possible with a camera and imagination.
              <br /><br />
              We believe that every frame tells a story, every pixel holds potential, and every member brings a unique perspective that enriches our collective vision.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              src={logo}
              alt="Logo"
              className="w-64 h-64 rounded-full animate__animated animate__rotateIn animate__delay-4d    animate__slower "
            />
            <p className="text-xl max-w-md leading-relaxed text-center text-gray-300">
              Established as the official photography club of Institute of Aeronautical Engineering, fostering creativity and technical excellence since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <Stats />




      {/* OUR VALUES */}
      <Values />

    </div>
  );
};

export default Aboutpage;
