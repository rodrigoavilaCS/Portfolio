import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deepSpace/95 backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="group relative">
            <div className="text-2xl font-bold relative">
              <span className="animate-signature-draw inline-block">
                <span className="bg-gradient-to-r from-orange-500 to-cosmicBlue text-transparent bg-clip-text">
                  RA
                </span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-cosmicBlue group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-cosmicBlue transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-cosmicBlue transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-cosmicBlue transition-colors"
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
