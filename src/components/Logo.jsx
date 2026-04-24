import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img 
        src="/imglogo-removebg-preview.svg" 
        alt="Vanilla Maison Logo" 
        className="w-20 md:w-24 h-auto object-contain"
        style={{ filter: 'brightness(0)' }}
      />
    </div>
  );
};

export default Logo;

