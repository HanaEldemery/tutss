import { Link } from "react-router-dom";
import React, { useState } from "react";
import ViewEditAccount from "../pages/ViewEditAccount";

function CommonPagegeneral(idOfDonorFromLogin) {
  idOfDonorFromLogin = 1;
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const viewEditAccount = () => {
    setShowAccountInfo(true);
  };

  return (
    <div className="seifhome">
      <div className="headerContainer">
        <br />
        {showAccountInfo ? (
          <ViewEditAccount
            closePopup={setShowAccountInfo}
            donorId={idOfDonorFromLogin}
          />
        ) : (
          <div>
            <h1>Welcome Donor!</h1>
            <div className="seifhome-button-container">
              <div className="seifhome-button-row">
                <Link to="/ViewAllOrganisationsForDonor">
                  <button className="seifhome-button">View All Organizations</button>
                </Link>
                <Link to="/DonationRequests">
                  <button className="seifhome-button">View All Donation Requests</button>
                </Link>
                <button className="seifhome-button" onClick={viewEditAccount}>
                  Manage Account Information
                </button>
              </div>
              <div className="seifhome-button-row">
                <Link to="/">
                  <button className="seifhome-button">Logout</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommonPagegeneral;
