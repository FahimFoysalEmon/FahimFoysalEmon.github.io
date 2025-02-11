import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fahim Foysal Emon. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
