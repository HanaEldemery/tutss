import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/donationRequestss">
        <button> View All Donation Requestss </button>
      </Link>
    </div>
  );
}

export default Home;
