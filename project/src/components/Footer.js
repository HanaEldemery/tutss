import React from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <VolunteerActivismIcon />
      </div>
      <p> &copy; 2024 HASSAHDonations.com</p>
    </div>
  );
}

export default Footer;
