import React from "react";
import { BloodList } from "../Data/BloodList";
//var data = require("../data/regorgname.json");

function Popup({ closePopup, theKey }) {
  const matchedItem = BloodList.find((item) => item.id === theKey);
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>ORGANISATIONS</h1>
        </div>
        <div className="body">
          <p>Patient Name: {matchedItem.patientName}</p>
          <p>Blood Type: {matchedItem.bloodType}</p>
          <p>Hospital Name: {matchedItem.hospitalName}</p>
          <p>Hospital Governorate: {matchedItem.hospitalGovernorate}</p>
          <p>Hospital Area: {matchedItem.hospitalArea}</p>
          <p>Hospital Address: {matchedItem.hospitalAddress}</p>
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}> CANCEL </button>
          <button> DONATE </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
