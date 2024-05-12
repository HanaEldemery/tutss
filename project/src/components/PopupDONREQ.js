import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupHELPER from "../components/PopupHELPER";
import PopupDrAcc from "../components/PopupDrAcc";
import PopupTeacherAcc from "../components/PopupTeacherAcc";
import { data } from "../Data/accepteddonationreq";
import "../styles/theStyle.css";

function PopupDONREQ({ closePopup, organisationName }) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentItemId, setCurrentItemId] = useState("");
  const [openDrAcc, setOpenDrAcc] = useState(false);
  const [theDrName, setDrName] = useState("");
  const [theDrId, setDrId] = useState("");
  const [theTeacherName, setTeacherName] = useState("");
  const [theTeacherId, setTeacherId] = useState("");
  const [openTeacherAcc, setOpenTeacherAcc] = useState(false);
  const [dataList, setDataList] = useState(data);

  const newPopup = (itemId) => {
    setShowDetails(true);
    setCurrentItemId(itemId);
  };

  const openDoctorAccount = (drName, drId) => {
    setDrName(drName);
    setDrId(drId);
    setOpenDrAcc(true);
  };

  const openTeacherAccount = (teacherName, teacherId) => {
    setTeacherName(teacherName);
    setTeacherId(teacherId);
    setOpenTeacherAcc(true);
  };

  const removeThis = (id) => {
    const updatedDataList = dataList.filter((item) => item.id !== id);
    setDataList(updatedDataList);
  };

  return (
    <div className="popupDonReqContainer">
      {showDetails && (
        <PopupHELPER
          closePopup={setShowDetails}
          currentItemId={currentItemId}
        />
      )}
      {openDrAcc && (
        <PopupDrAcc
          closePopup={setOpenDrAcc}
          drName={theDrName}
          drID={theDrId}
        />
      )}
      {openTeacherAcc && (
        <PopupTeacherAcc
          closePopup={setOpenTeacherAcc}
          teacherName={theTeacherName}
          teacherId={theTeacherId}
        />
      )}
      {openTeacherAcc || openDrAcc || showDetails ? null : (
        <div className="headerContainer">
          <h1 className="menuTitle">Fulfilled Requests</h1>
          <div className="menuList">
            {dataList
              .filter(
                (item) => item.organisation === organisationName && item.type
              )
              .map((item, index) => (
                <div key={index} className="menuItem">
                  <div
                    className="menuImage"
                    style={{
                      backgroundImage: `url(${item.image})`, // Assuming 'image' is a property in your data
                    }}
                  />
                  <div className="menuDetails">
                    <h2>{item.type}</h2>
                    <div className="buttonContainer">
                      <button
                        onClick={() => newPopup(item.id)}
                        className="small-button"
                      >
                        Details
                      </button>
                      <button
                        className="small-button"
                        onClick={() => removeThis(item.id)}
                      >
                        Delete
                      </button>
                      {item.type === "Medical" && (
                        <button
                          className="small-button"
                          onClick={() =>
                            openDoctorAccount(item.drName, item.drId)
                          }
                        >
                          Doctor
                        </button>
                      )}
                      {item.type === "Education" && (
                        <button
                          className="small-button"
                          onClick={() =>
                            openTeacherAccount(item.teacherName, item.teacherId)
                          }
                        >
                          Teacher
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <button
              className="donation-button"
              onClick={() => closePopup(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupDONREQ;
