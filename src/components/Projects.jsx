"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projectImages, setProjectImages] = useState([]);

  useEffect(() => {
    const fetchProjectImages = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos/random", {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          },
          params: {
            query: "technology", // Bisa diubah sesuai kategori proyek
            count: 6, // Ambil 6 gambar
            orientation: "landscape",
          },
        });

        setProjectImages(response.data.map((image) => image.urls.regular));
      } catch (error) {
        console.error("Error fetching project images:", error);
      }
    };

    fetchProjectImages();
  }, []);

  return (
    <section id="project">
      <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
        <h2 className="text-3xl font-bold text-center md:text-5xl">Portfolio</h2>
        <p className="mt-4 mb-8 text-sm text-center text-gray-500 msm:text-base md:mb-12 lg:mb-16">Lorem ipsum dolor sit amet elit ut aliquam</p>
        <div className="grid gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3">
          {projectImages.length > 0 ? (
            projectImages.map((imageUrl, index) => (
              <a key={index} href="#" className="flex flex-col p-4 rounded-md lg:p-2">
                <img src={imageUrl} alt={`Project ${index + 1}`} className="inline-block object-cover mb-3 rounded-lg h-60 lg:w-96" />
                <p className="mb-1 font-bold text-center">Project Name {index + 1}</p>
                <p className="text-sm text-center text-gray-500">Web Design</p>
              </a>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading images...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
