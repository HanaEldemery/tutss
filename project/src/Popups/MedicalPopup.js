import React, { useState } from "react";
import TransportationSelection2 from "../pages/TransportationSelection2";
import { MedicalData } from "../Data/MedicalData";
import DonationConfirmationPopup from "../pages/DonationConfirmationPopup";

function MedicalPopup({
  closePopup,
  theKey,
  showDonateOptions,
  setShowDonateOptions,
}) {
  const [donationConfirmed, setDonationConfirmed] = useState(false);
  const [showTransportationSelection, setShowTransportationSelection] =
    useState(false);
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const matchedItem = MedicalData.find((item) => item.id === theKey);

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
        <TransportationSelection2
          closePopup={() => setShowTransportationSelection(false)}
        />
      </div>
    </div>
  ) : (
    <div className="popupBackground_MedicalPopup">
      <div className="popupContainer_MedicalPopup">
        <div className="popupBody">
          <h1>{matchedItem.Patient_Name}</h1>
          <p>Age: {matchedItem.Age}</p>
          <p>Gender: {matchedItem.Gender}</p>
          <p>Weight: {matchedItem.Weight} kg</p>
          <p>Address: {matchedItem.Address}</p>
          <p>Organization: {matchedItem.Organization_Name}</p>
          <p>Medical Specialty: {matchedItem.Medical_Specialty}</p>
          <p>Case Description: {matchedItem.Case_Description}</p>
          <p>Area: {matchedItem.Area}</p>
          <p>Governorate: {matchedItem.Governorate}</p>
          {matchedItem.Location_Google_Marker && (
            <div className="google-maps">
              {matchedItem.Location_Google_Marker}
            </div>
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
        <div className="popupConfirmationMessage">Donation Confirmed</div>
      )}
    </div>
  );
}

export default MedicalPopup;
