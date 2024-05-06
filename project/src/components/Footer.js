import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className= "footer">
      <div className= "socialMedia"> 
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <ElderlyWomanIcon />
      </div>
      <p> &copy; 2024 eccomerce.com</p>
    </div>
  );
}

export default Footer
