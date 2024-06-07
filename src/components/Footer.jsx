import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rcbRed text-white py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold">Royal Challengers Bangalore Fan Page</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/" className="hover:text-rcbBrightRed">Home</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/about-us" className="hover:text-rcbBrightRed">About Us</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/schedule" className="hover:text-rcbBrightRed">Matches</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/players" className="hover:text-rcbBrightRed">Players</Link>
            </li>
            <li className="block lg:inline-block lg:mt-0 mr-4">
              <Link to="/contact-us" className="hover:text-rcbBrightRed">Contact Us</Link>
            </li>
          {/* <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Matches</a>
          <a href="#" className="hover:text-gray-300">Players</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a> */}
        </div>
        <div className="text-gray-400">
          <p>© 2024 Royal Challengers Bangalore Fan Page. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
