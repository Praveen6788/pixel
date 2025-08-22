import React, { useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

const UploadUpdates = () => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    Eventtype: '',
    EventName: '',
    imgUrl:'',
    Description: '',
    date: '',
    startTime: '',
    endTime: '',
    place:''
  });

  const uploadFile = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");

    try {
      const cloudName = import.meta.env.VITE_CLOUDNAME;
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (e) {
      console.error("Upload error:", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formdata);

    try {
      const imgrl = await uploadFile();
      // setFormdata({ ...formdata, imgUrl: imgrl });

      

      await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/updates`, {
        ...formdata,
        imgUrl: imgrl,
        
      });

      console.log("Successful upload");
      setImg(null);
      setFormdata({
        Eventtype: '',
        EventName: '',
        imgUrl: '',
        Description: '',
        date: '',
        startTime: '',
        endTime: '',
      });
    } catch (e) {
      console.error("Submit error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <section className="px-10 md:py-15 border-1 h-screen flex justify-center md:items-center p-10">
      <form
        className="border border-white h-[100%] w-[90%] md:w-1/2 flex flex-col gap-5 p-10 rounded-lg"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="Eventtype">Event Type</label>
          <select
            name="Eventtype"
            id="Eventtype"
            value={formdata.Eventtype}
            className="border-1 p-2 border-white h-[40px] text-yellow-900"
            required
            onChange={handleChange}
          >
            <option value="">-- Select Event Type --</option>
            <option value="Workshop">Workshop</option>
            <option value="Competition">Competition</option>
            <option value="Seminar">Seminar</option>
            <option value="Community Meet">Community Meet</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="EventName">Event Name</label>
          <input
            type="text"
            name="EventName"
            id="EventName"
            value={formdata.EventName}
            className="border-1 p-2 border-white h-[40px]"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="imgUrl">Upload Image</label>
          <input
            type="file"
            id="img"
            name="img"
            className="border-1 border-white h-[40px] p-2"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name="Description"
            id="Description"
            value={formdata.Description}
            className="border-1 p-2 border-white h-[40px]"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col md:flex-row mt-2 gap-4 justify-center items-center">
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formdata.date}
            className="border-1 p-2 border-white h-[40px]"
            required
            onChange={handleChange}
          />
          <label htmlFor="date">Place</label>
          <input
            type="text"
            name="place"
            id="place"
            value={formdata.place}
            className="border-1 p-2 border-white h-[40px]"
            required
            onChange={handleChange}
          />

          
        </div>

        <div  className="flex  mt-2 gap-6 md:gap-4 justify-center items-center">
          <label htmlFor="startTime">Event Starts</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            className="border-1 p-2 border-white h-[40px]"
            value={formdata.startTime}
            required
            onChange={handleChange}
          />

          <label htmlFor="endTime">Event Ends</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            className="border-1 p-2 border-white h-[40px]"
            value={formdata.endTime}
            required
            onChange={handleChange}
          />

        </div>

        <button
          type="submit"
          className="bg-yellow-500 border-1 border-white h-[40px] w-[100px] text-black font-semibold mx-auto p-2"
        >
          Submit
        </button>

        {loading && <BeatLoader color="red" />}
      </form>
    </section>
  );
};

export default UploadUpdates;
