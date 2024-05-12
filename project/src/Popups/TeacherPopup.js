import React, { useState } from "react";
import TransportationSelection3 from "../pages/TransportationSelection3";
import DonationConfirmationPopup from "../pages/DonationConfirmationPopup";
import { TeachingData } from "../Data/Teachingdata";

function TeacherPopup({
  closePopup,
  theKey,
  showDonateOptions,
  setShowDonateOptions,
}) {
  const [donationConfirmed, setDonationConfirmed] = useState(false);
  const [showTransportationSelection, setShowTransportationSelection] =
    useState(false);
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const teacher = TeachingData.find((item) => item.id === theKey);

  const handleNoThankYou = () => {
    setDonationConfirmed(true);
    setTimeout(() => {
      setDonationConfirmed(false);
    }, 3000); // 3 seconds
    setShowDonatePopup(false); // Close the donation confirmation popup
  };

  const handleRide = () => {
    setShowTransportationSelection(true);
    setShowDonatePopup(false); // Close the donation confirmation popup
  };

  return showTransportationSelection ? (
    <div className="popup-overlay">
      <div className="popup-content">
        <TransportationSelection3
          closePopup={() => setShowTransportationSelection(false)}
        />
      </div>
    </div>
  ) : (
    <div className="popupBackground_MedicalPopup">
      <div className="popupContainer_MedicalPopup">
        <div className="popupBody">
          <h1>{teacher.Subject}</h1>
          <p>{teacher.Subject} Teacher</p>
          <p>Area: {teacher.area}</p>
          <p>Governorate: {teacher.Governorate}</p>
          <p>Number of Students: {teacher.No_of_students}</p>
          <p>Address: {teacher.address}</p>
          {teacher.Location_Google_Marker && (
            <div className="google-maps">{teacher.Location_Google_Marker}</div>
          )}
        </div>
        <div className="footer_clothesPopup">
          <button className="detailButton_clothesPopup" onClick={closePopup}>
            Hide Details
          </button>
          <button
            className="detailButton_clothesPopup"
            onClick={() => setShowDonatePopup(true)}
          >
            Donate
          </button>
        </div>
      </div>
      {showDonatePopup && (
        <DonationConfirmationPopup
          handleNoThankYou={handleNoThankYou}
          handleRide={handleRide}
        />
      )}

      {donationConfirmed && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          Donation Confirmed
        </div>
      )}
    </div>
  );
}

export default TeacherPopup;
