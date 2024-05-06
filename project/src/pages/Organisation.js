import React, { useState } from "react";
import "../styles/Organisation.css";
import PopupREQ from "../components/PopupREQ";
import PopupALL from "../components/PopupALL";
import PopupACC from "../components/PopupACC";
import PopupDONREQ from "../components/PopupDONREQ";
import { data } from "../Data/regorgname";

function Organisation({ organisationName }) {
  organisationName = "Eire";
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
            CREATE A REQUEST DONATION POST
          </button>
          <button onClick={viewListALL} className="button-used">
            VIEW ALL CURRENT REQUESTS
          </button>
          <button onClick={viewAccountInformation} className="button-used">
            EDIT ACCOUNT INFORMATION
          </button>
          <button onClick={viewAcceptedDonationReq} className="button-used">
            VIEW FUILFILLED DONATION REQUESTS
          </button>
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

export default Organisation;
