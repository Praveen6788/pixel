import React from 'react';
import Card from '../components/Card';

const Teampage = () => {
  const teamdetails = [
    {
      name: "Alice Johnson",
      position: "Photographer",
      joinedYear: 2018,
      picsCaptured: 1340
    },
    {
      name: "Brian Smith",
      position: "Editor",
      joinedYear: 2019,
      picsCaptured: 560
    },
    {
      name: "Carla Ruiz",
      position: "Lead Photographer",
      joinedYear: 2017,
      picsCaptured: 2100
    },
    {
      name: "Derek Lee",
      position: "Drone Operator",
      joinedYear: 2021,
      picsCaptured: 890
    },
    {
      name: "Derek Lee",
      position: "Drone Operator",
      joinedYear: 2021,
      picsCaptured: 890
    },
    {
      name: "Derek Lee",
      position: "Drone Operator",
      joinedYear: 2021,
      picsCaptured: 890
    },
    {
      name: "Derek Lee",
      position: "Drone Operator",
      joinedYear: 2021,
      picsCaptured: 890
    },
    {
      name: "Eva Mendes",
      position: "Assistant",
      joinedYear: 2020,
      picsCaptured: 320
    }
  ];
  const a = teamdetails.slice(0,2)
  const b =teamdetails.slice(2)
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
          {a.map((member, index) => (
            <Card key={index} carddetails={member} />
          ))}
        </div>


        <h1 className='text-4xl font-semibold mt-8'>CORE TEAM</h1>


        <div className='grid grid-col-1 md:grid-cols-3 place-items-center gap-x-50 gap-y-15 p-15'>
          {b.map((member, index) => (
            <Card key={index} carddetails={member} />
          ))}
        </div>

      </div>



    </div>
  );
};

export default Teampage;
