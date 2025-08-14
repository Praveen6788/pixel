import React from 'react';

const Card = ({ carddetails: { name, position, joinedYear, picsCaptured } }) => {
     
  return (
    <div className='w-[60vw] h-[80vw]  md:w-[18vw] md:h-[25vw] border border-white text-start rounded-md bg-[rgba(112,112,112,0.16)] backdrop-blur-[100px] pb-2 items-center'>

     <img src="
     " alt=""  className='bg-gray-700 w-[90%] h-[55%] mx-auto my-4 rounded-md hover:rounded-full  transition-ease'   />
      
      <div className='w-full px-4  mx-auto'>
        <h1>Name : {name}</h1>
        <h1>Role   : {position}</h1>

        <div>
          <h1>JOINED : {joinedYear}</h1>
        </div>
        <div>
          <h1>PHOTOS CAPTURED : {picsCaptured}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
