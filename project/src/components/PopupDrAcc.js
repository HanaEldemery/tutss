import React, { useState } from "react";
import { data } from "../Data/allDrsTeachers";
import ContactDrTeacher from "../pages/ContactDrTeacher";
//var data = require("../data/regorgname.json");

function PopupDrAcc({ closePopup, drName, drID }) {
  const [showNOW, setShowNOW] = useState(false);

  const showContact = () => {
    setShowNOW(true);
  };

  return showNOW ? (
    <ContactDrTeacher
      closeThis={setShowNOW}
      teacherDrId={drID}
      teacherDrName={drName}
    />
  ) : (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>Doctor Details</h1>
        </div>
        <div className="body">
          {data.map((item, index) => (
            <div key={index}>
              {item.name === drName && item.id === drID && (
                <>
                  <p>Name: {item.name}</p>
                  <p>Experience: {item.exp}</p>
                  <p>Workplace: {item.workplace}</p>
                  <p>Specialty: {item.speciality}</p>
                  <button
                    onClick={() => showContact(item.id)}
                    className="search-button"
                  >
                    Contact Details
                  </button>
                </>
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

export default PopupDrAcc;
