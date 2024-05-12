import React from "react";
import { data } from "../Data/regdonor";

function DetailsDonor({ theKey, closePopup }) {
  const matchedItem = data.find((item) => item.id === theKey);

  const handleHideDetails = () => {
    closePopup(false); // Call closePopup function to hide the popup
  };

  return (
    <div>
      {matchedItem ? (
        <div className="popupBackground_MedicalPopup">
          <div className="popupContainer_MedicalPopup">
            <div className="title">
              <h1>Donor Details</h1>
            </div>
            <div className="popupBody">
              <p>Age: {matchedItem.age}</p>
              <p>Address: {matchedItem.address}</p>
              <p>Donor Type: {matchedItem.typeDonor}</p>
            </div>
            <div className="footer_clothesPopup">
              <button
                className="detailButton_clothesPopup"
                onClick={handleHideDetails}
              >
                Hide Details
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No item found with the provided key.</p>
      )}
    </div>
  );
}

export default DetailsDonor;
