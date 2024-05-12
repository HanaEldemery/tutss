import React from "react";
import { data } from "../Data/regorgname";

function Details({ theKey, closePopup }) {
  const matchedItem = data.find((item) => item.id === theKey);

  return (
    <div>
      {matchedItem ? (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popupBackground_MedicalPopup">
              <div className="popupContainer_MedicalPopup">
                <div className="title_clothesPopup"></div>
                <div className="body_clothesPopup">
                  <h1>Contact Details</h1>

                  <p>Phone Number: {matchedItem.details}</p>
                  <p>Address: {matchedItem.address}</p>
                  <p>Organization Type: {matchedItem.type}</p>
                  <p>Location: {matchedItem.location}</p>
                </div>
                <div className="footer_clothesPopup">
                  <button
                    onClick={() => closePopup(false)}
                    className="detailButton_clothesPopup"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No item found with the provided key.</p>
      )}
    </div>
  );
}

export default Details;
