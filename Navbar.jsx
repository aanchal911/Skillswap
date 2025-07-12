import React from 'react';
import './Navbar.css'; // optional, or use global styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">SkillSwap</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
