import React, { useState } from "react";
import { data } from "../Data/allDrsTeachers";
import ContactDrTeacher from "../pages/ContactDrTeacher";
//var data = require("../data/regorgname.json");

function PopupTeacherAcc({ closePopup, teacherName, teacherId }) {
  const [showNOW, setShowNOW] = useState(false);

  const showContact = () => {
    setShowNOW(true);
  };
  return showNOW ? (
    <ContactDrTeacher
      closeThis={setShowNOW}
      teacherDrId={teacherId}
      teacherDrName={teacherName}
    />
  ) : (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>Teacher Details</h1>
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
                  <button
                    onClick={() => showContact(item.id)}
                    className="search-button"
                  >
                    Contant Details
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

export default PopupTeacherAcc;
