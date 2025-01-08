import React from 'react';

const Navbar = ({ setCurrentSection }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li
          className="cursor-pointer hover:underline"
          onClick={() => setCurrentSection('home')}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:underline"
          onClick={() => setCurrentSection('about')}
        >
          About
        </li>
        <li
          className="cursor-pointer hover:underline"
          onClick={() => setCurrentSection('projects')}
        >
          Projects
        </li>
        <li
          className="cursor-pointer hover:underline"
          onClick={() => setCurrentSection('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
