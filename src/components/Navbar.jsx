import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-zinc-900 bg-opacity-70 backdrop-blur-md text-white flex justify-around py-4 shadow-lg rounded-full mb-4">
      <div className="flex items-center space-x-8">
        <a href="#home" className="flex flex-col items-center focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 4v6H9m-4-6h.01"></path>
          </svg>
          <span className="text-sm">Home</span>
        </a>
        <a href="#our-work" className="flex flex-col items-center focus:outline-none">
          <span className="text-sm">Our Work</span>
        </a>
        <a href="#about" className="flex flex-col items-center focus:outline-none">
          <span className="text-sm">About</span>
        </a>
        <a href="#our-clients" className="flex flex-col items-center focus:outline-none">
          <span className="text-sm">Our Clients</span>
        </a>
        <a href="#branding" className="flex flex-col items-center focus:outline-none">
          <span className="text-sm">Branding</span>
        </a>
        <a href="#lets-talk" className="flex flex-col items-center focus:outline-none bg-gray-700 px-6 py-4 rounded-full">
          <span className="text-sm">Let's talk</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
