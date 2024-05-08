import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ViewEditAccount from "../pages/ViewEditAccount";

import "../styles/Search.css";
function CommonPageteacher(idOfDonorFromLogin) {
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

  
       <Link to="/DonationRequest">
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
  )
}

export default CommonPageteacher
