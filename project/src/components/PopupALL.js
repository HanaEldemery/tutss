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
    <div className="popupBody">
      {showUpdatePopup ? (
        <div className="popup-overlay">
          <div className="popup-content">
            <PopupEDIT
              organisation={organisationName}
              requestType={itemCategory}
              closePopup={() => {
                setShowUpdatePopup(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="headerContainer">
          <h1>All Requests</h1>
          <div className="menu">
            <div className="menuList">
              {requestData.map((item, index) => {
                if (item.organisation === organisationName) {
                  return (
                    <div key={index} className="menuItem">
                      <div
                        className="menuImage"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="menuDetails">
                        <p>Organisation: {item.organisation}</p>
                        <p>Organisation Type: {item.organisationType}</p>
                        <p>Category: {item.category}</p>
                        <p>Type: {item.type}</p>
                        <p>Material: {item.material}</p>
                        <div className="buttonContainer">
                          <button
                            className="search-button"
                            onClick={() => backToUpdate(item.category)}
                          >
                            Update
                          </button>
                          <button
                            onClick={() => callOnDelete(item.id)}
                            className="search-button"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <button
              onClick={() => closePopup(false)}
              className="donation-button"
            >
              {" "}
              Back{" "}
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupALL;
