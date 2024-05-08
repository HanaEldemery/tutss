import React, { useState } from "react";
import { data } from "../Data/accepteddonationreq";
//var data = require("../data/regorgname.json");

function Popup({ closePopup, currentItemId }) {
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>DETAILS</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.id === currentItemId && (
                <div>
                  <p>{item.category}</p>
                  <p>{item.type}</p>
                  <p>{item.material}</p>
                  <p>{item.model}</p>
                  <p>{item.year}</p>
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
  );
}

export default Popup;
