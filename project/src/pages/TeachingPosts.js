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

  const viewDetails = (teacherItemId) => {
    setShowTeacherPopup(true);
    setClickedTeacherId(teacherItemId);
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <FilterTeaching filters={filters} onFilterChange={handleFilterChange} />
        <div className="menu">
          <div className="menuList">
            {filteredProductList.map((teacherItem) => (
              <div
                key={teacherItem.id}
                className="menuItem"
                onClick={() => viewDetails(teacherItem.id)}
              >
                <div className="item-container">
                  <div
                    className="menuImage"
                    style={{
                      backgroundImage: `url(${teacherItem.image})`,
                    }}
                  />
                  <p>{teacherItem.Subject}</p>
                </div>
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
          {!showTeacherPopup && !showDetailsId && (
            <Link to="/DonationRequest" className="button-link">
              <button className="back-button">Back</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeachingPosts;
