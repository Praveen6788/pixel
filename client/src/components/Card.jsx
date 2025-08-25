import React from 'react';

const Card = ({ carddetails: { name, position, branch ,imgUrl } }) => {
     
  return (
    <div className='w-[60vw] h-[80vw]  md:w-[18vw] md:h-[25vw]  text-start rounded-md bg-[rgba(112,112,112,0.16)] backdrop-blur-[100px] pb-2 items-center'
    >

     <img 
  src={imgUrl} 
  alt={name}  
  className="bg-gray-700 w-[90%] h-[55%] mx-auto my-4 rounded-md hover:rounded-full transition ease-in-out duration-10000 object-cover borde-1 border-yellow-500 border"
/>

      <div className='w-full px-2  mx-auto text-center min-w-content'>
        <h1 >Name : {name}</h1>
        <h1>Role   : {position}</h1>

        <div>
          <h1>Branch: {branch}</h1>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
