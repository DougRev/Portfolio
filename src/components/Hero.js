import React, { useEffect, useState } from "react";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100); // Delay for smoother entry
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-600 dark:from-gray-800 dark:to-gray-900"></div>

      {/* Content with Fade-In */}
      <div
        className={`text-center transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl font-bold text-white dark:text-blue-400 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-100 dark:text-gray-300 mb-6">
          I’m a reliable full-stack developer capable of multitasking to deliver projects on time.
        </p>
        <a
          href="#projects"
          className="bg-white dark:bg-blue-700 text-blue-600 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-blue-800 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
