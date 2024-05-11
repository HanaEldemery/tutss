import React, { useState } from "react";
import PopupREQ from "../components/PopupREQ";
import PopupALL from "../components/PopupALL";
import PopupACC from "../components/PopupACC";
import PopupDONREQ from "../components/PopupDONREQ";
import { data } from "../Data/regorgname";
import { Link } from "react-router-dom";

function OrganisationOrphanage({ organisationName }) {
  organisationName = "Rhyzio";
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupAll, setShowPopupALL] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showAcceptedDonationReq, setShowAcceptedDonationReq] = useState(false);

  const viewList = () => {
    setShowPopup(true);
  };

  const viewListALL = () => {
    setShowPopupALL(true);
  };

  const viewAccountInformation = () => {
    setShowAccountInfo(true);
  };

  const viewAcceptedDonationReq = () => {
    setShowAcceptedDonationReq(true);
  };

  return (
    <div className="seifhome">
      {showPopup ||
      showPopupAll ||
      showAccountInfo ||
      showAcceptedDonationReq ? null : (
        <div className="seifhome">
          <h1>Welcome Orphanage!</h1>
          <div className="seifhome-button-container">
            <div className="seifhome-button-row">
              <button onClick={viewList} className="seifhome-button">
                Create a Request Donation Post
              </button>
              <button onClick={viewListALL} className="seifhome-button">
                View All Current Requests
              </button>
              <button onClick={viewAccountInformation} className="seifhome-button">
                Edit Account Information
              </button>
            </div>
            <div className="seifhome-button-row">
              <button onClick={viewAcceptedDonationReq} className="seifhome-button">
                View Fulfilled Donation Requests
              </button>
              <Link to="/DropoffSelectionOrphanage">
                <button className="seifhome-button">Set Suitable Time Slot</button>
              </Link>
              <Link to="/">
                <button className="seifhome-button"> Logout </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <PopupREQ
          closePopup={setShowPopup}
          organisation={
            data.find((item) => item.organisation === organisationName)
              .organisation
          }
        />
      )}
      {showPopupAll && (
        <PopupALL
          closePopup={setShowPopupALL}
          organisationName={
            data.find((item) => item.organisation === organisationName)
              .organisation
          }
        />
      )}
      {showAccountInfo && (
        <PopupACC
          closePopup={setShowAccountInfo}
          organisationName={
            data.find((item) => item.organisation === organisationName)
              .organisation
          }
        />
      )}
      {showAcceptedDonationReq && (
        <PopupDONREQ
          closePopup={setShowAcceptedDonationReq}
          organisationName={
            data.find((item) => item.organisation === organisationName)
              .organisation //can be changed to organisationName ~omar
          }
        />
      )}
    </div>
  );
}

export default OrganisationOrphanage;
