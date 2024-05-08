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
    <div className="all">
      {showPopup ||
      showPopupAll ||
      showAccountInfo ||
      showAcceptedDonationReq ? null : (
        <div className="addmargin">
          <button onClick={viewList} className="button-used">
            Create a Request Donation Post
          </button>
          <button onClick={viewListALL} className="button-used">
            View All Current Requests
          </button>
          <button onClick={viewAccountInformation} className="button-used">
            Edit Account Information
          </button>
          <button onClick={viewAcceptedDonationReq} className="button-used">
            View Fulfilled Donation Requests
          </button>
          <Link to="/DropoffSelection">
            <button className="button-used">Set Suitable Time Slot</button>
          </Link>
          <Link to="/">
            <button className="button-used"> Logout </button>
          </Link>
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
