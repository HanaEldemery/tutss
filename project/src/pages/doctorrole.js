import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material"; // Import Material-UI components
import { Link } from "react-router-dom";

function DoctorRole() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [normalClasses, setNormalClasses] = useState("");
  const [DoctorType, setDoctorType] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!DoctorType) {
      setError("Please select a profession field.");
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);
    } else if (normalClasses <= 0) {
      setError("Please specify the number of Pro Bono Cases.");
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);
    } else if (!selectedFile) {
      let flag = false;
      for (let i = 0; i < normalClasses.length; i++) {
        if (isNaN(parseInt(normalClasses[i]))) {
          setError("Enter a Valid Pro Bono Cases Number");
          const clearError = () => {
            setError(null);
          };

          setTimeout(clearError, 3000);
          flag = true;
        }
      }
      if (!flag) {
        setError("Please select a file.");
        const clearError = () => {
          setError(null);
        };
  
        setTimeout(clearError, 3000);
      }
    

    } else {
      let flag = false;
      for (let i = 0; i < normalClasses.length; i++) {
        if (isNaN(parseInt(normalClasses[i]))) {
          setError("Enter a Valid Pro Bono Cases Number");
          const clearError = () => {
            setError(null);
          };

          setTimeout(clearError, 3000);
          flag = true;
        }
      }
      if (!flag) {
        setPopupMessage(
          `Registeration Accepted by Admin; Redirecting you to your Home Page.`
        );
        setTimeout(() => {
          setPopupMessage("");
          window.location.href = "/CommonPageDoctor";
        }, 3000);
      }
    }
  };

  return (
    <div className="all">
      <div className="headerContainer">
        <h2>Specify Your Clinic Location on Map</h2>
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20GUC%20Dental%20Clinic+(Organization%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
      <br />
      <div className="input-container">
        <div className="input-wrapper">
          <h2>
            Please Upload a Doctor Authentication Certificate to Verify Your
            Profession
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="file" accept=".pdf" onChange={handleFileChange}  classname="file-input"/>
            <br />
            <br />
            <br />
            <label htmlFor="normal-classes">
              # of Probono Cases You Are Ready to take:
            </label>
            <input
              id="normal-classes"
              type="text"
              value={normalClasses}
              onChange={(e) => setNormalClasses(e.target.value)}
              className="inputForm"
            />
            <br />
            <br />
            <div className="input-wrapper">
              <label htmlFor="type">Select Profession Field:</label>
              <select
                id="type"
                value={DoctorType}
                onChange={(e) => setDoctorType(e.target.value)}
                className="inputForm"
              >
                <option value="choose">Choose</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dentist">Dentist</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Pediatriction">Pediatriction</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Psychitrist">Psychitrist</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>
            {error && <p className="error">{error}</p>}


            {popupMessage && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white",
                  padding: "20px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  zIndex: 1,
                }}
              >
                {popupMessage}
              </div>
            )}
              <Link to="/DonorReg">
              <button className="donation-button">Back</button>
            </Link>
            <button className="donation-button">Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default DoctorRole;
