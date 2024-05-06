import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { Link } from "react-router-dom";


function TeacherRole() {
  const [selectedFile, setSelectedFile] = useState(null);

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
      alert('Please select a file.');
    }
  };

  return (
    <div>
      <h2>Please Upload a Teacher Authentication Certificate to Verify Your Profession</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <Link to="/teacherprobono">
        <button>Confirm</button>
      </Link>
      </form>
    </div>
  );
}

export default TeacherRole;
