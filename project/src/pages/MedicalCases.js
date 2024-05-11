import React, { useState } from "react";
import FilterMedical from "../Filters/FilterMedical";
import { MedicalData } from "../Data/MedicalData";
import { Link } from "react-router-dom";
import MedicalPopup from "../Popups/MedicalPopup";

function MedicalCases() {
  const [productList, setProductList] = useState(MedicalData);
  const [filteredProductList, setFilteredProductList] = useState(MedicalData);
  const [filters, setFilters] = useState({});
  const [showMedicalPopup, setShowMedicalPopup] = useState(false);
  const [clickedMedicalId, setClickedMedicalId] = useState(null);
  const [showDonateOptions, setShowDonateOptions] = useState(null);
  const [showDetailsId, setShowDetailsId] = useState(null); // State to manage visibility of details

  const handleFilterChange = (category, value) => {
    const newFilters = { ...filters };
    if (value === "all") {
      delete newFilters[category]; // Remove the filter if 'all' is selected
    } else {
      newFilters[category] = value;
    }
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (newFilters) => {
    let filteredData = productList;
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key]) {
        filteredData = filteredData.filter(
          (item) => item[key] === newFilters[key]
        );
      }
    });
    setFilteredProductList(filteredData);
  };

  const toggleDetails = (id) => {
    setShowDetailsId(id === showDetailsId ? null : id); // Toggle visibility of details
  };

  const handleDonate = (id, xyz) => {
    if (xyz === "Medical" || xyz === "Teaching") {
      setShowDonateOptions(id); // Show donation options for valid items
    }
  };

  return (
    <div className="home">
      <h2>Hello from MedicalCases</h2>
      <div className="headerContainer">
        <FilterMedical filters={filters} onFilterChange={handleFilterChange} />
        {filteredProductList.map((MedicalItem) => (
          <div key={MedicalItem.id} className="MedicalCasesItem">
            {showDetailsId === MedicalItem.id && (
                     <div className="popup-overlay">
                     <div className="popup-content">
              <MedicalPopup
                closePopup={() => setShowDetailsId(null)}
                theKey={MedicalItem.id}
                showDonateOptions={showDonateOptions}
                setShowDonateOptions={setShowDonateOptions}
                handleDonate={handleDonate}
              />
              </div>
              </div>
            )}
            {!showDetailsId && (
              <div>
                <p>{MedicalItem.Patient_Name}</p>

                <button
                  onClick={() => toggleDetails(MedicalItem.id)}
                  className="detail-button"
                >
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
        {!showMedicalPopup && !showDetailsId && (
          <Link
            to="/donationRequestssDoctor"
            className="button-link"
          >
            <button className="back-button">Back</button>
          </Link>
        )}
      </div>
      {showMedicalPopup && (
        <MedicalPopup
          closePopup={() => setShowMedicalPopup(false)}
          theKey={clickedMedicalId}
          showDonateOptions={showDonateOptions}
          setShowDonateOptions={setShowDonateOptions}
          handleDonate={handleDonate}
        />
      )}
    </div>
  );
}

export default MedicalCases;
