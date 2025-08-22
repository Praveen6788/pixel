import axios from 'axios';
import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const UpdateTeam = () => {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    name: '',
    imgUrl: null,
    position: '',
    branch: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formdata,
      imgUrl: e.target.files[0], // store File object
    });
  };



const upload = async (formdata) => {
  const data = new FormData();
  data.append('file', formdata.imgUrl); // ✅ use the right field
  data.append('upload_preset', 'images_preset');

  try {
    const cloudName = import.meta.env.VITE_CLOUDNAME;
    const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const res = await axios.post(api, data);
    const { url } = res.data;
    return url;
  } catch (e) {
    console.error('Error uploading to Cloudinary:', e);
    return null;
  }
};



const handlesubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const imgurl = await upload(formdata);

    if (!imgurl) {
      setLoading(false);
      return;
    }

    const finalData = {
      ...formdata,
      imgUrl: imgurl // or change key to imgUrl if preferred
    };

    console.log("Final Form Data to Submit:", finalData);

    // Optionally, send finalData to your API here...
    await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/team`, {
        data:finalData
      });

    

  } catch (e) {
    console.error("Submission error:", e);
  } finally {
    setLoading(false);
  }
};


  return (
    <section className='px-10 md:py-15 border-1 h-screen flex justify-center md:items-center p-10'>
      <form
        className='border border-white h-[90%] w-[90%] md:w-1/2 flex flex-col gap-5 p-10 rounded-lg'
        onSubmit={handlesubmit}
        method='post'
      >
        <div className='flex flex-col gap-4'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formdata.name}
            className='border-1 p-2 border-white h-[40px]'
            required
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor='imgUrl'>Upload Image</label>
          <input
            type='file'
            id='img'
            name='img'
            className='border-1 border-white h-[40px] p-2'
            onChange={handleImageChange}
            accept='image/*'
            required
            
          />
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            name='position'
            id='position'
            value={formdata.position}
            className='border-1 p-2 border-white h-[40px]'
            required
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor='branch'>Branch</label>
          <input
            type='text'
            name='branch'
            id='branch'
            value={formdata.branch}
            className='border-1 p-2 border-white h-[40px]'
            required
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className='bg-yellow-500 border-1 border-white h-[40px] w-[100px] text-black font-semibold mx-auto p-2'
        >
          Submit
        </button>

        {loading && <BeatLoader color='red' />}
      </form>
    </section>
  );
};

export default UpdateTeam;
