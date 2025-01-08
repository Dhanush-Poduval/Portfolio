import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "A web app built with React.", link: "#" },
    { title: "Project 2", description: "A mobile-responsive website.", link: "#" },
    { title: "Project 3", description: "A portfolio site using React and Tailwind.", link: "#" },
    { title: "Project 4", description: "A rock paper scissor game.", link: "#" },
    { title: "Project 5", description: "A weather app.", link: "#" },
    { title: "Project 6", description: "A youtube clone.", link: "#" }
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-4">{project.description}</p>
            <a href={project.link} className="text-yellow-500 mt-4 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
