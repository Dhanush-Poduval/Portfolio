import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

const About = () => {
  return (
    <section className="py-16 bg-gray-100 bg-gradient-to-r from-orange-500 to-yellow-200 h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-6">About Me</h2>
      <p className="text-2xl max-w-3xl mx-auto mb-8 text-center leading-relaxed">
        I'm a web developer with experience in building modern, responsive websites. I specialize in front-end development using React, JavaScript, and Tailwind CSS. I love solving problems and constantly improving my skills.
      </p>
      <div className="flex space-x-6">
      
        <a
          href="https://github.com/Dhanush-Poduval"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition duration-300 text-4xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>


        <a
          href="https://instagram.com/dhanushpoduval"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition duration-300 text-4xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default About;
