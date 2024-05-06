import React, { useState } from "react";
import { data } from "../Data/allrequests";
import "../styles/PopupALL.css";
import PopupEDIT from "../components/PopupEDIT";

function PopupALL({ closePopup, organisationName }) {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [requestData, setRequestData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemCategory, setItemCategory] = useState("");

  const backToUpdate = (itemCategory) => {
    //setSelectedItem(item);
    setItemCategory(itemCategory);
    //closePopup(false); // Close the current popup
    setShowUpdatePopup(true); // Show the update popup
  };

  const callOnDelete = (id) => {
    // Delete the item from the data array
    const updatedData = requestData.filter((item) => item.id !== id);
    // Update the data array with the deleted item removed
    setRequestData(updatedData);
    console.log("Deleted item with ID:", id);
    console.log("Updated data:", updatedData);
  };

  return (
    <div>
      {showUpdatePopup ? (
        <PopupEDIT
          organisation={organisationName}
          requestType={itemCategory}
          closePopup={setShowUpdatePopup}
        />
      ) : (
        <div className="popupBackground">
          <div className="popupContainer">
            <div className="title">
              <h1>ALL REQUESTS</h1>
            </div>

            <div className="body">
              {requestData.map((item, index) => (
                <div key={index}>
                  {item.organisation === organisationName && (
                    <div className="small-box">
                      <p>Organisation: {item.organisation}</p>
                      <p>Organisation Type: {item.organisationType}</p>
                      <p>Category: {item.category}</p>
                      <p>Type: {item.type}</p>
                      <p>Material: {item.material}</p>
                      {/* Display other relevant item details */}
                      <p>
                        <button
                          className="search-button"
                          onClick={() => backToUpdate(item.category)}
                        >
                          UPDATE
                        </button>
                        <button
                          onClick={() => callOnDelete(item.id)}
                          className="search-button"
                        >
                          DELETE
                        </button>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="footer">
              <button onClick={() => closePopup(false)}> BACK </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupALL;
