/* eslint-disable no-unused-vars */
import React from "react";
import DrawerNav from "./DrawerNav";
import "./Header.css"; // Ensure styles are imported

const Header = () => {
  return (
    <header id="header" className="content-block header-wrapper">
      {/* Drawer Navigation */}
      <DrawerNav />

      <div className="header-wrapper-inner">
        {/* Logo Centered */}
        <section className="center">
          <img src="public/images/Syllabye-White-White.png" className="logo-image" alt="Syllabye Logo" />
          <div className="slogan">STREAMLINE. SIMPLIFY.</div>
          <div className="secondary-slogan">SUCCEED.</div>
        </section>

        {/* Scroll Down Arrow */}
        <section className="bottom">
          <a id="scrollToContent" href="#">
            <img src="public/images/arrow_down.png" alt="Scroll Down" />
          </a>
        </section>
      </div>
    </header>
  );
}; 

export default Header;
