import React, { useState } from "react";
import Popup from "../Popups/Popup";
import { SchoolSupList } from "../helpers/SchoolSupList";
import { Link } from "react-router-dom";

function SchoolSuppliesDonations() {
  const [bookFilter, setBookFilter] = useState(""); // State for age filter
  const [stationaryFilter, setStationaryFilter] = useState(""); // State for gender filter
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleBookChange = (event) => {
    setBookFilter(event.target.value);
  };

  const handleStationaryChange = (event) => {
    setStationaryFilter(event.target.value);
  };

  const filteredSchoolSupList = SchoolSupList.filter((item) => {
    return (
      (bookFilter === "" || item.type === bookFilter) &&
      (stationaryFilter === "" || item.type1 === stationaryFilter)
    );
  });

  const viewDetails = (schoolsupItem) => {
    setShowPopup(true);
    setClickedId(schoolsupItem);
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1>School Supplies Requests</h1>
        <div className="filter-container">
          <select onChange={handleBookChange}>
            <option value="">All Books</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            {/* Add options for other ages as needed */}
          </select>

          <select onChange={handleStationaryChange}>
            <option value="">All Stationary</option>
            <option value="Copybook">Copybook</option>
            <option value="Pencilcase">Pencilcase</option>
            <option value="ColoringPencil">ColoringPencil</option>
            <option value="eraser">eraser</option>
            <option value="sharpener">sharpener</option>

            {/* Add options for other genders as needed */}
          </select>
        </div>

        <div>
          {showPopup ? (
            <Popup closePopup={setShowPopup} theKey={clickedId} />
          ) : (
            <div className="menu">
              <div className="menuList">
                {filteredSchoolSupList.map((SchoolSupItem) => (
                  <div
                    key={SchoolSupItem.id}
                    className="menuItem"
                    onClick={() => viewDetails(SchoolSupItem.id)}
                  >
                    <div className="item-container">
                      <div
                        className="menuImage"
                        style={{
                          backgroundImage: `url(${SchoolSupItem.image})`,
                        }}
                      />
                      <p>{SchoolSupItem.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/DonationRequests">
                <button>Back</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default SchoolSuppliesDonations;
