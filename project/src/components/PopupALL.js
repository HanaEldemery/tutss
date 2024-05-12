import React, { useState } from "react";
import { data } from "../Data/allrequests";
import PopupEDIT from "../components/PopupEDIT";
import "../styles/theStyle.css"; // Import the CSS file for styling

function PopupALL({ closePopup, organisationName }) {
  const [selectedItemId, setSelectedItemId] = useState(null); // Track selected item ID
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [requestData, setRequestData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemCategory, setItemCategory] = useState("");

  const backToUpdate = (itemCategory) => {
    setItemCategory(itemCategory);
    setShowUpdatePopup(true);
  };

  const callOnDelete = (id) => {
    const updatedData = requestData.filter((item) => item.id !== id);
    setRequestData(updatedData);
    console.log("Deleted item with ID:", id);
    console.log("Updated data:", updatedData);
  };

  const handlePopupClick = (id) => {
    setSelectedItemId(id);
    setShowUpdatePopup(true);
  };

  return (
    <div className="home">
      <h1 className="menuTitle">All Requests</h1>
      <div className="menuList">
        {showUpdatePopup
          ? null
          : requestData.map((item, index) => (
              <div
                key={index}
                className="menuItem"
                onClick={() => handlePopupClick(item.id)}
              >
                <div
                  className="menuImage"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="menuDetails">
                  <h1>{item.organisation}</h1>
                  <p>Organisation Type: {item.organisationType}</p>
                  <p>Category: {item.category}</p>
                  <p>Type: {item.type}</p>
                  <p>Material: {item.material}</p>
                </div>
              </div>
            ))}
      </div>
      {showUpdatePopup && selectedItemId && (
        <PopupEDIT
          organisation={organisationName}
          requestType={itemCategory}
          closePopup={() => {
            setSelectedItemId(null);
            setShowUpdatePopup(false);
          }}
        />
      )}
      <button className="donation-button" onClick={() => closePopup(false)}>
        Back
      </button>
    </div>
  );
}

export default PopupALL;
