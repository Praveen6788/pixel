import React from 'react'
import { useState } from 'react'
import { BeatLoader } from 'react-spinners'
import axios from 'axios';

const Upload = (timestamp,signature) => {
  const [img, setimg] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", img);
    // data.append("upload_preset", 'images_preset');
    data.append("timestamp".timestamp)

    data.append("signature",signature)
    data.append("api_key",import.meta.env.REACT_APP_CLOUDNARY_URL)

    try {
      const cloudName = import.meta.env.VITE_CLOUDNAME;

      const resourceType = 'image';
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      console.log(api)
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (e) {
      console.error("Upload error:", e);
    }
  };


  const getsignatureUpload = async (folder) => {
    try {
      const res = await axios.post(`${import.meta.env.REACT_APP_BACKEND_BASE_URL}/api/sign-upload`,{folder})
      return res.data
 
    }
    catch (e) {
      console.log(e)

    }

  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const imgUrl = await uploadFile('image');
      // console.log(imgUrl)

      await axios.post(`${import.meta.env.REACT_APP_BACKEND_BASE_URL}/api/image`, {
        imageurl: imgUrl,
      });







      const { timestamp: imgTimestamp, signature: imgSignature } = await getsignatureUpload('images')

      const imgUrl = await uploadFile('image',imgTimestamp,imgSignature);

      

      console.log("sucessful mg")
      setLoading(false)


      setimg(null);
    } catch (e) {
      console.error("Submit error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='px-10  md:py-15 border-1 h-full h-screen flex justify-center md:items-center p-10'>

        <form className="border border-white h-[90%] md:h-[90%] w-[90%] md:w-1/2  flex flex-col gap-5 md:gap-10 p-10 rounded-lg " onSubmit={handlesubmit} method='post' >


          <div className='flex flex-col gap-4  '>
            <label htmlFor="imagelink">Upload Image </label>
            <input type="file" id="imagelink" name='imagelink' className='border-1 border-white h-[40px] p-2' required onChange={(e) => {
              setimg(prev => e.target.files[0])

            }}
              accept='image/'
            />

          </div>

          {/* 
          <div className='flex flex-col gap-4  '>
            <label htmlFor="image label">image Label</label>
            <input type="text " name="imagelabel" className='border-1  p-2 border-white h-[40px]' required />
          </div> */}
          {/* <div className='flex flex-col gap-4  '>
            <label htmlFor="image label">User Name </label>
            <input type="text " name="imagelabel" className='border-1 p-2  border-white h-[40px]' required />
          </div>
          <div className='flex flex-col gap-4  '>
            <label htmlFor="image label">Password</label>
            <input type="text " name="imagelabel" className='border-1  p-2 border-white h-[40px]' required />
          </div> */}









          <button type='submit' className='bg-yellow-500 border-1 border-white h-[40px] w-[100px] text-black font-semibold center mx-auto p-2'>
            Submit
          </button>

          {
            loading && <BeatLoader
              color='red' />
          }


        </form>




      </section>
    </>
  )
}

export default Upload
