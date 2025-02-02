/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css"; // Import the styles


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">SYLLABYE</a>

        {/* Hamburger menu for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
