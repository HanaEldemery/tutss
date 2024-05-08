import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ViewEditAccount from "../pages/ViewEditAccount";

function CommonPageDoctor(idOfDonorFromLogin) {
  idOfDonorFromLogin = 1;
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const viewEditAccount = () => {
    setShowAccountInfo(true);
  };

  return (
    <div>
      <br />
      {showAccountInfo ? (
        <ViewEditAccount
          closePopup={setShowAccountInfo}
          donorId={idOfDonorFromLogin}
        />
      ) : (
        <div>
          <h1>Welcome Doctor!</h1>
          <Link to="/ViewAllOrganisationsForDoctor">
            <button>View All Organizations</button>
          </Link>
          <Link to="/DonationRequestssDoctor">
            <button>View All Donation Requests</button>
          </Link>

          <button onClick={viewEditAccount}>Manage Account Information</button>
          <Link to="/">
            <button> Logout </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CommonPageDoctor;
