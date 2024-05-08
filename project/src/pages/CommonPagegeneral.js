import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ViewEditAccount from "../pages/ViewEditAccount";
function CommonPagegeneral(idOfDonorFromLogin) {
  idOfDonorFromLogin = 1;
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const viewEditAccount = () => {
    setShowAccountInfo(true);
  };

  return (
    <div>
      <br />
      <h1>Welcome Donor!</h1>
      <Link to="/ViewAllOrganisationsForDonor">
        <button>ViewAllOrganisationsForDonor</button>
      </Link>
      <Link to="/DonationRequests">
        <button>ViewAllDonationRequests</button>
      </Link>

      <button onClick={viewEditAccount}>Manage Account Information</button>

      {showAccountInfo && (
        <ViewEditAccount
          closePopup={setShowAccountInfo}
          donorId={idOfDonorFromLogin}
        />
      )}
    </div>
  );
}

export default CommonPagegeneral;
