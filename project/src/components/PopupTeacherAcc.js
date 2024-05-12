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
    <div className="popup-overlay">
      <div className="popup-content">
        <ContactDrTeacher
          closeThis={setShowNOW}
          teacherDrId={teacherId}
          teacherDrName={teacherName}
        />
      </div>
    </div>
  ) : (
    <div className="popupBackground_MedicalPopup">
      <div className="popupContainer_MedicalPopup">
        <div className="popupBody">
          <div className="title">
            <h1>Teacher Details</h1>
          </div>
          <div>
            {data.map((item, index) => (
              <div key={index}>
                {item.name === teacherName && item.id === teacherId && (
                  <>
                    <h2>Name: {item.name}</h2>
                    <h2>Experience: {item.exp}</h2>
                    <h2>Workplace: {item.workplace}</h2>
                    <h2>Specialty: {item.speciality}</h2>
                  </>
                )}
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => closePopup(false)}> Back </button>
            <button
              onClick={() => showContact(teacherId)}
              className="search-button"
            >
              Contact Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupTeacherAcc;
