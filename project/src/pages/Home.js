import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/donationRequestss">
        <button> View All Donation Requestss medical</button>
      </Link>
      <Link to="/donationRequest">
        <button> View All Donation Requestss teacher </button>
      </Link>
      <Link to="/donationRequests">
        <button> General ya amar </button>
      </Link>
      <div className="home">
        <div className="headerContainer">
          <h1> Eccomerce website </h1>
          <p> HELP ONE HELP EVERYONE </p>
          <Link to="/donation">
            <button> DONATE NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
