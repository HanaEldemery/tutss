import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the updated CSS file

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Who are you today?</h1>

        <Link to="/adminlogin">
          <button> I am an Admin</button>
        </Link>
        <Link to="/OrgReg">
          <button>I am an Organization</button>
        </Link>
        <Link to="/DonorReg">
          <button>I am a Donor</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
