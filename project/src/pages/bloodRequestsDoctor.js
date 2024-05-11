import React, { useState } from "react";
import { BloodList } from "../lists/BloodList";
import BloodPopup from "../Popups/BloodPopup";
import { Link } from "react-router-dom";

function BloodRequests() {
  const [hospitalNameFilter, setHospitalNameFilter] = useState("");
  const [governorateFilter, setGovernorateFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleHospitalNameChange = (event) => {
    setHospitalNameFilter(event.target.value);
  };

  const handleGovernorateChange = (event) => {
    setGovernorateFilter(event.target.value);
  };

  const handleAreaChange = (event) => {
    setAreaFilter(event.target.value);
  };

  const filteredBloodList = BloodList.filter((item) => {
    return (
      (hospitalNameFilter === "" || item.hospitalName === hospitalNameFilter) &&
      (governorateFilter === "" ||
        item.hospitalGovernorate === governorateFilter) &&
      (areaFilter === "" || item.hospitalArea === areaFilter)
    );
  });

  const viewDetails = (bloodItem) => {
    setShowPopup(true);
    setClickedId(bloodItem);
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Blood Requests</h1>
        <div className="filter-container">
          <select onChange={handleHospitalNameChange}>
            <option value="">All Hospitals</option>
            <option value="Dar Al Fouad">Dar Al Fouad</option>
            <option value="El Safa">El Safa</option>
            <option value="Anglo American">Anglo American</option>
          </select>

          <select onChange={handleGovernorateChange}>
            <option value="">All Governorates</option>
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            {/* Add options for other governorates as needed */}
          </select>

          <select onChange={handleAreaChange}>
            <option value="">All Areas</option>
            <option value="Nasr City">Nasr City</option>
            <option value="Agouza">Agouza</option>
            <option value="Zamalek">Zamalek</option>
            {/* Add options for other areas as needed */}
          </select>
        </div>
        <div>
          {showPopup ? (
            <BloodPopup closePopup={setShowPopup} theKey={clickedId} />
          ) : (
            <div className="blood-list">
              {filteredBloodList.map((bloodItem) => (
                <div key={bloodItem.id} className="blood-item">
                  <p>{bloodItem.name}</p>
                  <button
                    onClick={() => viewDetails(bloodItem.id)}
                    className="button-used"
                  >
                    View Details
                  </button>
                </div>
              ))}
              <Link to="/DonationRequestssDoctor">
                <button>Back</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BloodRequests;
