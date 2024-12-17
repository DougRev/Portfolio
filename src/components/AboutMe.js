import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-800 py-12 px-6 transition duration-300"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="/images/me.jpg"
            alt="About Me"
            className="w-48 h-48 object-cover object-top rounded-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m a reliable and capable full-stack developer with a proven ability to multitask and deliver projects on time.
            With experience across front-end and back-end technologies, I enjoy solving real-world problems through clean and
            efficient code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            From building dynamic applications to redesigning large-scale WordPress websites, I thrive in creating impactful
            solutions for businesses and clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
