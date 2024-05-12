import { Link } from "react-router-dom";
import React from "react";

function AdminHomePage() {
  return (
    <div className="seifhome">
      <h1>Welcome Back Admin!</h1>
      <div className="seifhome-button-container">
        {/* First row of buttons */}
        <div className="seifhome-button-row">
          <Link to="/AdminDonReq">
            <button className="seifhome-button">Pending Donor Requests</button>
          </Link>
          <Link to="/AdminOrgReq">
            <button className="seifhome-button">Pending Organization Requests</button>
          </Link>
          <Link to="/ViewAllOrganisations">
            <button className="seifhome-button">Registered Organizations</button>
          </Link>
        </div>
        {/* Second row of buttons */}
        <div className="seifhome-button-row">
          <Link to="/ViewAllDonors">
            <button className="seifhome-button">Registered Donors</button>
          </Link>
          <Link to="/Adminchangepass">
            <button className="seifhome-button">Change your Password</button>
          </Link>
          <Link to="/">
            <button className="seifhome-button">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
