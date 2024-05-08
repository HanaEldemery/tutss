import React, { useState } from "react";
import { Box, Checkbox, FormGroup, FormControlLabel, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function TeacherProbono() {
  const [englishChecked, setEnglishChecked] = useState(false);
  const [mathsChecked, setMathsChecked] = useState(false);
  const [scienceChecked, setScienceChecked] = useState(false);
  const [normalClasses, setNormalClasses] = useState(0);
  const [privateTutoringClasses, setPrivateTutoringClasses] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    

    if (!englishChecked && !mathsChecked && !scienceChecked) {
      
      setError("Please select at least one subject.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 5000);

    }

    else if (normalClasses === 0 ) {
      setError("Please specify the number of classes.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 5000);
    }
    else if (privateTutoringClasses === 0) {
      setError("Please specify the number of classes.");
      const clearError = () => {
        setError(null);
      };
      setTimeout(clearError, 5000);
    }
    else {
      window.location.href = "/CommonPageteacher";

    }

  };
 

  return (
    
<div>


    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1>ProBono Classes</h1>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={englishChecked} onChange={(e) => setEnglishChecked(e.target.checked)} />}
          label="English"
        />
        <FormControlLabel
          control={<Checkbox checked={mathsChecked} onChange={(e) => setMathsChecked(e.target.checked)} />}
          label="Maths"
        />
        <FormControlLabel
          control={<Checkbox checked={scienceChecked} onChange={(e) => setScienceChecked(e.target.checked)} />}
          label="Science"
        />
        
        <br />
      </FormGroup>
      <TextField
        id="normal-classes"
        label="# of normal classes"
        type="number"
        inputProps={{ min: 0 }}
        InputLabelProps={{
          shrink: true,
        }}
        value={normalClasses}
        onChange={(e) => setNormalClasses(e.target.value)}
      />
      <br />
      <br />
      <TextField
        id="private-tutoring-classes"
        label="# of Private tutoring classes"
        type="number"
        inputProps={{ min: 0 }}
        InputLabelProps={{
          shrink: true,
        }}
        value={privateTutoringClasses}
        onChange={(e) => setPrivateTutoringClasses(e.target.value)}
        
      />
      
      <br />
      <br />
      <br />
      
          {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      

    </Box>
    
</div>
  );

      }
export default TeacherProbono;