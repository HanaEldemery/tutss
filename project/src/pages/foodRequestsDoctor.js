import React, { useState } from "react";
import { FoodList } from "../lists/FoodList";
import FoodPopup from "../Popups/FoodPopup";
import { Link } from "react-router-dom";

function FoodRequests() {
  const [typeFilter, setTypeFilter] = useState(""); // State for type filter
  const [showPopup, setShowPopup] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const handleTypeChange = (event) => {
    // Handler for type filter
    setTypeFilter(event.target.value);
  };

  const filteredFoodList = FoodList.filter((item) => {
    return (
      typeFilter === "" || item.type === typeFilter // Include type filter
    );
  });

  const viewDetails = (FoodItem) => {
    setShowPopup(true);
    setClickedId(FoodItem);
  };

  return (
    <div>
      <h1>Food Requests</h1>
      <div>
        <select onChange={handleTypeChange}>
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Canned Food">Canned Food</option>
          <option value="Fresh Meals">Fresh Meals</option>
          <option value="Baked Goods">Baked Goods</option>
          {/* Add options for other types as needed */}
        </select>
      </div>
      <div className="all">
        {showPopup ? (
          <FoodPopup closePopup={setShowPopup} theKey={clickedId} />
        ) : (
          <div className="food-list">
            {filteredFoodList.map((foodItem) => (
              <div key={foodItem.id} className="food-item">
                {foodItem.id}- {foodItem.name}
                <button
                  onClick={() => viewDetails(foodItem.id)}
                  className="button-used"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Link to="/DonationRequestssDoctor">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default FoodRequests;
