import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, FormGroup, FormControlLabel, Checkbox, TextField } from "@mui/material"; // Import Material-UI components
function teacherprobono() {
  return (
<Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
      <h1>ProBono Classes</h1>
      <form id="contact-form" method="POST">
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultUnChecked />} label="English" />
      <FormControlLabel control={<Checkbox defaultUnChecked />} label="Maths" />
      <FormControlLabel control={<Checkbox defaultUnChecked />} label="Science" />  


      <br />
      <br />
    </FormGroup>
    <TextField
        id="normal-classes"
        label="# of normal classes"
        type="number"
        inputProps={{ min: 0 }} // Prevents negative numbers
        InputLabelProps={{
          shrink: true,
        }}
      />
            <br />
            <br />  

      <TextField
        id="private-tutoring-classes"
        label="# of Private tutoring classes"
        type="number"
        inputProps={{ min: 0 }} // Prevents negative numbers
        InputLabelProps={{
          shrink: true,
        }}
      />
        <br />
        <br />
        <br />
        <Link to="/CommonPageteacher">
        <button>Submit</button>
      </Link>
  </form> 
     </Box>
  )
}
export default teacherprobono;