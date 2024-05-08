import React from "react";
import { data } from "../Data/regdonor";

function DetailsDonor({ theKey, closePopup }) {
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
                <h1>Donor Details</h1>
              </div>
              <div className="body">
                <p>Age: {matchedItem.age}</p>
                <p>Address: {matchedItem.address}</p>
                <p>Donor Type: {matchedItem.typeDonor}</p>
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

export default DetailsDonor;
