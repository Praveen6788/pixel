import React from 'react'

const Gallerypage = () => {
  const items = [
  {
    img: "https://source.unsplash.com/random/400x300?camera",
    title: "Capture Moments"
  },
  {
    img: "https://source.unsplash.com/random/400x300?nature",
    title: "Nature's Beauty"
  },
  {
    img: "https://source.unsplash.com/random/400x300?city",
    title: "Urban Vibes"
  },
  {
    img: "https://source.unsplash.com/random/400x300?portrait",
    title: "Human Expression"
  },
  {
    img: "https://source.unsplash.com/random/400x300?wildlife",
    title: "Wild Encounters"
  },
  {
    img: "https://source.unsplash.com/random/400x300?street",
    title: "Street Stories"
  },
  {
    img: "https://source.unsplash.com/random/400x300?sunset",
    title: "Golden Hours"
  },
  {
    img: "https://source.unsplash.com/random/400x300?abstract",
    title: "Creative Frames"
  }
];

  return (
    <>
    <div className='p-15 flex flex-col justify-center items-center' >
      <h1 className='text-5xl font-semibold  text-center mb-10'>
        GALLERY
      </h1>

      <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-3 gap-20'>
        {
          items.map((a,index)=> (
            <div className=' w-[70vw] md:w-70 h-100%  h-50 lg: boder border-1 rounded-md '>
              <img src={a.img}
               alt=""  key={index}/>

            </div>


          ))
        }



      </div>
      
      
    </div>
    <div className='text-end w-full px-6'>
        <button className='bg-white px-4 py-2 rounded-md text-black'>
        Load more
      </button>

      </div>
    </>
  )
}

export default Gallerypage
