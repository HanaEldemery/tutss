import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the updated CSS file

function Home() {
  return (
    <div className="container">
      <h2>Who are you today?</h2>
      <Link to="/adminlogin" className="button button-link">
        I am an Admin
      </Link>
      <Link to="/OrgReg" className="button button-link">
        I am an Organization
      </Link>
      <Link to="/DonorReg" className="button button-link">
        I am a Donor
      </Link>
    </div>
  );
}

export default Home;
