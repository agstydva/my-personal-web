import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Nama */}
        <div className="text-2xl font-bold text-white">
          Agastya Dava Nurrahman<span className="text-indigo-600"></span>
        </div>

        {/* Tautan Navigasi */}
        <div className="space-x-6">
          <a href="#home" className="text-white hover:text-indigo-600 font-medium">Home</a>
          <a href="#skills" className="text-white hover:text-indigo-600 font-medium">Skills</a>
          <a href="#projects" className="text-white hover:text-indigo-600 font-medium">Projects</a>
          <a href="#contact" className="text-white hover:text-indigo-600 font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;