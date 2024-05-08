import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Link } from "react-router-dom";


function TeacherRole() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, seterror] = useState("");
  const clearError = () => {
    seterror("");
  };
  const [popupMessage, setPopupMessage] = useState("");




  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      setPopupMessage(`Registeration Accepted by Admin; Redirecting you to your Home Page.`);
      setTimeout(() => {
        setPopupMessage("");
        window.location.href = '/teacherprobono';
      }, 3000);



      
    } else {
      seterror('Please select a file.');
      
  setTimeout(clearError, 3000);
    }
  };

  return (
    <div>
      <h2>Please Upload a Teacher Authentication Certificate to Verify Your Profession</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button>Confirm</button>
        {error && <p>{error}</p>}
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

      </form>
    </div>
  );
}

export default TeacherRole;
