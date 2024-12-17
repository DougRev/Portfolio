import React from "react";

const Footer = () => {
  return (
<footer className="bg-gray-900 text-white dark:bg-gray-800 text-center py-6 transition duration-300">
  <p className="text-sm">
    © {new Date().getFullYear()} Doug Revell II. All Rights Reserved.
  </p>
  <div className="flex justify-center space-x-4 mt-2">
    <a
      href="https://github.com/DougRev"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 dark:hover:text-blue-500 transition duration-300"
    >
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/doug-revell"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 dark:hover:text-blue-500 transition duration-300"
    >
      LinkedIn
    </a>
    <a
      href="mailto:doug.revelljr@gmail.com"
      className="hover:text-blue-400 dark:hover:text-blue-500 transition duration-300"
    >
      Email
    </a>
  </div>
</footer>

  );
};

export default Footer;
