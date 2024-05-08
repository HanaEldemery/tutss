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
      <Link to="/ViewAllOrganisationsForDonor">
        <button>ViewAllOrganisationsForDonor</button>
      </Link>
      <Link to="/DonationRequestss">
        <button>ViewAllDonationRequests</button>
      </Link>

      <button onClick={viewEditAccount}>ACCOUNT INFORMATION</button>

      {showAccountInfo && (
        <ViewEditAccount
          closePopup={setShowAccountInfo}
          donorId={idOfDonorFromLogin}
        />
      )}
    </div>
  );
}

export default CommonPageDoctor;
