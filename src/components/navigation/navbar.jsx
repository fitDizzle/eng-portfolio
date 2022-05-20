import React from "react";

const Navbar = () => {
  return  <nav id="navbar" className="navbar">
  <ul>
    <li><a className="nav-link active" href="/home">Home</a></li>
    <li><a className="nav-link" href="/about">About </a></li>
    <li><a className="nav-link" href="/resume">Experience</a></li>
    <li><a className="nav-link" href="/skills">Capabilities</a></li>
    <li><a className="nav-link" href="/portfolio">Projects</a></li>
    <li><a className="nav-link" href="/contact">Contact</a></li>
  </ul>
  <i className="bi bi-list mobile-nav-toggle">X</i>
</nav>
};

export default Navbar;
