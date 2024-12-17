import React from "react";

const Contact = () => {
  return (
<section id="contact" className="bg-white dark:bg-gray-800 py-12 px-6 text-center transition duration-300">
  <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">Get in Touch</h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    I’m always open to discussing new opportunities, projects, or collaborations.
  </p>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
    <a
      href="mailto:doug.revelljr@gmail.com"
      className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
    >
      Email Me
    </a>
    <a
      href="https://www.linkedin.com/in/doug-revell"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 dark:bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-300"
    >
      Connect on LinkedIn
    </a>
  </div>
</section>

  );
};

export default Contact;
