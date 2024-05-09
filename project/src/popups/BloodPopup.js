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

  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title"></div>
        <div className="body">
          <h1>{matchedItem.name}</h1>
          <p>Patient Name: {matchedItem.patientName}</p>
          <p>Blood Type: {matchedItem.bloodType}</p>
          <p>Hospital Name: {matchedItem.hospitalName}</p>
          <p>Hospital Governorate: {matchedItem.hospitalGovernorate}</p>
          <p>Hospital Area: {matchedItem.hospitalArea}</p>
          <p>Hospital Address: {matchedItem.hospitalAddress}</p>
          {matchedItem.googleMarker}
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}>Hide Details</button>
          <button onClick={handleDonate}>Donate Now</button>
        </div>
      </div>
      {showTransportationSelection && (
        <TransportationSelection
          closePopup={() => setShowTransportationSelection(false)}
        />
      )}
    </div>
  );
}

export default Popup;
