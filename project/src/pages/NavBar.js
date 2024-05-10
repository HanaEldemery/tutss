import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Import the updated CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/path/to/your/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">HASSAH DONATIONS</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
