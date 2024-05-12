import { Link } from "react-router-dom";
import React, { useState } from "react";
import ViewEditAccount from "../pages/ViewEditAccount";

function CommonPageteacher(idOfDonorFromLogin) {
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
          <div className="popup-overlay">
            <div className="popup-content">
              <ViewEditAccount
                closePopup={setShowAccountInfo}
                donorId={idOfDonorFromLogin}
              />
            </div>
          </div>
        ) : (
          <div>
            <h1>Welcome Teacher!</h1>
            <div className="seifhome-button-container">
              <div className="seifhome-button-row">
                <Link to="/ViewAllOrganisationsForTeacher">
                  <button className="seifhome-button">
                    View Organizations
                  </button>
                </Link>
                <Link to="/DonationRequest">
                  <button className="seifhome-button">
                    View Donation Requests
                  </button>
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

export default CommonPageteacher;
