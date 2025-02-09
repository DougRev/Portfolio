import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-600 dark:from-gray-800 dark:to-gray-900"
      ></div>

      {/* Content */}
      <h1 className="text-5xl font-bold text-white dark:text-blue-400 mb-4 z-10">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-100 dark:text-gray-300 mb-6 z-10">
        I’m a reliable full-stack developer capable of multitasking to deliver projects on time.
      </p>
      <a
        href="#projects"
        className="bg-white dark:bg-blue-700 text-blue-600 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-blue-800 transition duration-300 z-10"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
