import React, { useState } from "react";
import { ToysList } from "../lists/ToysList";
import ToysPopup from "../Popups/ToysPopup";
import { Link } from "react-router-dom";

function ToysRequests() {
  const [ageFilter, setAgeFilter] = useState(""); // State for age filter
  const [genderFilter, setGenderFilter] = useState(""); // State for gender filter
  const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleAgeChange = (event) => {
    setAgeFilter(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredToysList = ToysList.filter((item) => {
    return (
      (ageFilter === "" || item.age === parseInt(ageFilter)) &&
      (genderFilter === "" || item.gender === genderFilter) &&
      (categoryFilter === "" || item.category === categoryFilter)
    );
  });

  const viewDetails = (toyItem) => {
    setShowPopup(true);
    setClickedId(toyItem);
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Toys Requests</h1>
        <div className="filter-container">
          <select onChange={handleAgeChange}>
            <option value="">All Ages</option>
            <option value="2">1-2</option>
            <option value="3">3-4</option>
            <option value="5">5-6</option>
            <option value="7">7-8</option>
            <option value="10">9-10</option>
            <option value="12">11-12</option>
            {/* Add options for other ages as needed */}
          </select>

          <select onChange={handleGenderChange}>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add options for other genders as needed */}
          </select>

          <select onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Stuffed Toys">Stuffed Toys</option>
            <option value="Cars">Cars</option>
            <option value="Board Games">Board Games</option>
            <option value="Dolls">Dolls</option>
            <option value="Sports">Sports</option>
            <option value="Outdoor">Outdoor</option>
            {/* Add options for other categories as needed */}
          </select>
        </div>
        <div>
          {showPopup ? (
            <ToysPopup closePopup={setShowPopup} theKey={clickedId} />
          ) : (
            <div className="toys-list">
              {filteredToysList.map((toyItem) => (
                <div key={toyItem.id} className="toy-item">
                  <p>{toyItem.name}</p>
                  <button
                    onClick={() => viewDetails(toyItem.id)}
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

export default ToysRequests;
