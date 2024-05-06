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
        <button> General ya amar  </button>
      </Link>
    </div>
  );
}

export default Home;
