"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos/random", {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          },
          params: {
            query: "nature", // Bisa diganti kategori lain seperti "nature", "business", dll.
            orientation: "landscape",
          },
        });

        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div id="hero" className="bg-white">
      <header>
        <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Gambar dari Unsplash */}
            <div className="[grid-area:2/1/3/2] lg:[grid-area:1/1/2/2]">{imageUrl ? <img src={imageUrl} alt="Random from Unsplash" className="object-cover w-full h-full max-w-2xl rounded-lg" /> : <p>Loading image...</p>}</div>
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">The Website You Want Without The Dev Time.</h1>
              <p className="max-w-2xl mb-6 text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Example;
