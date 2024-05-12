import React from "react";
import { BloodList } from "../data/BloodList";

function Details({ theKey }) {
  const matchedItem = BloodList.find((item) => item.id === theKey);
  return (
    <div>
      {matchedItem ? (
        <div>
          <p>Patient Name: {matchedItem.patientName}</p>
          <p>Blood Type: {matchedItem.bloodType}</p>
          <p>Hospital Name: {matchedItem.hospitalName}</p>
          <p>Hospital Governorate: {matchedItem.hospitalGovernorate}</p>
          <p>Hospital Area: {matchedItem.hospitalArea}</p>
          <p>Hospital Address: {matchedItem.hospitalAddress}</p>
          <button> Donate </button>
        </div>
      ) : (
        <p>No item found with the provided key.</p>
      )}
    </div>
  );
}

export default Details;
