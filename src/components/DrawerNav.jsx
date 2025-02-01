/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./DrawerNav.css";

const DrawerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Drawer Toggle Button */}
      <div className="toggleDrawerIcon">
        <button className="toggleDrawer" onClick={toggleDrawer}>
          <i className="fa fa-bars fa-2x"></i>
        </button>
      </div>

      {/* Right-side Drawer */}
      <div className={`drawer-right ${isOpen ? "open" : ""}`}>
        <div className="cross text-right">
          <button className="toggleDrawer" onClick={toggleDrawer}>
            <i className="fa fa-times-circle fa-2x"></i>
          </button>
        </div>
        <h2>Navigate</h2>
        <nav>
          <ul className="nav nav-pills nav-stacked">
            <li><a href="#home"><i className="fa fa-home"></i> <span>Home</span></a></li>
            <li><a href="#about"><i className="fa fa-bookmark"></i> <span>About</span></a></li>
            <li><a href="#services"><i className="fa fa-tasks"></i> <span>Login</span></a></li>
            <li><a href="#create"><i className="fa fa-gear"></i> <span>Create</span></a></li>
            <li><a href="#search"><i className="fa fa-heart"></i> <span>Search</span></a></li>
            <li><a href="#repo"><i className="fa fa-thumbs-up"></i> <span>Repository</span></a></li>
            <li><a href="#contact"><i className="fa fa-phone-square"></i> <span>Contact</span></a></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="social">
          <h2>Stay Connected</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-3x"></i>  {/* ✅ Correct Class Name */}
              </a>
            </li>
            <li>
              <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer">
                <i className="fab fa-github fa-3x"></i>  {/* ✅ Correct Class Name */}
              </a>
            </li>
            <li>
              <a href="https://www.your-website.com" target="_blank" rel="noreferrer">
                <i className="fa fa-globe fa-3x"></i>
              </a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">
                <i className="fa fa-envelope-square fa-3x"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default DrawerNav;
