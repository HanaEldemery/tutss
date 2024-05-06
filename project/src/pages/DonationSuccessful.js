import React from 'react';
import { Link } from 'react-router-dom';

function DonationSuccessful() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Donation Confirmed</h1>
      <p>Thank You For Your Donation!</p>
        <Link to="/Donor">
         <button>Go Back To Main Page</button>
        </Link>
    </div>
  );
}

export default DonationSuccessful;
