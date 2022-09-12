import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-title" alt="">
        <span>MIXELLENCE</span>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="drinks">Drinks</a>
          </li>
          <li>
            <a href="/bartenders">Bartenders</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
