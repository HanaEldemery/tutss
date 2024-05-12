//NavBar.js
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Import Link from React Router
import { HelpOutline, HomeOutlined } from "@mui/icons-material"; // Import icons from Material-UI Icons
import "../styles/NavBar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="rightSide">
        {/* Use HomeOutlined icon for home button */}
        <Link to="/" className="navLink">
          <button className="toggleButton">
            <HomeOutlined />
          </button>
        </Link>
        <Link to="/Missionandvision" className="navLink">
          {/* Create a button for Mission and Vision */}
          <button className="toggleButton">Mission and Vision</button>
        </Link>
        {/* Use HelpOutline icon for toggle button */}
        <Link to="/AboutUs"className="navLink">
        <button onClick={toggleNavbar} className="toggleButton">
          <HelpOutline />
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
