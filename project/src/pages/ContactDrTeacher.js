import React from "react";
import { data } from "../Data/allDrsTeachers";
//var data = require("../data/regorgname.json");

function ContactDrTeacher({ closeThis, teacherDrId, teacherDrName }) {
  return (
    <div className="headerContainer">
      <div className="title">
        <h1>Contact Details</h1>
      </div>
      <div className="popupContainer">
        {data.map((item, index) => (
          <div key={index}>
            {item.name === teacherDrName && item.id === teacherDrId && (
              <>
                <h2>Number: {item.number}</h2>
                <h2>Living: {item.living}</h2>
                <h2>Email: {item.email}</h2>
              </>
            )}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => closeThis(false)}> Back </button>
      </div>
    </div>
  );
}

export default ContactDrTeacher;
