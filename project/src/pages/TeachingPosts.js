import React, { useState } from "react";
import FilterTeaching from "../Filters/FilterTeaching";
import TeachingList from "../lists/TeachingList";
import { TeachingData } from "../Data/Teachingdata";
import { Link } from "react-router-dom";
import TeacherPopup from "../Popups/TeacherPopup";

function TeachingPosts() {
  const [productList, setProductList] = useState(TeachingData);
  const [filteredProductList, setFilteredProductList] = useState(TeachingData);
  const [filters, setFilters] = useState({});
  const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  const [clickedTeacherId, setClickedTeacherId] = useState(null);
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
        filteredData = filteredData.filter((item) => item[key] === newFilters[key]);
      }
    });
    setFilteredProductList(filteredData);
  };

  const toggleDetails = (id) => {
    if (showDetailsId === id) {
      setShowDetailsId(null); // Hide details if the same button is clicked
    } else {
      setShowDetailsId(id); // Show details for clicked item
    }
  };

  const handleDonate = (id, xyz) => {
    if (xyz === "Medical" || xyz === "Teaching") {
      setShowDonateOptions(id); // Show donation options for valid items
    } 
  };

  return (
    <div>
      <FilterTeaching filters={filters} onFilterChange={handleFilterChange} />
      <h2>Hello from TeachingPosts</h2>
      <div className="Teacher-list">
        {filteredProductList.map((TeacherItem) => (
          <div key={TeacherItem.id} className="Teacher-item">
            {showDetailsId !== TeacherItem.id && (
              <div>
                {TeacherItem.Subject}
                <button
                  onClick={() => toggleDetails(TeacherItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            )}
            {showDetailsId === TeacherItem.id && (
              <TeacherPopup
                closePopup={() => setShowDetailsId(null)}
                theKey={TeacherItem.id}
                showDonateOptions={showDonateOptions}
                setShowDonateOptions={setShowDonateOptions}
                handleDonate={handleDonate}
              />
            )}
          </div>
        ))}
      </div>
      {showTeacherPopup && (
        <TeacherPopup
          closePopup={() => setShowTeacherPopup(false)}
          theKey={clickedTeacherId}
          showDonateOptions={showDonateOptions}
          setShowDonateOptions={setShowDonateOptions}
          handleDonate={handleDonate}
        />
      )}
      <Link to="/DonationRequest">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TeachingPosts;
