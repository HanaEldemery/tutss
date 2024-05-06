import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function teacherSel() {
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
      <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Maths" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Science" />  
   <FormControlLabel control={<Checkbox defaultChecked />} label="other"   />

      <TextField id="outlined-basic" label="please specify" variant="outlined" />

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

<button type="submit">Submit</button>
  </form> 
     </Box>

  )
}

export default teacherSel
