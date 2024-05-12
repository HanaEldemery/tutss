import React, { useState } from "react";
import ClothesPopup from "../Popups/ClothesPopup";
import { ClothesList } from "../helpers/ClothesList";
import { Link } from "react-router-dom";

function ClothingRequests() {
  const [ageFilter, setAgeFilter] = useState(""); // State for age filter
  const [genderFilter, setGenderFilter] = useState(""); // State for gender filter
  const [SeasonFilter, setSeasonFilter] = useState(""); // State for gender filter
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleAgeChange = (event) => {
    setAgeFilter(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGenderFilter(event.target.value);
  };
  const handleSeasonChange = (event) => {
    setSeasonFilter(event.target.value);
  };

  const filteredClothesList = ClothesList.filter((item) => {
    return (
      (ageFilter === "" || item.Age === ageFilter) &&
      (genderFilter === "" || item.Gender === genderFilter) &&
      (SeasonFilter === "" || item.Season === SeasonFilter)
    );
  });

  const viewDetails = (clothesItem) => {
    setShowPopup(true);
    setClickedId(clothesItem);
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Clothes Requests</h1>
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
            <option value="">All Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add options for other genders as needed */}
          </select>

          <select onChange={handleSeasonChange}>
            <option value="">All Seasons</option>
            <option value="Summer">Summer</option>
            <option value="Spring">Spring</option>
            <option value="Winter">Winter</option>
            <option value="Fall">Fall</option>

            {/* Add options for other genders as needed */}
          </select>
        </div>
        <div>
          {showPopup ? (
            <ClothesPopup closePopup={setShowPopup} theKey={clickedId} />
          ) : (
            <div className="menu">
              <div className="menuList">
                {filteredClothesList.map((clothesItem) => (
                  <div
                    key={clothesItem.id}
                    className="menuItem"
                    onClick={() => viewDetails(clothesItem.id)}
                  >
                    <div className="item-container">
                      <div
                        className="menuImage"
                        style={{
                          backgroundImage: `url(${clothesItem.image})`,
                        }}
                      />
                      <p>{clothesItem.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/DonationRequests">
                <button> Back </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ClothingRequests;
