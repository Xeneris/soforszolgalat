import React, { useState } from 'react';
import { Menu } from 'react-feather'; // Importing hamburger menu icon from Feather Icons
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickMain = () => {
    navigate('/');
  };

  const handleClickAbout = () => {
    navigate('/rolunk');
  };

  const handleClickAszf = () => {
    navigate('/aszf');
  };

  return (
    <nav className="bg-black py-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Hamburger menu button with icon */}
          <button className="text-yellow-400 hover:text-yellow-300 md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
          {/* Navbar buttons */}
          <ul className="hidden md:flex space-x-4">
            <li><a href="" onClick={handleClickMain} className="text-yellow-400 hover:text-yellow-300">Főoldal</a></li>
            <li><a href="" onClick={handleClickAbout}  className="text-yellow-400 hover:text-yellow-300">Rólunk</a></li>
            <li><a href="" onClick={handleClickAszf} className="text-yellow-400 hover:text-yellow-300">ÁSZF</a></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-yellow-400 text-xl font-bold"><img src="/logo.png" alt="Your Logo" className='w-10 h-10' /></div>
        </div>
      </div>
      {/* Render menu items conditionally based on menu visibility */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black fixed top-0 left-0 h-full w-56 py-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-30`}>
        <ul className="block text-center">
        <li><a href="" onClick={handleClickMain} className="text-yellow-400 hover:text-yellow-300">Főoldal</a></li>
            <li><a href="" onClick={handleClickAbout} className="text-yellow-400 hover:text-yellow-300">Rólunk</a></li>
            <li><a href="" onClick={handleClickAszf} className="text-yellow-400 hover:text-yellow-300">ÁSZF</a></li>
        </ul>
        <button className="absolute top-4 left-4 text-yellow-400 hover:text-yellow-300" onClick={handleCloseMenu}>
          {/* Close button icon (using an 'X' character) */}
          <span className="text-xl">&times;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

