import React, { useState } from "react";
import { data } from "../Data/accepteddonationreq";
//var data = require("../data/regorgname.json");

function Popup({ closePopup, currentItemId }) {
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>Details</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.id === currentItemId && (
                <div>
                  <p>Category: {item.category}</p>
                  <p>Type: {item.type}</p>
                  <p>Material: {item.material}</p>
                  <p>Model: {item.model}</p>
                  <p>Year: {item.year}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}> Back </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
