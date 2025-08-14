import React from 'react'
import enthusiast from "../assets/enthusiast.png"
import project from "../assets/project-management.png"
import taskm from '../assets/task-management.png'
import vision from "../assets/vision.png"
import partner from "../assets/partners.png";
const Values = () => {
    const values = [
    {
      title: "Visual Excellence",
      description:
        "We strive to capture moments that tell compelling stories through the lens of creativity and technical mastery.",
      img: vision,
    },
    {
      title: "Community First",
      description:
        "Building a supportive environment where photographers of all levels can learn, grow, and inspire each other.",
      img:partner ,
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technology and digital art forms to push the boundaries of traditional photography.",
      img: project,
    },
    {
      title: "Passion Driven",
      description:
        "Every click, every frame, every pixel is driven by our collective passion for the art of photography.",
      img:enthusiast,
    },
  ];
  return (
    <>
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
   
    </>
  )
}

export default Values
