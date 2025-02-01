import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/projects") // Ganti dengan API proyek yang sesuai
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="project" className="py-20 projects">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold">My Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-4 bg-white rounded-lg shadow-lg project">
              <img src={project.image} alt={project.name} className="object-cover w-full h-40 mb-4" />
              <h3 className="text-2xl">{project.name}</h3>
              <p className="text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
