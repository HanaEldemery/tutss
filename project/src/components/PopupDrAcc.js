import React, { useState } from "react";
import "../styles/Popup.css";
import { data } from "../Data/allDrsTeachers";
//var data = require("../data/regorgname.json");

function PopupDrAcc({ closePopup, drName, drID }) {
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>DOCTOR DETAILS</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.name === drName && item.id === drID && (
                <>
                  <p>{item.name}</p>
                  <p>{item.exp}</p>
                  <p>{item.workplace}</p>
                  <p>{item.speciality}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={() => closePopup(false)}> CANCEL </button>
        </div>
      </div>
    </div>
  );
}

export default PopupDrAcc;
