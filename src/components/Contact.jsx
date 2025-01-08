import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="text-center pt-20 text-5xl font-bold text-black">
         Contact information
      </div>
      <section className="h-screen flex items-center justify-center mt-0">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex mt-0">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-500 flex flex-col items-center justify-center py-12 px-8">
          <FaEnvelope className="text-6xl mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Send an Email</h3>
          <p className="mb-6 text-center text-white/80">
            Feel free to reach out to me via email for collaboration or queries!
          </p>
          <a
            href="mailto:dhanushpoduval@gmail.com"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Send Email
          </a>
        </div>

        {/* Divider */}
        <div className="w-[2px] bg-gray-300"></div>

        {/* Right Section */}
        <div className="w-1/2 bg-green-500 flex flex-col items-center justify-center py-12 px-8">
          <FaWhatsapp className="text-6xl mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Chat on WhatsApp</h3>
          <p className="mb-6 text-center text-white/80">
            Connect with me instantly through WhatsApp for quick conversations!
          </p>
          <a
            href="https://wa.me/6366518776" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      </section>
      
    </section>
  );
};

export default Contact;
