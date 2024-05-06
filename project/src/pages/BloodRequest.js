import React, { useState } from "react";
import { BloodList } from "../Data/BloodList";
import PopupHana from "../components/PopupHana";

function BloodRequests() {
  const [bloodTypeFilter, setBloodTypeFilter] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleFilterChange = (event) => {
    setBloodTypeFilter(event.target.value);
  };

  const filteredBloodList = bloodTypeFilter
    ? BloodList.filter((item) => item.bloodType === bloodTypeFilter)
    : BloodList;

  const viewDetails = (bloodItem) => {
    setShowPopup(true);
    setClickedId(bloodItem);
  };

  return (
    <div>
      <h1>Blood Requests</h1>
      <div>
        <select onChange={handleFilterChange}>
          <option value="">All Hospitals</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
        </select>
      </div>
      <div className="all">
        {showPopup ? (
          <PopupHana closePopup={setShowPopup} theKey={clickedId} />
        ) : (
          <div className="blood-list">
            {filteredBloodList.map((bloodItem) => (
              <div key={bloodItem.id} className="blood-item">
                <button
                  onClick={() => viewDetails(bloodItem.id)}
                  className="button-used"
                >
                  REQUEST {bloodItem.id}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BloodRequests;
