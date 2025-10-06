import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "animate.css";

const Gallerypage = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // 👈 controls how many images to show

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/image`)
      .then((res) => {
        console.log("API success:", res.data.data);
        setGallery(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching images:", err);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    // 👇 Show all images when clicked
    setVisibleCount(gallery.length);
  };

  return (
    <>
      <div className="p-15 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold text-center mb-10">GALLERY</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[70vw] md:w-90 h-[280px] border rounded-md overflow-hidden bg-gray-700"
                >
                  <div className="w-full h-full bg-gray-900 animate__animated animate__flash animate__infinite animate__slow"></div>
                </div>
              ))
            : gallery.slice(0, visibleCount).map((a, index) => (
                <div
                  key={a._id || index}
                  className="w-[70vw] md:w-72 h-[280px] border rounded-md overflow-hidden"
                >
                  <img
                    src={a.imgUrl}
                    alt={`gallery-img-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
        </div>
      </div>

      {/* 👇 Only show button if more images are available */}
      {gallery.length > visibleCount && (
        <div className="text-center w-full px-6 mt-6">
          <button
            className="bg-white px-4 py-2 rounded-md text-black shadow hover:bg-gray-100 transition"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Gallerypage;
