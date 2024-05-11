import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

function TeacherProbono() {
  const [englishChecked, setEnglishChecked] = useState(false);
  const [mathsChecked, setMathsChecked] = useState(false);
  const [scienceChecked, setScienceChecked] = useState(false);
  const [normalClasses, setNormalClasses] = useState("");
  const [privateTutoringClasses, setPrivateTutoringClasses] = useState("");
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!englishChecked && !mathsChecked && !scienceChecked) {
      setError("Please select at least one subject.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 3000);
    } else if (normalClasses <= "0") {
      setError("Please specify the number of Normal classes.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 3000);
    } else if (privateTutoringClasses <= "0") {
      setError("Please specify the number of Private Tutoring classes.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 3000);
    } else if (!selectedFile) {
      setError("Please select a File.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 3000);
    } else {
      setPopupMessage(
        `Registration Accepted by Admin; Redirecting you to your Home Page.`
      );
      setTimeout(() => {
        setPopupMessage("");
        window.location.href = "/CommonPageteacher";
      }, 3000);
    }
  };

  return (
    <div className="all">
      <div className="input-wrapper">
        <h2>
          Please Upload a Teacher Authentication Certificate to Verify Your
          Profession
        </h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="inputForm"
        />
      </div>
      <div className="input-container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h1>ProBono Classes</h1>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={englishChecked}
                  onChange={(e) => setEnglishChecked(e.target.checked)}
                  className="inputForm"
                />
              }
              label="English"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mathsChecked}
                  onChange={(e) => setMathsChecked(e.target.checked)}
                  className="inputForm"
                />
              }
              label="Maths"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={scienceChecked}
                  onChange={(e) => setScienceChecked(e.target.checked)}
                  className="inputForm"
                />
              }
              label="Science"
            />

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
  className="inputForm biggerInput" // Add class for bigger input
/>
<br />
<br />
<label htmlFor="private-classes">
  # of Probono Cases You Are Ready to take:
</label>
<input
  id="private-classes"
  type="text"
  value={privateTutoringClasses}
  onChange={(e) => setPrivateTutoringClasses(e.target.value)}
  className="inputForm biggerInput" // Add class for bigger input
/>
<br />
<br />
<br />
            {error && <p>{error}</p>}
            <p>
              <Link to="/DonorReg">
                <button className="donation-button">Back</button>
              </Link>
              <button type="submit" className="donation-button">Confirm</button> {/* Add class for button styling */}
            </p>
          </FormGroup>
        </Box>
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
      </div>
    </div>
  );
}

export default TeacherProbono;
