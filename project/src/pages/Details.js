import React from "react";
import { data } from "../Data/regorgname";

function Details({ theKey, closePopup }) {
  const matchedItem = data.find((item) => item.id === theKey);

  return (
    <div>
      {matchedItem ? (
        <div>
          {/* <<p>Type: {matchedItem.type}</p>
          <p>Area: {matchedItem.area}</p>
          <p>Governament: {matchedItem.governorate}</p>> */}
          <div className="popupBackground">
            <div className="popupContainer">
              <div className="title">
                <h1>Contact Details</h1>
              </div>
              <div className="body">
                <p>Phone Number: {matchedItem.details}</p>
                <p>Address: {matchedItem.address}</p>
                <p>Location: {matchedItem.location}</p>
                <p>Organization Type: {matchedItem.type}</p>
              </div>
              <div className="footer">
                <button onClick={() => closePopup(false)}> Back </button>
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
