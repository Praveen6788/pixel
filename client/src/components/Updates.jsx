import React from 'react'
import { useLocation } from 'react-router-dom'

const Updates = ({ updates }) => {
  const location = useLocation();
  let arr = updates;
   const k = [
    {
      img: "https://avatars.githubusercontent.com/u/140039820?v=4",
      title: "Nature Through the Lens - Photo Contest",
      mode: "Online",
      type: "Contest"
    },
    {
      img: "https://example.com/images/lightroom.jpg",
      title: "Lightroom Workshop",
      mode: "Offline",
      type: "Workshop"
    },
    {
      img: "https://example.com/images/night.jpg",
      title: "Night Walk",
      mode: "Offline",
      type: "Event"
    },
    {
      img: "https://example.com/images/portrait.jpg",
      title: "Portrait Challenge",
      mode: "Online",
      type: "Contest"
    },
    {
      img: "https://example.com/images/gear.jpg",
      title: "Gear Talk",
      mode: "Online",
      type: "Workshop"
    }
  ];
  console.log(updates)

  if (location.pathname === "/home" || location.pathname === "/") {
    
    return (
      <section className="h-[62vh] p-8">
      <h1 className="text-3xl md:text-3xl mb-5 font-semibold text-start">
        Recent Updates
      </h1>

      <div className="h-[100%] md:h-[90%]   border-white overflow-auto md:overflow-hidden">
        <div className="flex   md:grid md:grid-rows-1 flex-col md:grid-flow-col md:gap-20 overflow-x-auto wrap scroll-hidden">
          {k.map((member, index) => (
            <div
              key={index}
              className="border-white border-1 h-[25vh] w-[80vw] my-10 md:h-[300px] md:w-[530px] bg-cover bg-no-repeat bg-center rounded-md"
              style={{ backgroundImage: `url(${member.img})` }}
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
            style={{ backgroundImage: `url(${member.img})` }}
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
