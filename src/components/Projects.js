import React from "react";
import projects from "../assets/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 py-12 px-6 transition duration-300"
    >
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition duration-300 flex flex-col"
          >
            {/* Project Thumbnail */}
            <img
              src={project.image || "/images/placeholder.png"} // Placeholder for missing images
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Project Details */}
            <div className="p-4 flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                Tech: {project.tech}
              </p>
            </div>

            {/* View Project Button */}
            <div className="p-4 flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
