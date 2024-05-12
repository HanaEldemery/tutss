import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the updated CSS file

import backgroundImage from "../images/photo-1595561579181-263fe6175b73.avif"; // Import the background image

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <div className="home" style={backgroundImageStyle}>
      <div className="headerContainer">
        <h1
          style={{ fontSize: "75px", marginBottom: "40px", color: "#ffffff" }}
        >
          Continue as
        </h1>

        <Link to="/adminlogin">
          <button> Admin</button>
        </Link>
        <Link to="/loginorg">
          <button>Organization</button>
        </Link>
        <Link to="/logindonor">
          <button>Donor</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
