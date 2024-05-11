import React, { useState } from "react";
import { data } from "../Data/allrequests";
import PopupEDIT from "../components/PopupEDIT";

function PopupALL({ closePopup, organisationName }) {
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

  return (
    <div className="home">
      {showUpdatePopup ? (
        <PopupEDIT
          organisation={organisationName}
          requestType={itemCategory}
          closePopup={setShowUpdatePopup}
        />
      ) : (
        <div className="headerContainer">
          <h1>All Requests</h1>

          <div className="popupContainer">
            {requestData.map((item, index) => (
              <div key={index} className="containsContainer">
                {item.organisation === organisationName && (
                  <div className="small-box">
                    <p>Organisation: {item.organisation}</p>
                    <p>Organisation Type: {item.organisationType}</p>
                    <p>Category: {item.category}</p>
                    <p>Type: {item.type}</p>
                    <p>Material: {item.material}</p>
                    <div className="button-container">
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
                )}
              </div>
            ))}
          </div>
          <button onClick={() => closePopup(false)}> Back </button>
        </div>
      )}
    </div>
  );
}

export default PopupALL;
