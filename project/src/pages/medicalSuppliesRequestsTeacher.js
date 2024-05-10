import React, { useState } from "react";
import { MedicalSuppliesList } from "../lists/MedicalSuppliesList";
import MedicalSuppliesPopup from "../Popups/MedicalSuppliesPopup";
import { Link } from "react-router-dom";

function MedicalSuppliesRequests() {
  const [typeFilter, setTypeFilter] = useState(""); // State for type filter
  const [useFilter, setUseFilter] = useState(""); // State for use filter
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleTypeChange = (event) => {
    setTypeFilter(event.target.value);
    setUseFilter(""); // Reset use filter when type changes
  };

  const handleUseChange = (event) => {
    setUseFilter(event.target.value);
  };

  const filteredMedicalSuppliesList = MedicalSuppliesList.filter((item) => {
    return (
      (typeFilter === "" || item.type === typeFilter) &&
      (useFilter === "" || item.use === useFilter) // Include use filter
    );
  });

  const viewDetails = (medicalSupplyItem) => {
    setShowPopup(true);
    setClickedId(medicalSupplyItem);
  };

  const isMedicationsSelected = typeFilter === "Medications";

  return (
    <div>
      <h1>Medical Supplies Requests</h1>
      <div>
        <select onChange={handleTypeChange}>
          <option value="">All Medical Supplies</option>
          <option value="Medical Equipment">Medical Equipment</option>
          <option value="Medical Devices">Medical Devices</option>
          <option value="Medications">Medications</option>
          {/* Add options for other types as needed */}
        </select>
      </div>
      {isMedicationsSelected && ( // Conditionally render use filter
        <div>
          <select onChange={handleUseChange}>
            <option value="">All Uses</option>
            <option value="For headaches">For headaches</option>
            <option value="For stomachaches">For stomachaches</option>
            {/* Add options for other uses as needed */}
          </select>
        </div>
      )}
      <div className="all">
        {showPopup ? (
          <MedicalSuppliesPopup closePopup={setShowPopup} theKey={clickedId} />
        ) : (
          <div className="medical-supplies-list">
            {filteredMedicalSuppliesList.map((medicalSupplyItem) => (
              <div key={medicalSupplyItem.id} className="medical-supply-item">
                {medicalSupplyItem.id}- {medicalSupplyItem.name}
                <button
                  onClick={() => viewDetails(medicalSupplyItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
            <Link to="/DonationRequest">
              <button>Back</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicalSuppliesRequests;
