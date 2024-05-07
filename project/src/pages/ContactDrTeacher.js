import React from "react";
import "../styles/Popup.css";
import { data } from "../Data/allDrsTeachers";
//var data = require("../data/regorgname.json");

function ContactDrTeacher({ closeThis, teacherDrId, teacherDrName }) {
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>CONTACT DETAILS</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.name === teacherDrName && item.id === teacherDrId && (
                <>
                  <p>{item.number}</p>
                  <p>{item.living}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={() => closeThis(false)}> BACK </button>
        </div>
      </div>
    </div>
  );
}

export default ContactDrTeacher;
