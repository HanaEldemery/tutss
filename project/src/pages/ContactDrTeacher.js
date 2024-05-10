import React from "react";
import { data } from "../Data/allDrsTeachers";
//var data = require("../data/regorgname.json");

function ContactDrTeacher({ closeThis, teacherDrId, teacherDrName }) {
  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>Contact Details</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.name === teacherDrName && item.id === teacherDrId && (
                <>
                  <p>Number: {item.number}</p>
                  <p>Living: {item.living}</p>
                  <p>Email: {item.email}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="footer">
          <button onClick={() => closeThis(false)}> Back </button>
        </div>
      </div>
    </div>
  );
}

export default ContactDrTeacher;
