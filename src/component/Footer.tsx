import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-100 py-6">
      <div className="lg:max-w-7xl max-w-lg mx-auto px-4 flex justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fahim Foysal Emon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
