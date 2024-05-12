import React, { useState } from "react";
import { data } from "../Data/accepteddonationreq";
//var data = require("../data/regorgname.json");

function Popup({ closePopup, currentItemId }) {
  return (
    <div className="popupBackground_MedicalPopup">
      <div className="popupContainer_MedicalPopup">
        <div className="popupBody">
          <div className="title">
            <h1>Details</h1>
          </div>
          <div>
            {data.map((item, index) => (
              <div key={index}>
                {item.id === currentItemId && (
                  <div>
                    <h2>Category: {item.category}</h2>
                    <h2>Type: {item.type}</h2>
                    <h2>Material: {item.material}</h2>
                    <h2>Year: {item.year}</h2>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => closePopup(false)}> Back </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
