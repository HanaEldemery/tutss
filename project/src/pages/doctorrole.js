import React, { useState, useEffect } from 'react';
import { TextField } from "@mui/material"; // Import Material-UI components

function DoctorRole() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [normalClasses, setNormalClasses] = useState(0);
  const [DoctorType, setDoctorType] = useState("");



  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!DoctorType) {
      setError('Please select a profession field.');
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);    }
    else if (normalClasses === 0) {
      setError("Please specify the number of Pro Bono Cases.");
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);

      // Clear the timeout to avoid memory leaks
    }
    
    else if (!selectedFile) {
      console.log('Selected file:', selectedFile);
      setError('Please select a file.');
      const clearError = () => {
        setError(null);
      };

      setTimeout(clearError, 3000);
    } 
    
    else {
      window.location.href="/CommonPageDoctor";

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
          <br/>
          <br/>
          <br/>

          <TextField
            id="normal-classes"
            label="# of probono cases"
            type="number"
            inputProps={{ min: 0 }} // Prevents negative numbers
            InputLabelProps={{
              shrink: true,
            }}
            value={normalClasses}
            onChange={(e) => setNormalClasses(e.target.value)}
          />
                    <br/>
                    <br/>
                    <div>
              <label htmlFor="type">Select Profession Field:</label>
              <select
                id="type"
                value={DoctorType}
                onChange={(e) => setDoctorType(e.target.value)}
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
          <button>Confirm</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );

}

export default DoctorRole;

