import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/donationRequests">
        <button> View All Donation Requests </button>
      </Link>
    </div>
  );
}

export default Home;
