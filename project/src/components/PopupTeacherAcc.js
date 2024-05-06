import React, { useState } from "react";
import "../styles/Popup.css";
import { data } from "../Data/allDrsTeachers";
//var data = require("../data/regorgname.json");

function PopupTeacherAcc({ closePopup, teacherName, teacherId }) {
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>TEACHER DETAILS</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.name === teacherName && item.id === teacherId && (
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
          <button onClick={() => closePopup(false)}> BACK </button>
        </div>
      </div>
    </div>
  );
}

export default PopupTeacherAcc;
