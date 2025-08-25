import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Gallerypage = () => {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/image`)
      .then((res) => {
        console.log("API success:", res.data.data);
        setGallery(res.data.data || []);  // ✅ since response is already an array
      })
      .catch((err) => {
        console.log("Error fetching images:", err);
      })
  }, [])

  return (
    <>
      <div className='p-15 flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-semibold text-center mb-10'>
          GALLERY
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
          {
            gallery.map((a, index) => (
              <div 
                key={a._id || index} 
                className='w-[70vw] md:w-72 h-[300px] border rounded-md overflow-hidden'
              >
                <img 
                  src={a.imgUrl} 
                  alt={`gallery-img-${index}`} 
                  className='w-full h-full object-cover'
                />
              </div>
            ))
          }
        </div>
      </div>

      {gallery.length >6 && <div className='text-end w-full px-6 mt-6'>
        <button className='bg-white px-4 py-2 rounded-md text-black shadow'>
          Load more
        </button>
      </div>}
    </>
  )
}

export default Gallerypage
