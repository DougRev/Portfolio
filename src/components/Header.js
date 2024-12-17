import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md transition duration-300">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Doug Revell II</div>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
