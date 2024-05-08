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
      <h1>Welcome Doctor!</h1>
      {showAccountInfo ? (
        <ViewEditAccount
          closePopup={setShowAccountInfo}
          donorId={idOfDonorFromLogin}
        />
      ) : (
        <div>
          <Link to="/ViewAllOrganisationsForDonor">
            <button>View All OrganizationsS</button>
          </Link>
          <Link to="/DonationRequestss">
            <button>View All Donation Requests</button>
          </Link>

          <button onClick={viewEditAccount}>Manage Account Information</button>
        </div>
      )}
    </div>
  );
}

export default CommonPageDoctor;
