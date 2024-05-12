import React, { useState } from "react";
import { BloodList } from "../lists/BloodList";
import TransportationSelection from "../pages/TransportationSelection";

function Popup({ closePopup, theKey }) {
  const [showTransportationSelection, setShowTransportationSelection] =
    useState(false);
  const matchedItem = BloodList.find((item) => item.id === theKey);

  const handleDonate = () => {
    // Set state to render TransportationSelection component
    setShowTransportationSelection(true);
  };

  return showTransportationSelection ? (
    <div className="popup-overlay">
      <div className="popup-content">
        <TransportationSelection
          closePopup={() => setShowTransportationSelection(false)}
        />
      </div>
    </div>
  ) : (
    <div className="popupBackground_MedicalPopup">
      <div className="popupContainer_MedicalPopup">
        <div className="popupBody">
          <h1>{matchedItem.name}</h1>
          <p>Patient Name: {matchedItem.patientName}</p>
          <p>Blood Type: {matchedItem.bloodType}</p>
          <p>Hospital Name: {matchedItem.hospitalName}</p>
          <p>Hospital Governorate: {matchedItem.hospitalGovernorate}</p>
          <p>Hospital Area: {matchedItem.hospitalArea}</p>
          <p>Hospital Address: {matchedItem.hospitalAddress}</p>
          {matchedItem.googleMarker}
        </div>
        <div className="footer_clothesPopup">
          <button
            className="detailButton_clothesPopup"
            onClick={() => closePopup(false)}
          >
            Hide Details
          </button>
          <button className="detailButton_clothesPopup" onClick={handleDonate}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
