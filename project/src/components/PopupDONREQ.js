import React, { useState, useEffect } from "react";
import PopupHELPER from "../components/PopupHELPER";
import PopupDrAcc from "../components/PopupDrAcc";
import PopupTeacherAcc from "../components/PopupTeacherAcc";
import { data } from "../Data/accepteddonationreq";

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

  return showDetails ? (
    <PopupHELPER closePopup={setShowDetails} currentItemId={currentItemId} />
  ) : openDrAcc ? (
    <PopupDrAcc closePopup={setOpenDrAcc} drName={theDrName} drID={theDrId} />
  ) : openTeacherAcc ? (
    <PopupTeacherAcc
      closePopup={setOpenTeacherAcc}
      teacherName={theTeacherName}
      teacherId={theTeacherId}
    />
  ) : (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="title">
          <h1>Fulfilled Requests</h1>
        </div>
        <div className="body">
          {dataList.map((item, index) => (
            <div key={index}>
              {item.organisation === organisationName && (
                <p>
                  {item.type}
                  <button
                    onClick={() => newPopup(item.id)}
                    className="search-button"
                  >
                    Details
                  </button>
                  <button
                    className="search-button"
                    onClick={() => removeThis(item.id)}
                  >
                    {" "}
                    Remove{" "}
                  </button>
                  {item.type === "Medical" ? (
                    <button
                      className="search-button"
                      onClick={() => openDoctorAccount(item.drName, item.drId)}
                    >
                      Doctor
                    </button>
                  ) : null}
                  {item.type === "Education" ? (
                    <button
                      className="search-button"
                      onClick={() =>
                        openTeacherAccount(item.teacherName, item.teacherId)
                      }
                    >
                      Teacher
                    </button>
                  ) : null}
                  {}
                </p>
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

export default PopupDONREQ;
