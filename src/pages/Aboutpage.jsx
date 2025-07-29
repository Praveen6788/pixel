import React from 'react';
import logo from "../assets/logo.svg";

const Aboutpage = () => {
  const stats = [
    {
      img: "", // Replace with actual image URL
      count: "500+",
      label: "Active Members",
    },
    {
      img: "",
      count: "100+",
      label: "Workshops Conducted",
    },
    {
      img: "",
      count: "50+",
      label: "Projects Completed",
    },
    {
      img: "",
      count: "10+",
      label: "Years Running",
    },
  ];

  const values = [
    {
      title: "Visual Excellence",
      description:
        "We strive to capture moments that tell compelling stories through the lens of creativity and technical mastery.",
      img: "/images/visual-excellence.png",
    },
    {
      title: "Community First",
      description:
        "Building a supportive environment where photographers of all levels can learn, grow, and inspire each other.",
      img: "/images/community-first.png",
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technology and digital art forms to push the boundaries of traditional photography.",
      img: "/images/innovation.png",
    },
    {
      title: "Passion Driven",
      description:
        "Every click, every frame, every pixel is driven by our collective passion for the art of photography.",
      img: "/images/passion-driven.png",
    },
  ];

  return (
    <div className="bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-black bg-blend-overlay bg-cover text-white">
      {/* ABOUT PIXEL */}
      <section className="flex flex-col items-center px-6 md:px-20 py-16 gap-10 text-center">
        <h1 className="text-4xl md:text-7xl font-semibold">ABOUT PIXEL</h1>
        <h2 className="text-lg md:text-xl max-w-2xl text-gray-400">
          Where Digital Art Meets Traditional Photography in the Heart of Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 w-full">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl mb-5 text-start font-semibold">OUR STORY</h2>
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
            <img src={logo} alt="Logo" className="w-64 h-64 rounded-full" />
            <p className="text-xl max-w-md leading-relaxed text-center text-gray-300">
              Established as the official photography club of Institute of Aeronautical Engineering, fostering creativity and technical excellence since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="flex flex-col items-center px-6 md:px-20 py-20 ">
        <h2 className="text-3xl md:text-4xl text-center mb-22 font-semibold">BY THE NUMBERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-25 md:gap-10  w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <img src={stat.img} alt={stat.label} className="w-12 h-12" />
              <h3 className="text-3xl font-semibold">{stat.count}</h3>
              <p className="text-base text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="px-10 md:px-20 py-20 ">
        <h2 className="text-3xl md:text-4xl text-center mb-22 font-semibold">OUR VALUES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 md:gap-40">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-5">
              <img src={value.img} alt={value.title} className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
