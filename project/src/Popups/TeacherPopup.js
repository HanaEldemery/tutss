import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { TeachingData } from "../Data/Teachingdata";

function TeacherPopup({
  closePopup,
  theKey,
  showDonateOptions,
  setShowDonateOptions,
  handleDonate,
}) {
  const navigate = useNavigate();
  const teacher = TeachingData.find((item) => item.id === theKey);

  return (
    <div className="popupBackground">
      <div className="popupContainer">
        <div className="body">
          <h1>{teacher.Subject}</h1>
          <p>{teacher.Subject} Teacher</p>
          <p>Area: {teacher.area}</p>
          <p>Governorate: {teacher.Governorate}</p>
          <p>Number of Students: {teacher.No_of_students}</p>
          <p>Address: {teacher.address}</p>
          {teacher.Location_Google_Marker && (
          <div className="google-maps">
            {teacher.Location_Google_Marker}
          </div>
        )}
        </div>
        <div className="footer">
          {showDonateOptions === teacher.id ? (
            <>
              <button onClick={() => closePopup()} style={{ margin: "10px" }}>
                Hide Details
              </button>

              <Link to="/TransportationSelection">
                <button style={{ margin: "10px" }}>
                  Would you like a ride?
                </button>
              </Link>
              <button
                onClick={() => navigate("/DonationSuccessful")}
                style={{ margin: "10px" }}
              >
                No thank you
              </button>
            </>
          ) : (
            <>
              <button onClick={() => closePopup()} style={{ margin: "10px" }}>
                Hide Details
              </button>

              <button
                onClick={() => setShowDonateOptions(teacher.id)}
                style={{ margin: "10px" }}
              >
                Donate
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherPopup;
