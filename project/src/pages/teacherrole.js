import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { Link } from "react-router-dom";


function TeacherRole() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, seterror] = useState("");
  const clearError = () => {
    seterror("");
  };



  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
     // alert('Admin has accepted your Application');
     window.location.href = '/teacherprobono';


      
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

      </form>
    </div>
  );
}

export default TeacherRole;
