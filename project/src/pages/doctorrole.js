import React, { useState } from 'react';
import { Link } from "react-router-dom";

function DoctorRole() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      alert('Admin has accepted your Application')
    } else {
      alert('Please select a file.');
    }
  };

  return (
    <div>
    <div>
    <h2>
        Specify Your Clinic Location on Map
    </h2>
    <iframe width="40%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20GUC%20Dental%20Clinic+(Organization%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
    </div>
    <br/>
    <div>
      <h2>Please Upload a Doctor Authentication Certificate to Verify Your Profession</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <Link to="/CommonPageDoctor">
        <button>Confirm</button>
      </Link>      </form>
    </div>
    </div>
  );
}

export default DoctorRole;
