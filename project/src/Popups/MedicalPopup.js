import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { MedicalData } from "../Data/MedicalData";

function MedicalPopup({
  closePopup,
  theKey,
  showDonateOptions,
  setShowDonateOptions,
  handleDonate,
}) {
  const navigate = useNavigate();
  const matchedItem = MedicalData.find((item) => item.id === theKey);

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
          {showDonateOptions === matchedItem.id ? (
            <>
              <button onClick={() => closePopup()} style={{ margin: "10px" }}>
                Hide Details
              </button>

              <Link to="/TransportationSelection">
                <button style={{ margin: "10px" }}>
                  Would you like a ride?
                </button>
              </Link>
              <button
                onClick={() => navigate("/DonationSuccessful")}
                style={{ margin: "10px" }}
              >
                No thank you
              </button>
            </>
          ) : (
            <>
              <button onClick={() => closePopup()} style={{ margin: "10px" }}>
                Hide Details
              </button>

              <button
                onClick={() => setShowDonateOptions(matchedItem.id)}
                style={{ margin: "10px" }}
              >
                Donate
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MedicalPopup;
