import React from 'react'
import { useLocation } from 'react-router-dom'


const Updates = () => {
  const Updates = [
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
  ]



const location = useLocation();
  let arr = Updates
  if (location.pathname === "/home") {
    arr = arr.slice(0, 4)
    return(
      <section className="h-[62vh]  p-10 ">
        <h1 className="text-3xl md:text-3xl text-center mb-10 font-semibold text-start ">
          Recent Updates
        </h1>
        <div>

        </div>
        <div className='h-[80%] md:h-[90%] w-full border-white overflow-auto md:overflow-hidden  '>
          <div className=" flex md:grid md:grid-rows-1 flex-col md:grid-flow-col  md:gap-20 overflow-x-auto wrap scroll-hidden ">
             {arr.map((member, index) => (
          <div
            key={index}
            className="border-white border-1 h-[25vh] w-[80vw] my-10 md:h-[300px] md:w-[530px]   bg-contain rounded-md"
            style={{ backgroundImage: `url(${member.img})` }}
          >
            <div className="bg-black/50 text-white p-2 rounded-b-md ">
              <h6>{member.title}</h6>
            </div>
          </div>
        ))}
            
          </div>

        </div>

      </section>
    )

  }
  else {




    return (
      <>
        {arr.map((member, index) => (
          <div
            key={index}
            className="w-[80%] mx-auto h-[250px] md:h-[150px] my-5 border border-white rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${member.img})` }}
          >
            <div className="bg-black/50 text-white p-2 rounded-b-md ">
              <h6>{member.title}</h6>
            </div>
          </div>
        ))}
      </>
    )
  }
}
export default Updates
