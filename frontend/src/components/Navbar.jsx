import React, { useState, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Hamburger menu button */}
          <button className="text-yellow-400 hover:text-yellow-300 md:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {/* Navbar buttons */}
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="text-yellow-400 hover:text-yellow-300">Főoldal</a></li>
            <li><a href="#" className="text-yellow-400 hover:text-yellow-300">Rólunk</a></li>
            <li><a href="#" className="text-yellow-400 hover:text-yellow-300">Szolgáltatásaink</a></li>
            <li><a href="#" className="text-yellow-400 hover:text-yellow-300">Kapcsolat</a></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-yellow-400 text-xl font-bold"><img src="/Logo.png" alt="Your Logo" className='w-25 h-8' /></div>
        </div>
      </div>
      {/* Render menu items conditionally based on menu visibility */}
      <div ref={menuRef} className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black fixed top-0 left-0 h-full w-56 py-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="block text-center">
          <li><a href="#" className="block py-4 text-yellow-400 hover:text-yellow-300">Home</a></li>
          <li><a href="#" className="block py-4 text-yellow-400 hover:text-yellow-300">About</a></li>
          <li><a href="#" className="block py-4 text-yellow-400 hover:text-yellow-300">Services</a></li>
          <li><a href="#" className="block py-4 text-yellow-400 hover:text-yellow-300">Contact</a></li>
        </ul>
        <button className="absolute top-4 left-4 w-6 h-6 bg-black text-yellow-400 hover:text-yellow-300" onClick={handleCloseMenu}>
          <svg className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
