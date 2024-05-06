import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HASSAH Donations</h1>
      <h1>Who are you today?</h1>
      <Link to="/donationRequestss">
        <button> I am an Admin</button>
      </Link>
      <Link to="/donationRequest">
        <button> I am an Organization </button>
      </Link>
      <Link to="/donationRequests">
        <button> I am a donor </button>
      </Link>
    </div>
  );
}

export default Home;
