import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/rcb-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-rcbRed p-4 text-white">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <Link to="/" className="hover:text-rcbBrightRed">
            <img src={logo} alt="RCB Logo" className="h-12 md:h-16 lg:h-20 mr-2" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-rcbBrightRed border-rcbBrightRed hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <ul className="text-center lg:text-left lg:flex-grow lg:flex lg:justify-end">
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/schedule" className="hover:text-rcbBrightRed">Match Schedule</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/players" className="hover:text-rcbBrightRed">Players</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/news" className="hover:text-rcbBrightRed">News</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/statistics" className="hover:text-rcbBrightRed">Stats</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0">
              <Link to="/fan-engagement" className="hover:text-rcbBrightRed">Fan Engagement</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
