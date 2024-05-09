import React, { useState } from "react";
import TransportationSelection from "../pages/TransportationSelection";
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

  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="body">
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
        <div className="footer">
          <button onClick={closePopup}>Hide Details</button>
          <button onClick={() => setShowDonatePopup(true)}>Donate</button>
        </div>
      </div>
      {showDonatePopup && (
        <DonationConfirmationPopup
          handleNoThankYou={handleNoThankYou}
          handleRide={handleRide}
        />
      )}
      {showTransportationSelection && (
        <TransportationSelection
          closePopup={() => setShowTransportationSelection(false)}
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

export default MedicalPopup;
