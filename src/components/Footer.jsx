import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {currentYear} Dava Ganteng Se-UNJ. Built Porto with Love & Heart, Muachhh.
        </p>
      </div>
    </footer>
  );
};

export default Footer;