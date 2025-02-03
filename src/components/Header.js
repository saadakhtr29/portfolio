import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <span className="logo">SAAD AKHTAR</span>
      <div className="links">
        <a href="#resume"> Resume</a>
        <a href="#projects"> Projects</a>
        <a href="#services"> Services</a>
      </div>
    </div>
  );
}

export default Header;
